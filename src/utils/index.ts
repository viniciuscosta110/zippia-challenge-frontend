
// I was using to convert the job description, but I don't think it's necessary anymore
export const stringToHTML = (str: string) => {
  const parser = new DOMParser()
  const doc = parser.parseFromString(str, 'text/html')
  return doc.body
}