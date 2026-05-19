/**
 * publicディレクトリのアセットパスにベースURLを付与するユーティリティ
 * GitHub Pages（/makisalon/）とVercel（/）の両方で動作する
 */
export function assetPath(path: string): string {
    const base = import.meta.env.BASE_URL.replace(/\/$/, '');
    // パスが / で始まる場合、ベースURLを先頭に付加
    if (path.startsWith('/')) {
        return `${base}${path}`;
    }
    return `${base}/${path}`;
}
