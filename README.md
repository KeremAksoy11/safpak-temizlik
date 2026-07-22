# SafPak Temizlik Hizmetleri

React + Vite ile hazırlanmış, mobil uyumlu tek sayfalık tanıtım ve randevu sitesi.

## Canlı site

[https://safpaktemizlik.com/](https://safpaktemizlik.com/)

## Çalıştırma

```bash
npm install
npm run dev
```

Üretim derlemesi için:

```bash
npm run build
```

`main` dalına gönderilen her değişiklik `.github/workflows/deploy-pages.yml` üzerinden otomatik olarak GitHub Pages'e yayınlanır.

## SEO

Projede sayfa başlığı ve açıklaması, canonical URL, Open Graph ve Twitter kartları, `LocalBusiness`, `ProfessionalService`, `WebSite` ve `FAQPage` yapılandırılmış verileri, `robots.txt`, `sitemap.xml` ve web manifesti bulunur. Tüm SEO adresleri `https://safpaktemizlik.com/` alan adını kullanır.

## İletişim bilgilerini ekleme

Telefon, WhatsApp, Instagram ve hizmet bölgesi bilgileri `src/config.js` dosyasından yönetilir.

- `phone`: Sitede gösterilecek telefon numarası
- `whatsapp`: Ülke koduyla birlikte, boşluksuz WhatsApp numarası (örnek: `905551112233`)
- `instagram`: Instagram profil bağlantısı
- `serviceArea`: Hizmet verilen şehir veya ilçeler
- `workingHours`: Çalışma günleri ve saatleri

WhatsApp numarası eklendiğinde randevu formu doldurulan bilgileri otomatik olarak WhatsApp mesajına dönüştürür.

### Randevu mesajı nasıl çalışır?

Form gönderildiğinde ad, telefon, hizmet, tarih, adres ve not bilgileri işletmenin WhatsApp numarasına yazılmış hazır bir mesaja dönüştürülür. Ziyaretçi, açılan WhatsApp ekranında **Gönder** düğmesine dokunarak talebi iletir.

Tarayıcıdan kullanıcı onayı olmadan otomatik WhatsApp mesajı gönderilemez. Tam otomatik bildirim için Meta WhatsApp Business Cloud API, doğrulanmış işletme hesabı ve güvenli bir sunucu entegrasyonu gerekir; bu entegrasyon şu anda projeye bağlı değildir.

## Hero videosu

Ana bölümdeki 1920×1080, 25 FPS H.264 video `public/assets/hero-sofa-cleaning.mp4`, poster görseli ise `public/assets/hero-sofa-poster.jpg` dosyasıdır. Web için optimize edilen video yaklaşık 3,3 MB boyutundadır. Kaynak ve zorunlu atıf: [Waravut Pramapong / Vecteezy](https://www.vecteezy.com/video/3735691-asian-man-cleaning-sofa-with-a-vacuum-cleaner-in-the-living-room-at-home).

## Hizmet görselleri

`hali-profesyonel.jpg`, `yorgan-battaniye.jpg` ve `stor-perde.jpg` görselleri bu proje için yapay zekâ ile özgün olarak üretildi ve web kullanımına göre optimize edildi.
