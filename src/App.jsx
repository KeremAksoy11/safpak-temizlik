import { useEffect, useRef, useState } from 'react'
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  BadgeDollarSign,
  BedDouble,
  Blinds,
  CalendarDays,
  Camera,
  Check,
  ChevronDown,
  Clock3,
  Droplets,
  HeartHandshake,
  Layers3,
  MapPin,
  Menu,
  MessageCircle,
  MoveHorizontal,
  PackageCheck,
  PhoneCall,
  Quote,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  SprayCan,
  Star,
  Timer,
  Truck,
  Wind,
  Wrench,
  X,
} from 'lucide-react'
import { business, getPhoneUrl, getWhatsAppUrl } from './config'

const asset = (fileName) => `${import.meta.env.BASE_URL}assets/${fileName}`
const appointmentUrl = getWhatsAppUrl('Merhaba SafPak, randevu oluşturmak istiyorum.')

const services = [
  {
    title: 'Halı Yıkama',
    kicker: 'Adresten alım ve teslim',
    text: 'Halılarınızı adresinizden teslim alıyor, profesyonel tesisimizde özenle yıkayıp kuruttuktan sonra tekrar adresinize teslim ediyoruz. Fiyatlar 80 TL/m²’den başlamaktadır.',
    image: asset('hali-profesyonel.jpg'),
    icon: Droplets,
  },
  {
    title: 'Koltuk Yıkama',
    kicker: 'Yerinde profesyonel temizlik',
    text: 'Koltuklarınız adresinizde, profesyonel Kärcher Puzzi 10/1 koltuk yıkama makinesi ve özel temizlik ürünleri kullanılarak detaylı şekilde temizlenir. İşlem; koltuğun durumuna göre ortalama 2–4 saat sürmektedir. Temizlik sonrasında, deterjan kalıntısı bırakmamak ve yeniden kirlenmeyi önlemek için durulama (ekstraksiyon) işlemi uygulanır. Böylece koltuklarınız hem hijyenik hem de kalıntısız şekilde temizlenmiş olur. Fiyatlar 1.700 TL’den başlamaktadır.',
    image: asset('koltuk.jpg'),
    icon: Sparkles,
  },
  {
    title: 'Yatak Yıkama',
    kicker: 'Güvenli derin temizlik',
    text: 'Yataklarınız adresinizde, profesyonel ekipmanlarla derinlemesine temizlenir. İşlem sırasında sağlığa zarar verebilecek ağır kimyasallar kullanılmaz; kumaşa uygun ve güvenli temizlik ürünleri tercih edilir. Hijyenik ve özenli temizlik hizmeti sunuyoruz. Tek kişilik yatak yıkama 1.000 TL’den, çift kişilik yatak yıkama 1.500 TL’den başlayan fiyatlarla.',
    image: asset('yatak.jpg'),
    icon: BedDouble,
  },
  {
    title: 'Yorgan & Battaniye Yıkama',
    kicker: 'Hijyenik yıkama ve paketleme',
    text: 'Ev tekstil ürünleriniz profesyonel yöntemlerle derinlemesine temizlenir, hijyenik ortamda kurutularak özenle paketlenir ve adresinize teslim edilir. Fiyatlar ürünün ölçüsüne göre değişmektedir.',
    image: asset('yorgan-battaniye.jpg'),
    icon: Layers3,
  },
  {
    title: 'Stor Perde Yıkama',
    kicker: 'Adresten alım ve teslim',
    text: 'Stor perdeleriniz adresinizden özenle alınır, kumaşına uygun profesyonel yıkama işlemlerinden geçirilerek hijyenik şekilde temizlenir. Kurutma ve kalite kontrolünün ardından temiz ve kullanıma hazır olarak tekrar adresinize teslim edilir. Fiyatlar 90 TL/m²’den başlayan fiyatlarla sunulmaktadır.',
    image: asset('stor-perde.jpg'),
    icon: Blinds,
  },
]

