import { modal, datepicker } from 'vue-strap';
import {instructorSelectListItem} from '../../formatters/entityFromatter';
import {loadInstructors, saveDepartment} from '../../vuex/actions';

export default {
    components: {modal, datepicker},
    props: {
        department: {
            type: Object
        },
        show: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        header() {
            return this.department.id ? 'Edit Department' : 'Create Department';
        },
        allInstructors() {
            return instructorSelectListItem(this.instructors);
        }
    },
    vuex: {
        getters: {
            instructors: ({instructors}) => instructors.list
        },
        actions: {
            loadInstructors,
            saveDepartment
        }
    },
    created() {
        this.loadInstructors();
    },
    methods: {
        cancel() {
            this.show = false;
        },
        doAction() {
            this.saveDepartment(this.department);
            this.show = false;
        }
    }
};