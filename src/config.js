export const business = {
  name: 'SafPak Temizlik Hizmetleri',
  shortName: 'SafPak',
  phone: '0549 534 46 46',
  whatsapp: '905495344646',
  instagram: 'https://www.instagram.com/safpaktemizlik/',
  instagramHandle: '@safpaktemizlik',
  serviceArea: 'Avcılar, Esenyurt, Beylikdüzü, Bahçelievler, Başakşehir, Gürpınar, Sefaköy ve Küçükçekmece',
  workingHours: 'Pazartesi – Cumartesi, 09.00 – 22.00',
}

export const getWhatsAppUrl = (message = 'Merhaba SafPak, temizlik hizmeti hakkında bilgi almak istiyorum.') => {
  if (!business.whatsapp) return '#randevu'
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`
}
