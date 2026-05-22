-- ================================================================
-- StarLive Group — Supabase Migration Script
-- Jalankan di SQL Editor Supabase, urut dari atas ke bawah
-- ================================================================

-- ── 1. PROFILES ──────────────────────────────────────────────────
create table if not exists profiles (
  id            uuid references auth.users(id) on delete cascade primary key,
  username      text not null,
  email         text,
  role          text default 'user' check (role in ('user','admin')),
  wallet        integer default 0,
  avatar_url    text,
  cover_url     text,
  bio           text default 'Hi! I just joined StarLive.',
  online        boolean default false,
  last_seen     timestamptz default now(),
  friends       uuid[] default '{}',
  friend_reqs   uuid[] default '{}',
  badges        text[] default '{}',
  fraction      text,
  frac_exam_done boolean default false,
  frac_result   text,
  created_at    timestamptz default now()
);
alter table profiles enable row level security;

-- ── 2. MESSAGES (chat + fraction global) ─────────────────────────
create table if not exists messages (
  id          bigint generated always as identity primary key,
  room        text not null,
  sender_id   uuid references profiles(id) on delete cascade,
  content     text not null,
  created_at  timestamptz default now()
);
alter table messages enable row level security;
create index if not exists messages_room_idx on messages(room, created_at desc);

-- ── 3. CREATORS ──────────────────────────────────────────────────
create table if not exists creators (
  id          text primary key,
  name        text not null,
  role        text,
  affiliate   text,
  bio         text,
  photo_url   text,
  cover_url   text,
  tags        text[] default '{}',
  socials     jsonb default '{}',
  created_at  timestamptz default now()
);
alter table creators enable row level security;

-- ── 4. PROJECTS ──────────────────────────────────────────────────
create table if not exists projects (
  id          text primary key,
  title       text not null,
  desc        text,
  status      text default 'active',
  progress    integer default 0 check (progress between 0 and 100),
  affiliate   text,
  lead        text,
  image_url   text,
  created_at  timestamptz default now()
);
alter table projects enable row level security;

-- ── 5. GALLERY ───────────────────────────────────────────────────
create table if not exists gallery (
  id           bigint generated always as identity primary key,
  uploader_id  uuid references profiles(id) on delete set null,
  url          text not null,
  type         text default 'image' check (type in ('image','video')),
  caption      text,
  category     text default 'Event',
  created_at   timestamptz default now()
);
alter table gallery enable row level security;

-- ── 6. PRODUCTS ──────────────────────────────────────────────────
create table if not exists products (
  id          bigint generated always as identity primary key,
  name        text not null,
  price       integer not null default 0,
  stock       integer default 0,
  category    text,
  image_url   text,
  desc        text,
  emoji       text default '📦',
  created_at  timestamptz default now()
);
alter table products enable row level security;

-- ── 7. STORE ORDERS ──────────────────────────────────────────────
create table if not exists store_orders (
  id          bigint generated always as identity primary key,
  user_id     uuid references profiles(id) on delete set null,
  items       integer default 0,
  total       numeric(10,2) default 0,
  cart        jsonb default '{}',
  created_at  timestamptz default now()
);
alter table store_orders enable row level security;

-- ── 8. TOPUP REQUESTS ────────────────────────────────────────────
create table if not exists topup_requests (
  id          bigint generated always as identity primary key,
  user_id     uuid references profiles(id) on delete cascade,
  amount      integer not null,
  status      text default 'pending' check (status in ('pending','approved','rejected')),
  note        text,
  created_at  timestamptz default now(),
  updated_at  timestamptz default now()
);
alter table topup_requests enable row level security;

-- ── 9. CHALLENGES ────────────────────────────────────────────────
create table if not exists challenges (
  id          bigint generated always as identity primary key,
  title       text not null,
  desc        text,
  type        text default 'Knowledge',
  reward      text,
  questions   jsonb not null default '[]',
  created_by  uuid references profiles(id) on delete set null,
  status      text default 'pending' check (status in ('pending','approved','rejected')),
  created_at  timestamptz default now()
);
alter table challenges enable row level security;

create table if not exists challenge_attempts (
  id            bigint generated always as identity primary key,
  challenge_id  bigint references challenges(id) on delete cascade,
  user_id       uuid references profiles(id) on delete cascade,
  score         integer,
  passed        boolean,
  created_at    timestamptz default now()
);
alter table challenge_attempts enable row level security;

