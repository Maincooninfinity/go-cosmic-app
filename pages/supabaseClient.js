import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qjslliftrxtxqfxjdtgc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqc2xsaWZ0cnh0eHFmeGpkdGdjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MDE3ODg3MywiZXhwIjoyMDY1NzU0ODczfQ.h2gWuav0Etq9TrsR9vAkgCSAwYZ5Z2PpSdCfKZ8Qdu4'

export const supabase = createClient(supabaseUrl, supabaseKey)
