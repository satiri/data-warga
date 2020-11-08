<template>
    <div class="page">
        <div class='page-title' style='text-align:left'>Kartu Keluarga</div>
        <div style='text-align:left'>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                <b-form-group label-cols-lg="2" id="input-group-1" label="Nomor Kartu Keluarga" label-for="input-1" description="Nomor Kartu Keluarga">
                    <b-form-input
                    id="input-1"
                    v-model="form.nomor_kk"
                    required
                    placeholder="Nomor Kartu Keluarga"
                    ></b-form-input>
                </b-form-group>

                <b-form-group label-cols-lg="2" id="input-group-1" label="Nama Keluarga" label-for="input-1" description="Nama Keluarga">
                    <b-form-input
                    id="input-1"
                    v-model="form.nama"
                    required
                    placeholder="Nama Keluarga"
                    ></b-form-input>
                </b-form-group>

                <b-form-group label-cols-lg="2" id="input-group-2" label="RT" label-for="input-2">
                    <b-form-input
                    id="input-2"
                    v-model="form.rt"
                    required
                    placeholder="Nomor RT"
                    ></b-form-input>
                </b-form-group>

                <b-form-group label-cols-lg="2" id="input-group-2" label="RW" label-for="input-2">
                    <b-form-input
                    id="input-2"
                    v-model="form.rw"
                    required
                    placeholder="Nomor RW"
                    ></b-form-input>
                </b-form-group>

                <b-form-group label-cols-lg="2" id="input-group-3" label="Nomor Rumah" label-for="input-3">
                    <b-form-input
                    id="input-3"
                    v-model="form.no_rumah"
                    required
                    placeholder="Nomor Rumah"
                    ></b-form-input>
                </b-form-group>

                <b-form-group label-cols-lg="2" id="input-group-4" label="Jumlah Anggota Keluarga" label-for="input-4">
                    <b-form-input
                    id="input-4"
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
                    <b-button type="submit" variant="dark">Submit</b-button> <b-button type="reset" variant="info">Reset</b-button>
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
    name: 'AddKartuKeluarga',
    components: {
        BForm,
        BFormGroup,
        BButton,
        // BCard,
        BFormInput,
        // BFormCheckbox,
        // BFormCheckboxGroup,
        // BFormSelect,
    },
    data() {
      return {
        form: {
          nomor_kk: '',
          nama: '',
          rt: '00',
          rw: '00',
          no_rumah: '0',
          jumlah_anggota: '1',
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
