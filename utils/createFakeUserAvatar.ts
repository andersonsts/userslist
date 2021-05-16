export const createFakeUserAvatarByFullName = (fullName: string) => {
  const [firstName, lastName] = fullName.split(' ')
  const firstLetter = firstName.split('')[0]
  const secondLetter = lastName.split('')[0]
  return `${firstLetter}${secondLetter}`
}