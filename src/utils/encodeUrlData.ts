export const getEncodedUrl = (formData: FormData): string => {
  return Array.from(formData.entries())
    .map(([key, value]) => {
      if (value instanceof File) {
        return encodeURIComponent(key) + '=file';
      } else {
        return encodeURIComponent(key) + '=' + encodeURIComponent(value as string);
      }
    })
    .join('&');
};
