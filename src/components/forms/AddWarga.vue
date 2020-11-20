<template>
    <div class="page">
        <div class='page-title' style='text-align:left'>Tambah Warga Baru</div>
        <div style='text-align:left'>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                <b-form-group label-cols-lg="2" id="input-group-1" label="Nomor KTP" label-for="input-1" description="Nomor KTP">
                    <b-form-input
                    id="input-1"
                    v-model="form.nomor_ktp"
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
                    <b-form-radio value="Laki-Laki">Laki-Laki</b-form-radio>
                    <b-form-radio value="Perempuan">Perempuan</b-form-radio>
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
    // BFormSelect,
} from 'bootstrap-vue';


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
    components: {
        BForm,
        BFormGroup,
        BButton,
        // BCard,
        BFormInput,
        // BFormCheckbox,
        // BFormCheckboxGroup,
        // BFormSelect,
        BFormRadio,
        BFormRadioGroup,
        BFormDatepicker,
    },
    data() {
      return {
        form: {
          nomor_ktp: '',
          nama: '',
          tgl_lahir: '',
          rt: '00',
          rw: '00',
          no_rumah: '0',
          jumlah_anggota: '1',
          jenis_kelamin: '',
          pekerjaan: '',
        //   checked: [],
        },
        // foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        const data = {
            ...this.form,
            tgl_ditambahkan: new Date(),
            tgl_diupdate: new Date(),
        }

        alert(JSON.stringify(data))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
}
</script>

<style scoped>

</style>