const benefits = [
  {
    number: '01',
    icon: BadgeDollarSign,
    title: 'Şeffaf ve Uygun Fiyatlandırma',
    text: 'Sürpriz ücretlerle karşılaşmazsınız. Kaliteli hizmeti, bütçenizi zorlamayan fiyatlarla sunuyoruz.',
  },
  {
    number: '02',
    icon: Wrench,
    title: 'Profesyonel Ekipman ve Doğru Yöntem',
    text: 'Halı, koltuk ve yatak temizliğinde profesyonel makineler ve yüzeye uygun temizlik ürünleri kullanıyor, sadece yüzeyi değil derinlemesine temizlik sağlamayı hedefliyoruz.',
  },
  {
    number: '03',
    icon: ScanSearch,
    title: 'Tecrübeli ve Titiz Hizmet',
    text: 'Her ürüne aynı işlemi uygulamıyoruz. Kumaşın yapısına göre en uygun yıkama yöntemini belirleyerek özenli bir temizlik gerçekleştiriyoruz.',
  },
  {
    number: '04',
    icon: Truck,
    title: 'Adresten Alım ve Teslim Kolaylığı',
    text: 'Halı ve stor perdelerinizi adresinizden teslim alıyor, işlemler tamamlandıktan sonra temiz ve kullanıma hazır şekilde tekrar adresinize teslim ediyoruz.',
  },
  {
    number: '05',
    icon: HeartHandshake,
    title: 'Müşteri Memnuniyeti Önceliğimizdir',
    text: 'Amacımız sadece temizlik yapmak değil, hizmetimizden memnun kalmanızı sağlamaktır. İşimizi özenle yapıyor, her müşterimize aynı titizlikle hizmet veriyoruz.',
  },
  {
    number: '06',
    icon: ShieldCheck,
    title: 'Güvenilir Hizmet Anlayışı',
    text: 'Sağlığa uygun temizlik ürünleri, özenli çalışma ve zamanında teslimat ile eşyalarınızı kendi eşyamız gibi koruyoruz.',
  },
]

const processSteps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Bize Ulaşın',
    text: 'Telefon, WhatsApp veya web sitemiz üzerinden bizimle iletişime geçin. Hizmet almak istediğiniz ürünleri ve adres bilgilerinizi iletin.',
  },
  {
    number: '02',
    icon: CalendarDays,
    title: 'Randevunuzu Oluşturalım',
    text: 'Size uygun gün ve saat belirlenir. Halı ve stor perdeleriniz adresinizden teslim alınır, koltuk ve yatak yıkama hizmeti ise adresinizde gerçekleştirilir.',
  },
  {
    number: '03',
    icon: SprayCan,
    title: 'Profesyonel Temizlik',
    text: 'Ürünleriniz, türüne uygun profesyonel ekipman ve güvenli temizlik ürünleri kullanılarak özenle temizlenir. Tüm işlemler titizlikle kontrol edilir.',
  },
  {
    number: '04',
    icon: Wind,
    title: 'Kurutma ve Kalite Kontrol',
    text: 'Yıkanan ürünler uygun koşullarda tamamen kurutulur ve teslimattan önce son kalite kontrolünden geçirilir.',
  },
  {
    number: '05',
    icon: PackageCheck,
    title: 'Temiz Teslimat',
    text: 'İşlemleri tamamlanan ürünleriniz temiz, hijyenik ve kullanıma hazır şekilde zamanında adresinize teslim edilir. Memnuniyetiniz bizim için her zaman önceliklidir.',
  },
]

