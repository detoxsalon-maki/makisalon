const Contact = () => {
    return (
        <div className="pt-32 pb-20 px-6 container mx-auto max-w-4xl bg-cream-50 min-h-screen">
            <h1 className="text-3xl font-serif text-charcoal-800 mb-6 text-center tracking-widest">お問い合わせ</h1>
            <p className="text-center text-charcoal-600 font-light mb-12">
                ご不明な点などがございましたら、以下よりお気軽にお問い合わせください。
            </p>
            <div className="bg-white p-8 md:p-12 rounded-sm border border-gold-200">
                <form className="space-y-8">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gold-700 mb-2">お名前 <span className="text-red-500">*</span></label>
                        <input type="text" id="name" className="w-full bg-cream-50 border border-gold-200 rounded-sm py-3 px-4 text-charcoal-800 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors" placeholder="山田 花子" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gold-700 mb-2">メールアドレス <span className="text-red-500">*</span></label>
                        <input type="email" id="email" className="w-full bg-cream-50 border border-gold-200 rounded-sm py-3 px-4 text-charcoal-800 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors" placeholder="example@maki.com" />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gold-700 mb-2">お電話番号</label>
                        <input type="tel" id="phone" className="w-full bg-cream-50 border border-gold-200 rounded-sm py-3 px-4 text-charcoal-800 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors" placeholder="090-XXXX-XXXX" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gold-700 mb-2">お問い合わせ内容 <span className="text-red-500">*</span></label>
                        <textarea id="message" rows={6} className="w-full bg-cream-50 border border-gold-200 rounded-sm py-3 px-4 text-charcoal-800 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors resize-none" placeholder="お問い合わせ内容をご入力ください..."></textarea>
                    </div>
                    <div className="text-center pt-4">
                        <button type="submit" className="bg-gold-600 hover:bg-gold-500 text-cream-50 font-medium tracking-widest py-4 px-12 rounded-sm transition-all duration-300">
                            送信する
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
