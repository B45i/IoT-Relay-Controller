const URL =
    !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
        ? 'http://localhost:4001'
        : '';

export const getButtonsAsync = async () => {
    return fetch(`${URL}/buttons`);
};
