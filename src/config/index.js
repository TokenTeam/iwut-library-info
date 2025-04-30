/**
 * Gets a configuration value from environment variables
 * @param key The configuration key
 * @param defaultValue The default value if not found
 * @returns The configuration value
 */
const getConfigValue = (key, defaultValue) => {
    return import.meta.env[key] || defaultValue || ''
}

class Config {
    redirect_url = ''

    constructor(url) {
        this.redirect_url = url
    }
}

const isDev = import.meta.env.MODE === 'development'

const config = new Config(getConfigValue('VITE_REDIRECT_URL', ''));

export default config