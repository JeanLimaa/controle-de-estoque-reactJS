export default function useId() {

    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const passwordGroups = 4; // Número de grupos
    const groupLength = 6; // Tamanho de cada grupo
    
    function generatePassword() {
        let password = '';
    
        for (let group = 0; group < passwordGroups; group++) {
            let groupPassword = '';
            for (let i = 0; i < groupLength; i++) {
                const index = Math.floor(Math.random() * charset.length);
                groupPassword += charset[index];
            }
            password += groupPassword;
    
            if (group < passwordGroups - 1) {
                password += '-';
            }
        }
    
        return password;
    }
    
    const newPassword = generatePassword();
    return newPassword
}