
/* global process */

import dotenv from 'dotenv';
dotenv.config();

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
);

async function fetchData() {
    const { data, error } = await supabase
        .from('test_table') // ensure the name matches EXACTLY with your table
        .select('*');

    if (error) {
        console.error('❌ Supabase fetch error:', error);
    } else {
        console.log('✅ Fetched data from Supabase:', data);
    }
}

fetchData();

async function insertData(name) {
    const { data, error } = await supabase
        .from('test_table')
        .insert([{ name }]);

    if (error) {
        console.error('❌ Insert error:', error);
    } else {
        console.log('✅ Inserted data:', data);
    }
}

// Example usage:
insertData('New Bootcamp Entry');
