# SafPak Temizlik Hizmetleri

React + Vite ile hazırlanmış, mobil uyumlu tek sayfalık tanıtım ve randevu sitesi.

## Canlı site

[https://keremaksoy11.github.io/safpak-temizlik/](https://keremaksoy11.github.io/safpak-temizlik/)

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

Projede sayfa başlığı ve açıklaması, canonical URL, Open Graph ve Twitter kartları, `LocalBusiness` yapılandırılmış verisi, `robots.txt`, `sitemap.xml` ve web manifesti bulunur. Gerçek alan adına geçildiğinde `index.html`, `public/robots.txt`, `public/sitemap.xml` ve `public/site.webmanifest` içindeki geçici GitHub Pages adresleri yeni alan adıyla değiştirilmelidir.

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

Ana bölümdeki 3840×2160 (4K), 25 FPS video `public/assets/hero-4k.mp4`, poster görseli ise `public/assets/hero-poster.jpg` dosyasıdır. Video bileşeni `src/App.jsx` içinde bu dosyaya bağlıdır. Kaynak: [Pexels — A Person Using a Vacuum](https://www.pexels.com/video/a-person-using-a-vacuum-6197558/).