const testimonials = [
  {
    rating: 4,
    service: 'Halı yıkama',
    text: 'Toplam 8 halı verdim. Bir tanesinde hafif su lekesi kalmıştı. Yazınca hiç uğraştırmadan tekrar gelip aldılar ve ücretsiz yeniden yıkayıp teslim ettiler. Bu ilgileri gerçekten hoşuma gitti.',
  },
  {
    rating: 5,
    service: 'Koltuk yıkama',
    text: 'Koltuklarım çocuklardan dolayı oldukça kirliydi. Yaklaşık 3 saat uğraştılar ve sonuç beklediğimden çok daha iyi oldu. Ellerinize sağlık.',
  },
  {
    rating: 5,
    service: 'Halı yıkama',
    text: 'İlk defa Saf Pak’ı tercih ettim. Halılar tam söyledikleri gün teslim edildi ve mis gibi kokuyordu. Bundan sonra devam edeceğim.',
  },
  {
    rating: 4,
    service: 'Stor perde yıkama',
    text: 'Stor perdelerimi teslim aldılar, birkaç gün içinde tertemiz getirdiler. Küçük bir gecikme oldu ama önceden bilgi verdikleri için sorun yaşamadım.',
  },
  {
    rating: 5,
    service: 'Yatak yıkama',
    text: 'Yatak yıkama hizmeti aldım. Kimyasal kokusu kalmaması benim için önemliydi. Temizlikten sonra sadece ferah bir koku vardı, memnun kaldım.',
  },
  {
    rating: 5,
    service: 'İletişim ve randevu',
    text: 'WhatsApp’tan yazdım, aynı gün dönüş yaptılar. Randevu saatine tam zamanında geldiler. Hizmetleri kadar iletişimleri de çok iyiydi.',
  },
  {
    rating: 5,
    service: 'Genel hizmet',
    text: 'Fiyat araştırması yapmıştım. Hem uygun fiyatlı hem de gerçekten özenli çalışıyorlar. Beklediğimden daha iyi bir hizmet aldım.',
  },
  {
    rating: 4,
    service: 'Koltuk yıkama',
    text: 'Koltuğumdaki eski bir leke tamamen çıkmadı ama bunun nedenini önceden açıkladılar. Ellerinden geleni yaptıkları belli oluyordu, dürüst yaklaşımlarını beğendim.',
  },
  {
    rating: 5,
    service: 'Halı yıkama',
    text: 'Halılarım paketli şekilde teslim edildi. Temizliği kadar teslimat şekli de çok düzenliydi. Güvenle tavsiye ederim.',
  },
  {
    rating: 5,
    service: 'İletişim ve teslimat',
    text: 'İletişimleri çok samimiydi. Sürecin her aşamasında bilgi verdiler ve söyledikleri saatte teslim ettiler. Gönül rahatlığıyla tercih edebilirsiniz.',
  },
]

