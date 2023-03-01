const numUniqueEmails = function(emails) {
    numberOfEmails = emails.length;
    uniqueEmails = new Set();
    emails.forEach(email => {
        let userPortionIndex = email.indexOf("@");
        let userPortion = email.substring(0, userPortionIndex);
        let emailPortion = email.substring(userPortionIndex, email.length);
        if (userPortion.includes("+")) {
            let ignoreIndex = email.indexOf("+");
            userPortion = userPortion.substring(0, ignoreIndex);
        }
        userPortion = userPortion.replaceAll(".", "");
        const transformedEmail = userPortion + emailPortion;
        uniqueEmails.add(transformedEmail);
    });
    return uniqueEmails.size;
};