-- ── 10. ADMIN MESSAGES ───────────────────────────────────────────
create table if not exists admin_messages (
  id          bigint generated always as identity primary key,
  from_id     uuid references profiles(id) on delete cascade,
  type        text default 'complaint' check (type in ('complaint','dm')),
  content     text not null,
  reply       text,
  read        boolean default false,
  reply_read  boolean default false,
  created_at  timestamptz default now()
);
alter table admin_messages enable row level security;

-- ── 11. PAGE VIEWS (analytics) ───────────────────────────────────
create table if not exists page_views (
  id          bigint generated always as identity primary key,
  page        text not null,
  username    text,
  user_id     uuid references profiles(id) on delete set null,
  created_at  timestamptz default now()
);
alter table page_views enable row level security;
create index if not exists page_views_date_idx on page_views(created_at desc);

-- ── 12. VAULT ENTRIES ────────────────────────────────────────────
create table if not exists vault_entries (
  id          bigint generated always as identity primary key,
  title       text not null,
  category    text not null,
  owner       text,
  owner_code  text not null unique,
  content     text,
  tags        text,
  image_url   text,
  image_name  text,
  file_url    text,
  file_name   text,
  file_type   text,
  uploaded    boolean default false,
  uploaded_at timestamptz,
  created_by  uuid references profiles(id) on delete set null,
  created_at  timestamptz default now(),
  updated_at  timestamptz
);
alter table vault_entries enable row level security;

-- ── 13. VAULT LOGS ───────────────────────────────────────────────
create table if not exists vault_logs (
  id          bigint generated always as identity primary key,
  action      text not null,
  title       text,
  code        text,
  by          text,
  created_at  timestamptz default now()
);
alter table vault_logs enable row level security;

-- ================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ================================================================

-- ── PROFILES ─────────────────────────────────────────────────────
create policy "Public profiles readable"
  on profiles for select using (true);

create policy "Users insert own profile"
  on profiles for insert with check (auth.uid() = id);

create policy "Users update own profile"
  on profiles for update using (auth.uid() = id);

create policy "Admin update any profile"
  on profiles for update using (
    exists (select 1 from profiles where id = auth.uid() and role = 'admin')
  );

-- ── MESSAGES ─────────────────────────────────────────────────────
create policy "Authenticated read messages"
  on messages for select using (auth.role() = 'authenticated');

create policy "Users send messages"
  on messages for insert with check (auth.uid() = sender_id);

-- ── CREATORS ─────────────────────────────────────────────────────
create policy "Creators public read"
  on creators for select using (true);

create policy "Admin manages creators"
  on creators for all using (
    exists (select 1 from profiles where id = auth.uid() and role = 'admin')
  );

-- ── PROJECTS ─────────────────────────────────────────────────────
create policy "Projects public read"
  on projects for select using (true);

create policy "Admin manages projects"
  on projects for all using (
    exists (select 1 from profiles where id = auth.uid() and role = 'admin')
  );

-- ── GALLERY ──────────────────────────────────────────────────────
create policy "Gallery public read"
  on gallery for select using (true);

create policy "Authenticated upload gallery"
  on gallery for insert with check (auth.role() = 'authenticated');

create policy "Owner or admin delete gallery"
  on gallery for delete using (
    auth.uid() = uploader_id
    or exists (select 1 from profiles where id = auth.uid() and role = 'admin')
  );

-- ── PRODUCTS ─────────────────────────────────────────────────────
create policy "Products public read"
  on products for select using (true);

create policy "Admin manages products"
  on products for all using (
    exists (select 1 from profiles where id = auth.uid() and role = 'admin')
  );

-- ── STORE ORDERS ─────────────────────────────────────────────────
create policy "Users see own orders"
  on store_orders for select using (auth.uid() = user_id);

create policy "Admin sees all orders"
  on store_orders for select using (
    exists (select 1 from profiles where id = auth.uid() and role = 'admin')
  );

create policy "Users insert own orders"
  on store_orders for insert with check (auth.uid() = user_id);

-- ── TOPUP REQUESTS ───────────────────────────────────────────────
create policy "Users see own topup"
  on topup_requests for select using (auth.uid() = user_id);

