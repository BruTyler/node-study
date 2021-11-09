/** Обработка коллекции сообщений чередующимися способами */
export const multiPrint = (messageCollection, ...printers) => {
  const printerCount = printers.length;

  messageCollection.forEach((message, messageIndex) => {
    const printerNumber = messageIndex % printerCount;
    printers[printerNumber](message)
  });
}
