// Add comma every third digit from the right
const formatFollowers = (followerCount) => {
	let string = followerCount.toString();
	return string
		.split('')
		.reverse()
		.map((digit, i) => {
			return (i + 1) % 3 === 0 && i < string.length - 1 ? `,${digit}` : digit;
		})
		.reverse()
		.join('');
};

export default formatFollowers;
