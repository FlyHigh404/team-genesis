> # Team Genesis 😈

# Contribution Guide

### Alur Persiapan

1. `git clone https://github.com/FlyHigh404/team-genesis.git`
2. `cd team-genesis`
3. `git remote -v` Pastikan remote sesuai dengan repo github
4. `npm i`
5. `npm run dev` Pastikan server sukses berjalan

### Alur Kerja Kontribusi

- Pastikan berada di branch main `git branch` contoh output `main *` (branch aktif terdapat ` *`)
- Sinkronisasi perubahan di main `git pull origin main`
- Sinknroniasi branch `git fetch --prune`
- Buat branch baru `git switch -c <nama-branch>` contoh: `git switch -c section-1`
- Pastikan berada di branch baru `git branch` contoh output `section-1 *` (branch aktif terdapat ` *`)
- Lakukan perubahan pada kode
- Commit & push

1. `git add .`
2. `git commit -m "<pesan commit>"` contoh: `git commit -m "add first section"`
3. `git push origin <nama-branch>`
4. `git log -5 --oneline --graph` (Optional) untuk verifikasi push

- Tunggu di review & merge oleh koordinator
- Ulangi proses ini untuk setiap perubahan baru yang ingin dikembangkan

# Current Task Division

- ADE - `Section 1`
  ![Section Ade](./docs/img/sec1.png)
- BIMA - `Section 2`, `Section 4`
  ![Section Bima](./docs/img/sec2.png)
  ![Section Bima](./docs/img/sec4.png)
- RAKA - `Section 3`
  ![Section Raka](./docs/img/sec3.png)
- RENA - `Section 4`, `Section 5`
  ![Section Rena](./docs/img/sec5.png)
  ![Section Rena](./docs/img/sec6.png)

# Current Next.js Set Up

- What is your project named? ... `betulin`
- Would you like to use TypeScript? ... `No`
- Would you like to use ESLint? ... `Yes`
- Would you like to use Tailwind CSS? ... `Yes`
- Would you like your code inside a `src/` directory? ... `Yes`
- Would you like to use App Router? (recommended) ... `No`
- Would you like to use Turbopack for `next dev`? ... `Yes`
- Would you like to customize the import alias (`@/*` by default)? ... `Yes`
- What import alias would you like configured? ... `@/\*`

# Tech Used Plan

- Node ^22
- Next.js (Pages router)
- Tailwind v4

---

---

> # Thank You! ✌️