const faqs = [
  ['Halılarım kaç gün içinde teslim edilir?', 'Halılarınız normal şartlarda 4 gün içerisinde teslim edilir. Nadir de olsa gözden kaçan bir leke tespit edilirse, ücretsiz tekrar yıkama uygulanır. Bu durumda teslim süresi yaklaşık 1 haftaya kadar uzayabilir. Amacımız hızlı değil, temiz teslim etmektir.'],
  ['Halılar adresimden alınıyor mu?', 'Evet. Halılarınızı belirlediğimiz gün adresinizden teslim alıyor, yıkama ve kurutma işlemleri tamamlandıktan sonra tekrar adresinize teslim ediyoruz.'],
  ['Koltuk yıkama ne kadar sürüyor?', 'Koltuk sayısı ve kirlilik durumuna göre değişmekle birlikte işlem ortalama 2 ila 4 saat sürmektedir. Temizlik sonrasında durulama işlemi de uygulanır.'],
  ['Kullanılan temizlik ürünleri sağlığa zararlı mı?', 'Hayır. Hizmetlerimizde kumaşa uygun, profesyonel ve sağlığa zarar vermeyecek temizlik ürünleri kullanılmaktadır.'],
  ['Lekelerin tamamı çıkar mı?', 'Her leke aynı değildir. Yeni oluşmuş lekelerin çıkma ihtimali daha yüksektir. Çok eski, kimyasal veya kumaşa işlemiş lekelerde %100 sonuç garanti edilemez ancak en iyi sonuca ulaşmak için gerekli işlemler uygulanır.'],
  ['Koltuklar ve yataklar ne zaman kurur?', 'Ortam sıcaklığına ve hava durumuna bağlı olarak ortalama 12-24 saat içerisinde kurur. Yaz aylarında bu süre daha kısa olabilir.'],
  ['Stor perdeler sökülüp takılıyor mu?', 'Evet. Ricanız doğrultusunda stor perdelerinizi sökme ve tekrar yerine takma konusunda elimizden gelen desteği sağlıyoruz. Amacımız süreci sizin için mümkün olduğunca kolay ve zahmetsiz hale getirmek.'],
  ['Ödeme ne zaman yapılıyor?', 'Ödemenizi hizmet tamamlandıktan sonra nakit veya banka havalesi/EFT ile güvenle gerçekleştirebilirsiniz.'],
  ['Memnun kalmazsam ne oluyor?', 'Memnuniyet bizim için önemlidir. Hizmet sonrası gözden kaçan bir durum olması halinde bizimle iletişime geçmeniz yeterlidir. Gerekli kontroller yapılarak uygun görülmesi halinde ücretsiz tekrar işlem uygulanır.'],
  ['Hangi bölgelere hizmet veriyorsunuz?', 'İstanbul’un hizmet verdiğimiz bölgelerinde adresinizden alım ve teslimat yapıyoruz. Hizmet bölgesi hakkında bilgi almak için bizimle iletişime geçebilirsiniz.'],
  ['Randevu oluşturmak zor mu?', 'Hayır. Telefon veya WhatsApp üzerinden bize ulaşmanız yeterlidir. Size uygun gün ve saat planlanarak en kısa sürede hizmet sağlanır.'],
  ['Evde koltuk yıkarken etraf kirlenir mi?', 'Hayır. Profesyonel ekipmanlarımız sayesinde kontrollü bir temizlik yapılır. Çalışma alanı özenle korunur ve işlem sonunda çevre temiz bırakılır.'],
  ['Hizmet almadan önce evi hazırlamam gerekiyor mu?', 'Hayır. Sadece koltuk veya yatağın etrafındaki küçük eşyaların kaldırılması yeterlidir. Geri kalan hazırlıkları ekibimiz halleder.'],
  ['Fiyat nasıl belirleniyor?', 'Fiyatlandırma; ürünün türüne, ölçüsüne ve hizmet kapsamına göre belirlenir. İşleme başlamadan önce fiyat bilgisi sizinle paylaşılır, sonradan sürpriz ücret çıkarılmaz.'],
  ['Sonradan ek ücret talep ediliyor mu?', 'Hayır. Fiyat bilgisi hizmet öncesinde sizinle paylaşılır. Onayınız olmadan sonradan herhangi bir ek ücret talep edilmez.'],
]

const gallerySlots = [
  ['01', 'Halı Yıkama'],
  ['02', 'Koltuk Yıkama'],
  ['03', 'Yatak Yıkama'],
  ['04', 'Stor Perde Yıkama'],
]

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="SafPak ana sayfa">
      <span className="logo-image-frame"><img src={asset('safpak-logo.svg')} alt="SafPak Temizlik Hizmetleri" width="520" height="170" /></span>
    </a>
  )
}

function WhatsAppIcon({ size = 22, className = '' }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.875 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.693.625.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.897a9.825 9.825 0 0 1 2.895 6.991c-.003 5.45-4.437 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.14 1.588 5.945L.057 24l6.305-1.654A11.882 11.882 0 0 0 12.047 23.8h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.481-8.413Z" />
    </svg>
  )
}

