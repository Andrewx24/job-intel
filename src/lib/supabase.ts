
const supabaseUrl = 'https://nxbhbvnyxcybpfcmjrns.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY as string;

import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(supabaseUrl, supabaseKey);