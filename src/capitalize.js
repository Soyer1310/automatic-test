const capitalize = (string) => {
    if (string === '') {
        return '';
    }
    const [firstChar, ...rest] = string;
    return `${firstChar.toUpperCase()}${rest.join('')}`;
};

export default capitalize;