import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import InstagramFeed from '../components/sections/InstagramFeed';
import Diagnostic from '../components/sections/Diagnostic';
import Company from '../components/sections/Company';
import { assetPath } from '../utils/assetPath';

const Home = () => {
    return (
        <div className="bg-cream-50 min-h-screen text-charcoal-700">
            <Hero />

            {/* マンガ①: 導入 — ある40代女性の悩み（v2画像差し替え 2026-05-25） */}
            <section className="py-12 bg-cream-100 border-t border-gold-100">
                <div className="container mx-auto px-6 lg:px-12 max-w-2xl">
                    <div className="text-center mb-6">
                        <h2 className="text-xs text-gold-600 tracking-[0.4em] uppercase mb-2 font-display">
                            Manga Story
                        </h2>
                        <div className="w-8 h-[1px] bg-gradient-to-r from-gold-300 to-gold-500 mx-auto mb-3"></div>
                        <h3 className="text-lg md:text-xl font-serif text-charcoal-800 tracking-widest">
                            ある40代女性の悩み
                        </h3>
                    </div>
                    <div className="flex flex-col gap-4">
                        <img
                            src={assetPath('/manga/salon/salon manga_v2/salon01_v2/p01.png')}
                            alt="「最近、鏡見るのがちょっとツラい…」と疲れを感じる40代女性ユカ。"
                            className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white"
                            loading="lazy"
                        />
                        <img
                            src={assetPath('/manga/salon/salon manga_v2/salon01_v2/p02.png')}
                            alt="仕事・家事・育児で自分を後回しにし、夜のリビングで「みんなキレイですごいなぁ」とインスタを見るユカ。"
                            className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white"
                            loading="lazy"
                        />
                        <img
                            src={assetPath('/manga/salon/salon manga_v2/salon01_v2/p03.png')}
                            alt="「安いサロンを巡っても何かが違って…でもちゃんと変わりたい」とデトックスサロンMAKIを検索するユカ。"
                            className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            <About />

            {/* マンガ②: 出会い — MAKIとの出会い（v2画像差し替え 2026-05-25・4枚→5枚） */}
            <section className="py-12 bg-cream-100 border-t border-gold-100">
                <div className="container mx-auto px-6 lg:px-12 max-w-2xl">
                    <div className="text-center mb-6">
                        <h2 className="text-xs text-gold-600 tracking-[0.4em] uppercase mb-2 font-display">
                            Manga Story
                        </h2>
                        <div className="w-8 h-[1px] bg-gradient-to-r from-gold-300 to-gold-500 mx-auto mb-3"></div>
                        <h3 className="text-lg md:text-xl font-serif text-charcoal-800 tracking-widest">
                            MAKIとの出会い
                        </h3>
                    </div>
                    <div className="flex flex-col gap-4">
                        <img
                            src={assetPath('/manga/salon/salon manga_v2/salon02_v2/p04.png')}
                            alt="「ここがあのサロン…」MAKIの入口に立つユカ。マキが両手を重ねてお辞儀し「ようこそ。お待ちしてました」と歓迎。"
                            className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white"
                            loading="lazy"
                        />
                        <img
                            src={assetPath('/manga/salon/salon manga_v2/salon02_v2/p05.png')}
                            alt="「お茶、デトックスティーでいいですか？」マキが両手でデトックスティーを差し出す。ユカ「なんだか緊張がほどけてきた」。"
                            className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white"
                            loading="lazy"
                        />
                        <img
                            src={assetPath('/manga/salon/salon manga_v2/salon02_v2/p06.png')}
                            alt="マキ「ね、聞いてほしいの。外から塗るだけじゃなくて、カラダの中からちゃんと整えること」ユカ「カラダの中から…」と気づく。"
                            className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white"
                            loading="lazy"
                        />
                        <img
                            src={assetPath('/manga/salon/salon manga_v2/salon02_v2/p07.png')}
                            alt="マキが両手で資料を見せ「老廃物やむくみが美容トラブルのベース」と説明。ユカの手の上に手をそっと重ね「大丈夫、ゆっくりでいいですからね」。"
                            className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white"
                            loading="lazy"
                        />
                        <img
                            src={assetPath('/manga/salon/salon manga_v2/salon02_v2/p08.png')}
                            alt="「じゃあ、ゆっくり始めましょうね」マキがユカを施術ルームへ案内。いよいよ施術の時間。"
                            className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            <Services />

            {/* マンガ③: 転換 — 施術で変わる体験（v2.2画像差し替え 2026-05-25） */}
            <section className="py-12 bg-cream-100 border-t border-gold-100">
                <div className="container mx-auto px-6 lg:px-12 max-w-2xl">
                    <div className="text-center mb-6">
                        <h2 className="text-xs text-gold-600 tracking-[0.4em] uppercase mb-2 font-display">
                            Manga Story
                        </h2>
                        <div className="w-8 h-[1px] bg-gradient-to-r from-gold-300 to-gold-500 mx-auto mb-3"></div>
                        <h3 className="text-lg md:text-xl font-serif text-charcoal-800 tracking-widest">
                            施術で変わる体験
                        </h3>
                    </div>
                    <div className="flex flex-col gap-4">
                        <img
                            src={assetPath('/manga/salon/salon manga_v2/section03_v2.2/p09_v2.2.png')}
                            alt="「洗練されたハンド施術／タレント・モデル専属20年の技術」。マキの両手がユカの肩にそっと添えられ「あ…手があったかい…」。"
                            className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white"
                            loading="lazy"
                        />
                        <img
                            src={assetPath('/manga/salon/salon manga_v2/section03_v2.2/p10_v2.2.png')}
                            alt="「東洋医術×オールハンド／リンパの滞り、奥まで押し流す」。ユカ「い、痛っ…！でも…効いてる…!」マキ「ここ、すごい滞ってる。最初は痛い当たり前。越えたら別人ですから」。"
                            className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white"
                            loading="lazy"
                        />
                        <img
                            src={assetPath('/manga/salon/salon manga_v2/section03_v2.2/p11_v2.2.png')}
                            alt="施術後「えっ…！？あの痛みが嘘みたい…！カラダ軽い…！」「顔がきゅっと…肌も明るい…！」「痛みの向こう側に、別人の私がいた…」。"
                            className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white"
                            loading="lazy"
                        />
                        <img
                            src={assetPath('/manga/salon/salon manga_v2/section03_v2.2/p12_v2.2.png')}
                            alt="マキ「ね、痛いだけじゃないでしょう？カラダの中から整うってこういうこと」ユカ「…もっと早く来たかった」と涙する。"
                            className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            <InstagramFeed />

            {/* マンガ④: 確信 — 驚きの変化（v2画像差し替え 2026-05-25） */}
            <section className="py-12 bg-cream-100 border-t border-gold-100">
                <div className="container mx-auto px-6 lg:px-12 max-w-2xl">
                    <div className="text-center mb-6">
                        <h2 className="text-xs text-gold-600 tracking-[0.4em] uppercase mb-2 font-display">
                            Manga Story
                        </h2>
                        <div className="w-8 h-[1px] bg-gradient-to-r from-gold-300 to-gold-500 mx-auto mb-3"></div>
                        <h3 className="text-lg md:text-xl font-serif text-charcoal-800 tracking-widest">
                            驚きの変化
                        </h3>
                    </div>
                    <div className="flex flex-col gap-4">
                        <img
                            src={assetPath('/manga/salon/salon manga_v2/salon04_v2/p13.png')}
                            alt="23歳で独立・最高月商270万円の若きマキ。現在は「タレント・モデル専属20年／1万人以上の方と向き合ってきました」。"
                            className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white"
                            loading="lazy"
                        />
                        <img
                            src={assetPath('/manga/salon/salon manga_v2/salon04_v2/p14.png')}
                            alt="マキがKindle電子書籍「選ばれ続ける人と消える人の決定的な違い」を両手で抱える。集客・単価・リピートが自然に整う信頼で売れる仕組み。ユカ「本まで書いてるんだ…マキさん、この道ひとすじなんだ」と感動。"
                            className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white"
                            loading="lazy"
                        />
                        <img
                            src={assetPath('/manga/salon/salon manga_v2/salon04_v2/p15.png')}
                            alt="マキ「一人ひとりのペースに寄り添いたい。それが私の願いです」「一緒に、少しずつ自分らしい美しさへ」ユカ「私、ちゃんと変われた…」。"
                            className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white"
                            loading="lazy"
                        />
                        <img
                            src={assetPath('/manga/salon/salon manga_v2/salon04_v2/p16.png')}
                            alt="Before → After。一回でここまで変われる。マキが両手を膝の高さでそっと前に出し「次は、あなたの番ですよ」と読者を優しく招く。"
                            className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            <Diagnostic />

            {/* マンガ⑤: 結び — あなたも始めよう（v2画像差し替え 2026-05-25・3枚→4枚） */}
            <section className="py-12 bg-cream-100 border-t border-gold-100">
                <div className="container mx-auto px-6 lg:px-12 max-w-2xl">
                    <div className="text-center mb-6">
                        <h2 className="text-xs text-gold-600 tracking-[0.4em] uppercase mb-2 font-display">
                            Manga Story
                        </h2>
                        <div className="w-8 h-[1px] bg-gradient-to-r from-gold-300 to-gold-500 mx-auto mb-3"></div>
                        <h3 className="text-lg md:text-xl font-serif text-charcoal-800 tracking-widest">
                            あなたも始めよう
                        </h3>
                    </div>
                    <div className="flex flex-col gap-4">
                        <img
                            src={assetPath('/manga/salon/salon manga_v2/salon05_v2/p17.png')}
                            alt="マキがサロン入口でお辞儀「どうぞ、お気軽に。お話だけでも聞かせてくださいね」ユカ「私はLINEで予約しました。ドキドキしたけど、やってよかった」。"
                            className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white"
                            loading="lazy"
                        />
                        <img
                            src={assetPath('/manga/salon/salon manga_v2/salon05_v2/p18.png')}
                            alt="マキがサロン窓辺でハーブティーを両手で包み「変わりたいって思ったその気持ちが、もう最初の一歩なんですよ」「大丈夫、焦らなくていいんです」「あなたのペースで、ゆっくり」。"
                            className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white"
                            loading="lazy"
                        />
                        <img
                            src={assetPath('/manga/salon/salon manga_v2/salon05_v2/p19.png')}
                            alt="「カラダの中から整えていく 本物のデトックス体験」マキ「凛として豊かで自分らしい自分」「お待ちしていますね」。"
                            className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white"
                            loading="lazy"
                        />
                        <img
                            src={assetPath('/manga/salon/salon manga_v2/salon05_v2/p20.png')}
                            alt="デトックスサロンMAKI公式LINE登録「まずは公式LINEに登録から。無料相談、お気軽にどうぞ」MAKIサロン外観でマキが深くお辞儀。"
                            className="w-full h-auto rounded-sm border border-gold-100 shadow-lg bg-white"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            <Company />
        </div>
    );
};

export default Home;