create policy "Admin sees all topup"
  on topup_requests for select using (
    exists (select 1 from profiles where id = auth.uid() and role = 'admin')
  );

create policy "Users create topup"
  on topup_requests for insert with check (auth.uid() = user_id);

create policy "Admin update topup"
  on topup_requests for update using (
    exists (select 1 from profiles where id = auth.uid() and role = 'admin')
  );

-- ── CHALLENGES ───────────────────────────────────────────────────
create policy "Challenges public read"
  on challenges for select using (true);

create policy "Authenticated submit challenge"
  on challenges for insert with check (auth.role() = 'authenticated');

create policy "Admin manage challenges"
  on challenges for update using (
    exists (select 1 from profiles where id = auth.uid() and role = 'admin')
  );

create policy "Admin delete challenge"
  on challenges for delete using (
    exists (select 1 from profiles where id = auth.uid() and role = 'admin')
  );

create policy "Challenge attempts readable"
  on challenge_attempts for select using (true);

create policy "Users insert own attempts"
  on challenge_attempts for insert with check (auth.uid() = user_id);

-- ── ADMIN MESSAGES ───────────────────────────────────────────────
create policy "Users see own admin msgs"
  on admin_messages for select using (auth.uid() = from_id);

create policy "Admin see all admin msgs"
  on admin_messages for select using (
    exists (select 1 from profiles where id = auth.uid() and role = 'admin')
  );

create policy "Users send admin msgs"
  on admin_messages for insert with check (auth.uid() = from_id);

create policy "Admin reply admin msgs"
  on admin_messages for update using (
    exists (select 1 from profiles where id = auth.uid() and role = 'admin')
  );

-- ── PAGE VIEWS ───────────────────────────────────────────────────
create policy "Authenticated insert page views"
  on page_views for insert with check (auth.role() = 'authenticated');

create policy "Anon insert page views"
  on page_views for insert with check (true);

create policy "Admin read page views"
  on page_views for select using (
    exists (select 1 from profiles where id = auth.uid() and role = 'admin')
  );

-- ── VAULT ────────────────────────────────────────────────────────
create policy "Admin read vault"
  on vault_entries for select using (
    exists (select 1 from profiles where id = auth.uid() and role = 'admin')
  );

create policy "Admin insert vault"
  on vault_entries for insert with check (
    exists (select 1 from profiles where id = auth.uid() and role = 'admin')
  );

create policy "Admin update vault"
  on vault_entries for update using (
    exists (select 1 from profiles where id = auth.uid() and role = 'admin')
  );

create policy "Admin read vault logs"
  on vault_logs for select using (
    exists (select 1 from profiles where id = auth.uid() and role = 'admin')
  );

create policy "Insert vault logs"
  on vault_logs for insert with check (true);

-- ================================================================
-- STORAGE BUCKETS
-- Jalankan di dashboard Supabase > Storage > New Bucket:
--   1. avatars  (Public: true)
--   2. gallery  (Public: true)
--   3. vault    (Public: false)
-- ================================================================

-- ================================================================
-- TRIGGER: auto-set updated_at for topup_requests
-- ================================================================
create or replace function set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger topup_updated_at
  before update on topup_requests
  for each row execute function set_updated_at();

-- ================================================================
-- TRIGGER: auto-create profile after auth.users signup
-- ================================================================
create or replace function handle_new_user()
returns trigger as $$
begin
  -- Profile is created manually via app.js doReg(),
  -- this trigger is a safety fallback
  insert into profiles (id, username, email)
  values (new.id, split_part(new.email, '@', 1), new.email)
  on conflict (id) do nothing;
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function handle_new_user();

-- ================================================================
-- ENABLE REALTIME (jalankan di SQL Editor)
-- ================================================================
alter publication supabase_realtime add table messages;
alter publication supabase_realtime add table profiles;
alter publication supabase_realtime add table topup_requests;

-- ================================================================
-- SELESAI ✅
-- Selanjutnya:
-- 1. Buka index.html di browser
-- 2. Ganti MASUKKAN_URL dan MASUKKAN_ANON_KEY di app.js
-- 3. Daftar akun dengan email admin@starlive.com untuk akses admin
-- ================================================================
