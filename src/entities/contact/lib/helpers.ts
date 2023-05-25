export const convertPhoneToChatId = (phoneNum: string) => {
	const id = phoneNum.replace(/[+-\s()]/g, "").replace(/^8/, "7");

	return `${id}@c.us`;
};