function InstagramIcon({ size = 21 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-inner shell">
        <Logo />
        <nav className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Ana menü">
          <a href="#hizmetler" onClick={close}>Hizmetler</a>
          <a href="#neden-biz" onClick={close}>Neden SafPak?</a>
          <a href="#nasil-calisir" onClick={close}>Nasıl çalışır?</a>
          <a href="#galeri" onClick={close}>Galeri</a>
          <a href="#sss" onClick={close}>Sıkça Sorulan Sorular</a>
          <a className="nav-cta" href={appointmentUrl} target="_blank" rel="noopener noreferrer" onClick={close}>Randevu al <ArrowRight size={16} /></a>
          <div className="nav-socials" aria-label="Sosyal medya ve iletişim bağlantıları">
            <a className="social-link instagram-link" href={business.instagram} target="_blank" rel="noopener noreferrer" aria-label="SafPak Instagram hesabı"><InstagramIcon /><span>Instagram</span></a>
            <a className="social-link whatsapp-link" href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" aria-label="SafPak WhatsApp hattı"><WhatsAppIcon /><span>WhatsApp</span></a>
          </div>
        </nav>
        <div className="header-mobile-actions">
          <a className="mobile-instagram" href={business.instagram} target="_blank" rel="noopener noreferrer" aria-label="SafPak Instagram hesabını aç"><InstagramIcon size={20} /></a>
          <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'} aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <video className="hero-video" autoPlay muted loop playsInline preload="metadata" poster={asset('hero-sofa-poster.jpg')} aria-hidden="true" tabIndex="-1">
        <source src={asset('hero-sofa-cleaning.mp4')} type="video/mp4" />
      </video>
      <div className="hero-overlay" />
      <div className="hero-grain" />
      <div className="hero-content shell">
        <div className="hero-eyebrow"><span className="pulse-dot" /> Profesyonel yerinde temizlik</div>
        <h1>Evinize gelen<br /><em>SafPak ferahlığı.</em></h1>
        <p className="hero-lead">İstanbul’da halıdan koltuğa, yataktan ev tekstiline kadar her yüzey için profesyonel bakım. Derinlemesine temizlik, sade bir randevu deneyimi.</p>
        <div className="hero-actions">
          <a className="button button-primary" href={appointmentUrl} target="_blank" rel="noopener noreferrer">Randevu oluştur <ArrowRight size={18} /></a>
          <a className="button button-ghost" href="#hizmetler">Hizmetleri incele</a>
        </div>
        <div className="trust-row">
          <span><ShieldCheck size={18} /> Garantili hizmet</span>
          <span><Clock3 size={18} /> Hızlı randevu</span>
          <span><MapPin size={18} /> İstanbul'da hizmet</span>
        </div>
      </div>
      <a className="scroll-cue" href="#hizmetler" aria-label="Hizmetlere ilerle"><ArrowDown size={20} /></a>
    </section>
  )
}

