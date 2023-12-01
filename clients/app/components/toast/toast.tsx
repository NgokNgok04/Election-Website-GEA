import Swal from 'sweetalert2/src/sweetalert2.js'
import './page.scss';
import './toast.css';

const Toast = Swal.mixin({
    toast:true,
    position: 'top',
    showConfirmButton: false,
    timer: 1500,
    title: 'Berhasil login',
    icon: 'success',
    customClass: {
        popup: 'custom-toast-display',
        title: 'custom-toast-title',
        icon: 'custom-toast-icon',
    },
    timerProgressBar: true,
    didOpen: (toast : HTMLElement) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
    }
});

export default Toast