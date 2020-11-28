<template>
    <div class="page">
        <div class='page-title' style='text-align:left'>{{ title }}</div>
        <div style='text-align:left'>
            <b-alert variant="success" show dismissible v-if="updateSuccess" @click="onInfoClicked">Data Terupdate</b-alert>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                <b-form-group label-cols-lg="2" id="input-group-1" label="Nomor KTP" label-for="input-1" description="Nomor KTP">
                    <b-form-input
                    id="input-1"
                    v-model="form.no_ktp"
                    placeholder="Nomor KTP (Bila Memiliki)"
                    ></b-form-input>
                </b-form-group>

                <b-form-group label-cols-lg="2" id="input-group-2" label="Nama" label-for="input-2" description="Nama">
                    <b-form-input
                    id="input-2"
                    v-model="form.nama"
                    required
                    placeholder="Nama"
                    ></b-form-input>
                </b-form-group>

                <b-form-group label-cols-lg="2" id="input-group-agama" label="Agama" label-for="input-agama" description="Agama">
                    <b-form-select
                    id="input-agama"
                    v-model="form.agama"
                    :options="agama"
                    required
                    ></b-form-select>
                </b-form-group>

                <b-form-group label-cols-lg="2" id="input-group-3" label="Tgl Lahir" label-for="input-3" description="Tgl Lahir">
                    <b-form-datepicker
                    id="input-3"
                    v-model="form.tgl_lahir"
                    required
                    placeholder="01-01-1970"
                    ></b-form-datepicker>
                </b-form-group>

                <b-form-group label-cols-lg="2" id="input-group-4" label="Jenis Kelamin" >
                    <b-form-radio-group v-model="form.jenis_kelamin" id="checkboxes-4">
                    <b-form-radio value="laki-laki">Laki-Laki</b-form-radio>
                    <b-form-radio value="perempuan">Perempuan</b-form-radio>
                    </b-form-radio-group>
                </b-form-group>

                <b-form-group label-cols-lg="2" id="input-group-4" label="Pekerjaan" label-for="input-4">
                    <b-form-input
                    id="input-4"
                    v-model="form.pekerjaan"
                    required
                    placeholder="Pekerjaan"
                    ></b-form-input>
                </b-form-group>

                <b-form-group label-cols-lg="2" id="input-group-pendidikan" label="pendidikan" label-for="input-pendidikan">
                    <b-form-select
                    id="input-pendidikan"
                    v-model="form.pendidikan"
                    :options="pendidikan"
                    required
                    ></b-form-select>
                </b-form-group>

                <b-form-group label-cols-lg="2" id="input-group-4" label="RT" label-for="input-4">
                    <b-form-input
                    id="input-4"
                    v-model="form.rt"
                    required
                    placeholder="Nomor RT"
                    ></b-form-input>
                </b-form-group>

                <b-form-group label-cols-lg="2" id="input-group-5" label="RW" label-for="input-5">
                    <b-form-input
                    id="input-5"
                    v-model="form.rw"
                    required
                    placeholder="Nomor RW"
                    ></b-form-input>
                </b-form-group>

                <b-form-group label-cols-lg="2" id="input-group-4" label="Nomor Rumah" label-for="input-6">
                    <b-form-input
                    id="input-6"
                    v-model="form.no_rumah"
                    required
                    placeholder="Nomor Rumah"
                    ></b-form-input>
                </b-form-group>

                <b-form-group label-cols-lg="2" id="input-group-7" label="Jumlah Anggota Keluarga" label-for="input-7">
                    <b-form-input
                    id="input-7"
                    v-model="form.jumlah_anggota"
                    required
                    placeholder="Jumlah Anggota"
                    ></b-form-input>
                </b-form-group>

                <!-- <b-form-group id="input-group-3" label="Food:" label-for="input-3">
                    <b-form-select
                    id="input-3"
                    v-model="form.rw"
                    :options="foods"
                    required
                    ></b-form-select>
                </b-form-group> -->

                <!-- <b-form-group id="input-group-4">
                    <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
                    <b-form-checkbox value="me">Check me out</b-form-checkbox>
                    <b-form-checkbox value="that">Check that out</b-form-checkbox>
                    </b-form-checkbox-group>
                </b-form-group> -->

                <b-form-group label-cols-lg="2" id="input-group-5" label="" label-for="input-5">
                    <b-button type="submit" variant="dark">Simpan</b-button> <b-button type="reset" variant="info">Reset</b-button>
                </b-form-group>
                </b-form>
                <!-- <b-card class="mt-3" header="Form Data Result">
                    <pre class="m-0">{{ form }}</pre>
                </b-card> -->
        </div>
    </div>
