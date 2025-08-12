export async function handler(event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" };
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  // تحديد الوقت الحالي بصيغة ساعة:دقيقة:ثانية
  const now = new Date();
  const timeString = now.toLocaleTimeString("en-GB", { hour12: false }); // مثال: 15:32:10

  const message = `🚀 Someone just visited your portfolio!\n⏰ Time: ${timeString}`;

  try {
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text: message })
    });

    return { statusCode: 200, body: "Notification sent" };
  } catch (error) {
    return { statusCode: 500, body: "Error sending notification" };
  }
}

