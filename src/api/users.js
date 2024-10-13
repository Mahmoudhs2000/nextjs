// E x a m p le

// to have APIs called on server
'use server';

import { getLocale } from "next-intl/server";
const { axiosWebsite } = require("@/utils/axios");


export const getNavbar = async () => {
    try {
        const locale = await getLocale();        
        const res = await axiosWebsite.get('/navbar', {headers: {'Language': locale}});
        return res?.data?.data;
    } catch (error) {
        return error;
    }
}