</template>

<script>
import {
    BForm,
    BFormGroup,
    BButton,
    // BCard,
    BFormInput,
    BFormRadio,
    BFormRadioGroup,
    BFormDatepicker,
    // BFormCheckbox,
    // BFormCheckboxGroup,
    BFormSelect,
    BAlert,
} from 'bootstrap-vue';

import Warga from '@/model/Warga';
import referrence from '@/model/referrence';

        // {
        //     id: 1,
        //     nama: 'Keluarga Bpk. Budi',
        //     rt: '01',
        //     rw: '02',
        //     no_rumah: '44',
        //     jumlah_anggota: 4,
        // },

export default {
    name: 'AddWarga',
    // props: [ 'idWarga' ],
    components: {
        BForm,
        BFormGroup,
        BButton,
        // BCard,
        BFormInput,
        // BFormCheckbox,
        // BFormCheckboxGroup,
        BFormSelect,
        BFormRadio,
        BFormRadioGroup,
        BFormDatepicker,
        BAlert,
    },
    data() {
        const idWarga = this.$route.params.id_warga;
        this.title = 'Tambah Warga Baru';

        if (typeof idWarga !== 'undefined' && idWarga !== null) {
            Warga.getWargaById(idWarga).then((data) => {
                this.form = data;
                this.title = 'Update Warga';
            });
        }

        return {
            updateSuccess:false,
            agama: [
                { text: 'Pilih Agama', value: null },
                ...Object.keys(referrence.AGAMA),
            ],
            pendidikan: [
                { text: 'Pilih Pendidikan', value: null },
                ...Object.keys(referrence.PENDIDIKAN),
            ],
            idWarga: this.getIdWarga(),
            title: 'Tambah Warga Baru',
            form: Warga.getEmptyRow(),
            // form: {
            //     nomor_ktp: '',.
            //     nama: '',
            //     tgl_lahir: '',
            //     rt: '00',
            //     rw: '00',
            //     no_rumah: '0',
            //     jumlah_anggota: '1',
            //     jenis_kelamin: '',
            //     pekerjaan: '',
            //     //   checked: [],
            // },
            // foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
            show: true
      }
    },
    methods: {
      getIdWarga() {
          const idWarga = this.$route.params.id_warga;
          if (typeof idWarga !== 'undefined') {
              return idWarga;
          }

          return null;
      },
      onSubmit(evt) {
        evt.preventDefault()
        if (this.idWarga === null) {
            const tglLahir = new Date(Date.parse(this.form.tgl_lahir));

            const data = {
                ...this.form,
                tgl_ditambahkan: new Date(),
                tgl_diupdate: new Date(),
                tgl_lahir: tglLahir,
            }

            const id = Warga.insert(data);
            if (id !== null) {
                alert('success');
                this.form = Warga.getEmptyRow();
            }
        } else {
            // TODO: tgl mungkin salah. validasi dan tahan
            const tglLahir = new Date(Date.parse(this.form.tgl_lahir));

            const data = {
                ...this.form,
                tgl_diupdate: new Date(),
                tgl_lahir: tglLahir,
            };

            // TODO: add success cue
            Warga.update(this.idWarga, data).then((r) => {
                this.$data.updateSuccess = r;
                
            })
        }
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false;
        this.$data.updateSuccess = false;
        this.$nextTick(() => {
          this.show = true
        })
      },
      onInfoClicked(evt) {
        evt.preventDefault();
        this.$data.updateSuccess = false;
      }
    }
}
</script>

<style scoped>

</style>
