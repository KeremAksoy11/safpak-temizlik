import { useEffect, useRef, useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  BedDouble,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  Droplets,
  Leaf,
  MapPin,
  Menu,
  MessageCircle,
  Quote,
  ShieldCheck,
  Sparkles,
  SprayCan,
  Star,
  Wind,
  X,
} from 'lucide-react'
import { business, getWhatsAppUrl } from './config'

const asset = (fileName) => `${import.meta.env.BASE_URL}assets/${fileName}`

const services = [
  {
    title: 'Koltuk Yıkama',
    kicker: 'Derinlemesine bakım',
    text: 'Kumaş türüne uygun ürünler ve sıcak su ekstraksiyonuyla lekeleri, kiri ve kötü kokuları dokunun derininden arındırıyoruz.',
    image: asset('koltuk.jpg'),
    icon: Sparkles,
  },
  {
    title: 'Yatak Yıkama',
    kicker: 'Ferah bir uyku',
    text: 'Yatak yüzeyindeki toz, alerjen ve lekeleri profesyonel yöntemlerle temizliyor; yaşam alanınıza hijyenik bir tazelik kazandırıyoruz.',
    image: asset('yatak.jpg'),
    icon: BedDouble,
  },
  {
    title: 'Halı Yıkama',
    kicker: 'Adresten alım ve teslim',
    text: 'Halılarınızı adresinizden teslim alıyor; dokusuna uygun profesyonel yöntemlerle temizleyip yeniden adresinize teslim ediyoruz.',
    image: asset('hali.jpg'),
    icon: Droplets,
  },
]

const benefits = [
  {
    icon: SprayCan,
    title: 'Derinlemesine Ekstraksiyon',
    text: 'Profesyonel sistemimiz kiri yüzeyde bırakmaz; kumaşın derininden kontrollü biçimde çeker.',
  },
  {
    icon: Wind,
    title: 'Hızlı Kuruma',
    text: 'Güçlü vakum teknolojisiyle yüzeyde kalan nemi azaltır, kullanım süresini hızlandırırız.',
  },
  {
    icon: Leaf,
    title: 'Hassas Yaşam Alanlarına Uygun',
    text: 'Çocuklu ve evcil hayvanlı evler için yüzeye uygun, özenle seçilmiş ürünler kullanırız.',
  },
]

const processSteps = [
  ['01', 'Bize ulaşın', 'İhtiyacınızı ve uygun olduğunuz zamanı paylaşın.'],
  ['02', 'Ücretsiz bilgi alın', 'Yüzey, adet ve leke durumuna göre net bir plan oluşturalım.'],
  ['03', 'SafPak ferahlığı', 'Ekibimiz adresinizde profesyonel temizliği tamamlasın.'],
]

const testimonials = [
  ['Koltuklarımızın rengi resmen geri geldi. Ekip çok dikkatli ve düzenli çalıştı.', 'Ev temizliği müşterisi'],
  ['Yatak temizliğinden sonra odanın havası bile değişti. Gönül rahatlığıyla tavsiye ederim.', 'Yatak yıkama müşterisi'],
  ['Zorlu lekeler için sonuç beklentimin üstündeydi. Hızlı ve çok özenli bir hizmet.', 'Halı yıkama müşterisi'],
  ['Randevu saatine sadık kaldılar, işlem bittikten sonra her yeri tertemiz bıraktılar.', 'Koltuk yıkama müşterisi'],
]

