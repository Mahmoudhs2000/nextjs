/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();

const nextConfig = {
    // swcMinify: false
    experimental: {
        optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
    }
};

export default withNextIntl(nextConfig);