const STATUS_DALAM_RUMAH_TANGGA = {
    ISTRI: "Istri",
    SUAMI: "Suami",
    ANAK: "Anak",
    ORANG_TUA: "Orang Tua",
}

const STATUS_MENIKAH = {
    MENIKAH: "Menikah",
    JANDA: "Janda",
    DUDA: "Duda",
    TIDAK_MENIKAH: "Tidak atau Belum Menikah",
}

const STATUS_RUMAH_TINGGAL = {
    MILIK: "Milik Sendiri",
    KPR: "KPR",
    SEWA: "Sewa",
}

const STATUS_KEPENDUDUKAN = {
    MENETAP: "Tinggal di rumah",
    TUGAS: "Sedang Bertugas Belajar dan atau Bekerja",
    TAMBAHAN: "Ikut Saudara"
}

const JENIS_KELAMIN = {
    LAKI_LAKI: "Laki - laki",
    PEREMPUAN: "Perempuan",
}

const AGAMA = {
    ISLAM: "Islam",
    PROTESTAN: "Kristen Protestan",
    KATHOLIK: "Kristen Katholik",
    HINDHU: "Hindhu",
    BUDHA: "Budha",
    KEPERCAYAAN: "Kepercayaan",
};

const PENDIDIKAN = {
    TIDAK_ADA: "Tidak ada atau Belum Bersekolah",
    SD: "Sekolah Dasar 6 Thn",
    SMP: "SMP atau Sederajat 9 Thn",
    SMA: "SMA atau Sederajat 12 Thn",
    DIPLOMA: "Diploma atau Setara",
    SARJANA: "Sarjana atau Setara",
    PASCA_SARJANA: "S2 Atau Setara",
    DOKTOR: "S3 atau setara",
};

const dateFormat = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
}

// untuk data per halaman
const rowPerPage = 5;

export default {
    STATUS_RUMAH_TINGGAL,
    STATUS_DALAM_RUMAH_TANGGA,
    STATUS_MENIKAH,
    STATUS_KEPENDUDUKAN,
    JENIS_KELAMIN,
    AGAMA,
    PENDIDIKAN,

    dateFormat,
    rowPerPage,
}
