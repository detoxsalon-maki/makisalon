import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import InstagramFeed from '../components/sections/InstagramFeed';
import Diagnostic from '../components/sections/Diagnostic';
import Company from '../components/sections/Company';
import MangaViewer from '../components/common/MangaViewer';
import { salonMangaPanels } from '../config/manga-salon';

/**
 * マンガを「scene」フィールドでセグメント分割
 * Hero後 = 導入(1-3)  /  About後 = 出会い(4-6)  /  Services後 = 転換(7-9)
 * Instagram後 = 確信(10-11)  /  Diagnostic後 = 結び(12-13)
 */
const mangaSegments = {
  intro:   salonMangaPanels.filter((p) => p.scene === '導入'),    // 1-3
  meeting: salonMangaPanels.filter((p) => p.scene === '出会い'),  // 4-6
  turning: salonMangaPanels.filter((p) => p.scene === '転換'),    // 7-9
  proof:   salonMangaPanels.filter((p) => p.scene === '確信'),    // 10-11
  closing: salonMangaPanels.filter((p) => p.scene === '結び'),    // 12-13
};

const Home = () => {
    return (
        <div className="bg-cream-50 min-h-screen text-charcoal-700">
            <Hero />

            {/* マンガ①: 導入 — 悩みの共感 */}
            <MangaViewer
                panels={mangaSegments.intro}
                title="ある40代女性の悩み"
                variant="compact"
            />

            <About />

            {/* マンガ②: 出会い — MAKIとの出会い */}
            <MangaViewer
                panels={mangaSegments.meeting}
                title="MAKIとの出会い"
                variant="compact"
            />

            <Services />

            {/* マンガ③: 転換 — 施術で変わる体験 */}
            <MangaViewer
                panels={mangaSegments.turning}
                title="施術で変わる体験"
                variant="compact"
            />

            <InstagramFeed />

            {/* マンガ④: 確信 — 驚きの変化 */}
            <MangaViewer
                panels={mangaSegments.proof}
                title="驚きの変化"
                variant="compact"
            />

            <Diagnostic />

            {/* マンガ⑤: 結び — LINE登録CTA */}
            <MangaViewer
                panels={mangaSegments.closing}
                title="あなたも始めよう"
                variant="compact"
            />

            <Company />
        </div>
    );
};

export default Home;