function SectionHeading({ eyebrow, title, text, light = false }) {
  return (
    <div className={`section-heading ${light ? 'light' : ''}`}>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}

function Services() {
  return (
    <section className="section services" id="hizmetler">
      <div className="shell">
        <SectionHeading eyebrow="Hizmetlerimiz" title="Her yüzeye özel, tek bir kalite anlayışı." text="Evinizde en çok temas ettiğiniz yüzeyler için profesyonel ekipman ve özenli uygulama." />
        <div className="service-grid">
          {services.map(({ title, kicker, text, image, icon: Icon }, index) => (
            <article className="service-card" key={title}>
              <div className="service-image-wrap">
                <img src={image} alt={`${title} hizmeti`} loading="lazy" decoding="async" />
                <span className="service-number">0{index + 1}</span>
              </div>
              <div className="service-body">
                <div className="service-icon"><Icon size={21} /></div>
                <p className="service-kicker">{kicker}</p>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href={getWhatsAppUrl(`Merhaba SafPak, ${title} hizmeti için randevu oluşturmak istiyorum.`)} target="_blank" rel="noopener noreferrer">Bu hizmet için randevu <ArrowRight size={16} /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Benefits() {
  return (
    <section className="section benefits" id="neden-biz">
      <div className="shell">
        <SectionHeading eyebrow="Neden SafPak?" title="SafPak’ı tercih etmek için altı güçlü neden." text="Şeffaf fiyatlandırmadan doğru ekipmana, her aşamada güven veren ve özenli bir hizmet anlayışı." light />
        <div className="benefits-grid">
          {benefits.map(({ number, icon: Icon, title, text }) => (
            <article className="benefit-card" key={number}>
              <div className="benefit-card-top">
                <span className="benefit-number">{number}</span>
                <span className="benefit-icon"><Icon size={22} /></span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <Stats />
      </div>
    </section>
  )
}

function Stats() {
  const ref = useRef(null)
  const [active, setActive] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setActive(true), { threshold: 0.35 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const stats = [
    { value: '%93', label: 'Müşteri memnuniyeti', icon: HeartHandshake, featured: true, progress: 93 },
    { value: '5', label: 'Uzmanlık alanı', icon: Sparkles },
    { value: '2.000+', label: 'Yıkanan halı sayısı', icon: Droplets },
    { value: '300+', label: 'Yıkanan koltuk sayısı', icon: SprayCan },
    { value: '5 gün', label: 'Ortalama teslim süresi', icon: Timer },
  ]

  return (
    <div className="stats-wrap" id="rakamlarla-safpak" ref={ref}>
      <div className="stats-heading">
        <div><span>Rakamlarla SafPak</span><h3>Her temizlikte büyüyen güven.</h3></div>
        <p>Bugüne kadar tamamladığımız işlerden ve hizmet standardımızdan öne çıkan rakamlar.</p>
      </div>
      <div className="stats">
        {stats.map(({ value, label, icon: Icon, featured, progress }, index) => (
          <article className={`stat ${featured ? 'is-featured' : ''} ${active ? 'reveal' : ''}`} style={{ '--delay': `${index * 90}ms` }} key={label}>
            <span className="stat-icon"><Icon size={20} /></span>
            <strong>{value}</strong>
            <span className="stat-label">{label}</span>
            {progress && <span className="stat-meter" aria-hidden="true"><i style={{ width: `${progress}%` }} /></span>}
          </article>
        ))}
      </div>
    </div>
  )
}

function Process() {
  return (
    <section className="section process" id="nasil-calisir">
      <div className="shell">
        <div className="split-heading">
          <SectionHeading eyebrow="Nasıl çalışır?" title="Temizliğe giden beş net adım." />
          <p>İlk iletişimden temiz teslimata kadar tüm süreci açık, planlı ve özenli şekilde yönetiyoruz.</p>
        </div>
        <div className="process-grid">
          {processSteps.map(({ number, icon: Icon, title, text }) => (
            <article className="process-card" key={number}>
              <span className="process-number">{number}</span>
              <div className="process-icon"><Icon /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  return (
    <section className="section gallery" id="galeri">
      <div className="shell">
        <div className="gallery-heading">
          <SectionHeading eyebrow="Galeri" title="SafPak işlerinden kareler." text="Gerçek uygulama fotoğraflarımızı bu alanda temizlik öncesi ve sonrası görüntülerle paylaşacağız." />
          <a className="gallery-instagram" href={business.instagram} target="_blank" rel="noopener noreferrer"><InstagramIcon size={19} /> Instagram’da bizi takip edin <ArrowRight size={17} /></a>
        </div>
        <div className="gallery-grid" aria-label="Hazırlanan SafPak hizmet galerisi">
          {gallerySlots.map(([number, title]) => (
            <article className="gallery-slot" key={title} aria-label={`${title} fotoğraf alanı hazırlanıyor`}>
              <span className="gallery-number">{number}</span>
              <span className="gallery-camera"><Camera size={24} /></span>
              <div><strong>{title}</strong><span>Fotoğraf eklenecek</span></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Reviews() {
  const reviewTrackRef = useRef(null)

  const scrollReviews = (direction) => {
    const track = reviewTrackRef.current
    if (!track) return
    track.scrollBy({ left: direction * Math.min(track.clientWidth * 0.82, 760), behavior: 'smooth' })
  }

  return (
    <section className="section reviews" id="yorumlar">
      <div className="shell reviews-heading">
        <SectionHeading eyebrow="Yorumlar" title="SafPak deneyimini müşterilerimiz anlatıyor." text="Yorumları parmağınızla kaydırabilir veya okları kullanarak tek tek inceleyebilirsiniz." />
        <div className="review-controls">
          <span><MoveHorizontal size={18} /> Kaydırarak inceleyin</span>
          <div>
            <button type="button" onClick={() => scrollReviews(-1)} aria-label="Önceki yorum"><ArrowLeft size={20} /></button>
            <button type="button" onClick={() => scrollReviews(1)} aria-label="Sonraki yorum"><ArrowRight size={20} /></button>
          </div>
        </div>
      </div>
      <div className="shell review-track-wrap">
        <div
          className="review-track"
          ref={reviewTrackRef}
          role="region"
          aria-label="Müşteri yorumları"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
              event.preventDefault()
              scrollReviews(event.key === 'ArrowLeft' ? -1 : 1)
            }
          }}
        >
          {testimonials.map(({ rating, service, text }, index) => (
            <article className="review-card" key={`${service}-${index}`} aria-label={`${rating} yıldızlı ${service} yorumu`}>
              <Quote className="review-quote" size={28} />
              <div className="stars" aria-label={`${rating} üzerinden 5 yıldız`}>
                {[...Array(5)].map((_, i) => <Star className={i < rating ? '' : 'is-empty'} key={i} size={16} fill={i < rating ? 'currentColor' : 'none'} />)}
              </div>
              <p>“{text}”</p>
              <span className="review-service">{service}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Booking() {
  const [status, setStatus] = useState('')
  const [sending, setSending] = useState(false)

  const submit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    setSending(true)
    const message = `Merhaba SafPak, randevu talebi oluşturmak istiyorum.\n\nAd Soyad: ${data.get('name')}\nTelefon: ${data.get('phone')}\nHizmet: ${data.get('service')}\nTarih: ${data.get('date') || 'Esnek'}\nAdres/Bölge: ${data.get('address')}\nNot: ${data.get('note') || '-'}`

    if (business.whatsapp) {
      window.open(getWhatsAppUrl(message), '_blank', 'noopener,noreferrer')
      setStatus('Bilgileriniz WhatsApp mesajına dönüştürüldü. Açılan ekranda “Gönder”e dokunarak talebi iletebilirsiniz.')
    } else {
      setStatus('WhatsApp numarası eklendiğinde talep doğrudan hazırlanacak.')
    }
    setSending(false)
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <section className="section booking" id="randevu">
      <div className="shell booking-grid">
        <div className="booking-copy">
          <span className="booking-eyebrow">Randevu</span>
          <h2>Temiz bir başlangıç için ilk adımı atın.</h2>
          <p>Formu doldurun; hizmet detaylarını sizinle birlikte netleştirip uygun randevu zamanını planlayalım.</p>
          <div className="contact-stack">
            <a className="contact-phone" href={getPhoneUrl()} aria-label={`${business.phone} numarasını ara`}><PhoneCall /><span><small>Telefon</small><strong>{business.phone || 'Numara eklenecek'}</strong></span></a>
            <div><MapPin /><span><small>Hizmet bölgesi</small><strong>{business.serviceArea}</strong></span></div>
            <div><Clock3 /><span><small>Çalışma saatleri</small><strong>{business.workingHours}</strong></span></div>
          </div>
          <div className="booking-promise"><ShieldCheck /><span><strong>Bilginiz bizde güvende.</strong><br />Yalnızca randevunuz için iletişime geçeriz.</span></div>
        </div>
        <form className="booking-form" onSubmit={submit}>
          <div className="form-top"><span>Randevu bilgileri</span><small>* Zorunlu alan</small></div>
          <div className="form-channel-note"><WhatsAppIcon /><span><strong>Talebiniz WhatsApp üzerinden iletilir</strong><small>Formu tamamlayınca mesajınız hazır açılır; göndermek için WhatsApp'ta “Gönder”e dokunun.</small></span></div>
          <div className="form-grid">
            <label><span>Ad Soyad *</span><input name="name" required placeholder="Adınız Soyadınız" /></label>
            <label><span>Telefon *</span><input name="phone" required inputMode="tel" placeholder="05xx xxx xx xx" /></label>
            <label><span>Hizmet *</span><select name="service" required defaultValue="Halı Yıkama"><option>Halı Yıkama</option><option>Koltuk Yıkama</option><option>Yatak Yıkama</option><option>Yorgan &amp; Battaniye Yıkama</option><option>Stor Perde Yıkama</option></select></label>
            <label className="date-field"><span>Tarih tercihi</span><span className="date-control"><input name="date" type="date" min={today} aria-label="Tercih edilen randevu tarihi" /><CalendarDays size={19} /></span></label>
            <label className="full"><span>Adres / Bölge *</span><input name="address" required placeholder="İlçe / Mahalle" /></label>
            <label className="full"><span>Ek not</span><textarea name="note" rows="3" placeholder="Leke türü, ürün adedi veya paylaşmak istediğiniz detaylar" /></label>
          </div>
          <button className="button button-primary form-submit" type="submit" disabled={sending}><WhatsAppIcon size={19} /> {sending ? 'Hazırlanıyor...' : 'WhatsApp’tan randevu gönder'} <ArrowRight size={18} /></button>
          {status && <p className="form-status" role="status"><Check size={16} /> {status}</p>}
        </form>
      </div>
    </section>
  )
}

function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section className="section faq" id="sss">
      <div className="shell faq-grid">
        <div className="faq-intro">
          <SectionHeading eyebrow="Sıkça Sorulan Sorular" title="Aklınızda soru kalmasın." text="Hizmet öncesinde ve sonrasında en sık karşılaştığımız soruları açıkça yanıtladık." />
          <div className="faq-summary"><strong>{faqs.length}</strong><span>soruya tek yerde<br />net cevap</span></div>
          <a href={getWhatsAppUrl('Merhaba SafPak, hizmetleriniz hakkında bir sorum var.')} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={18} /> Başka bir sorunuz mu var?</a>
        </div>
        <div className="accordion">
          {faqs.map(([question, answer], index) => (
            <div className={`accordion-item ${open === index ? 'is-open' : ''}`} key={question}>
              <button onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}>
                <span>{question}</span><ChevronDown size={20} />
              </button>
              <div className="accordion-answer"><p>{answer}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="shell footer-main">
        <div className="footer-brand"><Logo /><p>Halı, koltuk, yatak, ev tekstili ve stor perdeleriniz için profesyonel temizlik. Evinize gelen ferah ve özenli hizmet.</p></div>
        <div className="footer-links"><strong>Keşfet</strong><a href="#hizmetler">Hizmetler</a><a href="#neden-biz">Neden SafPak?</a><a href="#nasil-calisir">Nasıl çalışır?</a><a href="#galeri">Galeri</a><a href="#sss">Sıkça Sorulan Sorular</a></div>
        <div className="footer-links"><strong>İletişim</strong><a href={getPhoneUrl()} aria-label={`${business.phone} numarasını ara`}><PhoneCall size={15} /> {business.phone || 'Telefon eklenecek'}</a><span><MapPin size={15} /> İstanbul hizmet bölgeleri</span><span><Clock3 size={15} /> {business.workingHours}</span>{business.instagram && <a href={business.instagram} target="_blank" rel="noopener noreferrer"><InstagramIcon size={15} /> {business.instagramHandle}</a>}</div>
        <div className="footer-cta"><span>Temizliğe hazır mısınız?</span><a className="button button-primary" href={appointmentUrl} target="_blank" rel="noopener noreferrer">Randevu oluştur <ArrowRight size={17} /></a></div>
      </div>
      <div className="shell footer-bottom"><span>© {year} SafPak Temizlik Hizmetleri</span><span className="footer-meta"><span>Özenle temizler, ferahlıkla teslim ederiz.</span><a href="https://www.vecteezy.com/video/3735691-asian-man-cleaning-sofa-with-a-vacuum-cleaner-in-the-living-room-at-home" target="_blank" rel="noopener noreferrer">Hero videosu: Waravut Pramapong / Vecteezy</a></span></div>
    </footer>
  )
}

function FloatingSocials() {
  return (
    <div className="floating-socials" aria-label="Hızlı iletişim bağlantıları">
      <a className="floating-instagram" href={business.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram hesabımızı aç"><InstagramIcon /><span>Instagram</span></a>
      <a className="floating-whatsapp" href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp ile iletişime geç"><WhatsAppIcon /><span>WhatsApp</span></a>
    </div>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <Process />
        <Gallery />
        <Reviews />
        <Booking />
        <FAQ />
      </main>
      <Footer />
      <FloatingSocials />
    </>
  )
}
