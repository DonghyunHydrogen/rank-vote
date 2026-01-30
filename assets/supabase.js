// assets/supabase.js
const { SUPABASE_URL, SUPABASE_ANON_KEY } = window.APP_CONFIG;

// sb 라는 전역 객체로 Supabase를 사용하게 합니다.
window.sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: { persistSession: false }
});