const faqs = [
  ['Koltuklar ne kadar sürede kurur?', 'Ortam sıcaklığı, hava sirkülasyonu ve kumaş türüne göre değişmekle birlikte güçlü vakumlama sayesinde kuruma süresi mümkün olduğunca kısalır.'],
  ['Hangi lekeler çıkar?', 'Lekenin türü, yaşı ve daha önce uygulanan ürünler sonucu etkiler. İşlem öncesinde yüzeyi inceler, uygulanabilecek en güvenli yöntemi açıkça paylaşırız.'],
  ['Temizlik evde mi yapılıyor?', 'Koltuk ve yatak temizliği adresinizde gerçekleştirilir. Halılarınızı adresinizden teslim alır, profesyonel temizliğin ardından yeniden adresinize teslim ederiz.'],
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
          <a href="#sss" onClick={close}>S.S.S.</a>
          <a className="nav-cta" href="#randevu" onClick={close}>Randevu al <ArrowRight size={16} /></a>
          <div className="nav-socials" aria-label="Sosyal medya ve iletişim bağlantıları">
            <a className="social-link instagram-link" href={business.instagram} target="_blank" rel="noopener noreferrer" aria-label="SafPak Instagram hesabı"><InstagramIcon /><span>Instagram</span></a>
            <a className="social-link whatsapp-link" href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" aria-label="SafPak WhatsApp hattı"><WhatsAppIcon /><span>WhatsApp</span></a>
          </div>
        </nav>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <video className="hero-video" autoPlay muted loop playsInline preload="metadata" poster={asset('hero-poster.jpg')} aria-hidden="true" tabIndex="-1">
        <source src={asset('hero-4k.mp4')} type="video/mp4" />
      </video>
      <div className="hero-overlay" />
      <div className="hero-grain" />
      <div className="hero-content shell">
        <div className="hero-eyebrow"><span className="pulse-dot" /> Profesyonel yerinde temizlik</div>
        <h1>Evinize gelen<br /><em>SafPak ferahlığı.</em></h1>
        <p className="hero-lead">İstanbul’da koltuk, yatak ve halılarınız için yüzeye uygun profesyonel bakım. Derinlemesine temizlik, sade bir randevu deneyimi.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#randevu">Randevu oluştur <ArrowRight size={18} /></a>
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
                <a href="#randevu">Bu hizmet için randevu <ArrowRight size={16} /></a>
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
      <div className="shell benefits-grid">
        <div className="benefits-visual">
          <img src={asset('puzzi.jpg')} alt="SafPak profesyonel temizlik ekipmanı" width="500" height="380" loading="lazy" decoding="async" />
          <div className="visual-badge"><strong>Profesyonel</strong><span>ekipman parkuru</span></div>
          <div className="visual-note"><Sparkles size={18} /><span>Detaylarda<br /><strong>SafPak özeni</strong></span></div>
        </div>
        <div className="benefits-content">
          <SectionHeading eyebrow="Neden SafPak?" title="Sadece temiz görünmez. Temiz hissettirir." text="İyi temizlik; doğru ekipman, yüzey bilgisi ve işi sahiplenmekle başlar." light />
          <div className="benefit-list">
            {benefits.map(({ icon: Icon, title, text }) => (
              <div className="benefit-item" key={title}>
                <span><Icon size={22} /></span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Stats />
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

  return (
    <div className="stats shell" ref={ref}>
      {[
        ['%100', 'Özenli hizmet'],
        ['3', 'Uzmanlık alanı'],
        ['7/7', 'Randevu talebi'],
        ['1', 'Tek kalite standardı'],
      ].map(([value, label], index) => (
        <div className={`stat ${active ? 'reveal' : ''}`} style={{ '--delay': `${index * 90}ms` }} key={label}>
          <strong>{value}</strong><span>{label}</span>
        </div>
      ))}
    </div>
  )
}

function Process() {
  return (
    <section className="section process" id="nasil-calisir">
      <div className="shell">
        <div className="split-heading">
          <SectionHeading eyebrow="Nasıl çalışır?" title="Temizliğe giden üç sade adım." />
          <p>Uzun telefon görüşmeleri ve belirsiz süreçler yok. İhtiyacınızı anlayıp uygun çözümü birlikte netleştiriyoruz.</p>
        </div>
        <div className="process-grid">
          {processSteps.map(([number, title, text], index) => (
            <article className="process-card" key={number}>
              <span className="process-number">{number}</span>
              <div className="process-icon">{index === 0 ? <MessageCircle /> : index === 1 ? <CalendarDays /> : <Sparkles />}</div>
              <h3>{title}</h3>
              <p>{text}</p>
              {index < 2 && <ArrowRight className="process-arrow" />}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Reviews() {
  return (
    <section className="section reviews">
      <div className="shell">
        <SectionHeading eyebrow="Müşteri deneyimi" title="Temizlikten sonra kalan iyi his." text="SafPak deneyimini en iyi, hizmeti alanların sözleri anlatır." />
      </div>
      <div className="review-track-wrap">
        <div className="review-track">
          {[...testimonials, ...testimonials].map(([text, author], index) => (
            <article className="review-card" key={`${author}-${index}`}>
              <Quote size={28} />
              <div className="stars">{[...Array(5)].map((_, i) => <Star key={i} size={15} fill="currentColor" />)}</div>
              <p>“{text}”</p>
              <span>{author}</span>
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
            <div><WhatsAppIcon /><span><small>WhatsApp</small><strong>{business.phone || 'Numara eklenecek'}</strong></span></div>
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
            <label><span>Hizmet *</span><select name="service" required defaultValue="Koltuk Yıkama"><option>Koltuk Yıkama</option><option>Yatak Yıkama</option><option>Halı Yıkama</option></select></label>
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
        <SectionHeading eyebrow="Merak edilenler" title="Aklınızda soru kalmasın." text="Randevu öncesinde en sık karşılaştığımız soruları kısaca yanıtladık." />
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
        <div className="footer-brand"><Logo /><p>Koltuk, yatak ve halılarınız için profesyonel temizlik. Evinize gelen ferah ve özenli hizmet.</p></div>
        <div className="footer-links"><strong>Keşfet</strong><a href="#hizmetler">Hizmetler</a><a href="#neden-biz">Neden SafPak?</a><a href="#nasil-calisir">Nasıl çalışır?</a></div>
        <div className="footer-links"><strong>İletişim</strong><a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={15} /> {business.phone || 'Telefon eklenecek'}</a><span><MapPin size={15} /> İstanbul hizmet bölgeleri</span><span><Clock3 size={15} /> {business.workingHours}</span>{business.instagram && <a href={business.instagram} target="_blank" rel="noopener noreferrer"><InstagramIcon size={15} /> {business.instagramHandle}</a>}</div>
        <div className="footer-cta"><span>Temizliğe hazır mısınız?</span><a className="button button-primary" href="#randevu">Randevu oluştur <ArrowRight size={17} /></a></div>
      </div>
      <div className="shell footer-bottom"><span>© {year} SafPak Temizlik Hizmetleri</span><span>Özenle temizler, ferahlıkla teslim ederiz.</span></div>
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
        <Reviews />
        <Booking />
        <FAQ />
      </main>
      <Footer />
      <FloatingSocials />
    </>
  )
}
