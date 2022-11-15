const { createClient } = require("@supabase/supabase-js");

const url = "<SUPABASE_URL>";
const key = "<SUPABASE_KEY>";

const supabase = createClient(url, key);

export default supabase;
