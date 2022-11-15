const { createClient } = require("@supabase/supabase-js");

//const url = "<SUPABASE_URL>";
//const key = "<SUPABASE_KEY>";

const url = "https://bnyaacwroakthbkyxsss.supabase.co";
const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJueWFhY3dyb2FrdGhia3l4c3NzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxOTE5MTAsImV4cCI6MTk4Mzc2NzkxMH0.9b_0eVf-liwfOBoTypuYgHQLEk8SnMGAgnm0lgU3diQ";

const supabase = createClient(url, key);

export default supabase;
