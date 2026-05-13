import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://qsgbkbemluygwmysiqcl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzZ2JrYmVtbHV5Z3dteXNpcWNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY2NTYwNzQsImV4cCI6MjA5MjIzMjA3NH0.ZLa64LVC8apgSa9_zrE4N8Bn1Q4zH6lnuemcpEnttXQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;