import { FormData } from "@/components/contact/page";
import Swal from "sweetalert2";



export function sendEmail(data: FormData) {
    const apiEndpoint = '/api/email';
  
    fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        Swal.fire({
            icon: "success",
            title: response.message,
            showConfirmButton: false,
            timer: 1500
          });;
      })
      .catch((error) => {
        Swal.fire({
            icon: "error",
            title: error,
            showConfirmButton: false,
            timer: 1500
          });
      });
  }