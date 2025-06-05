import { Component, OnInit } from '@angular/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  form = {
    name: '',
    email: '',
    message: '',
  };

  ngOnInit(): void {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.type = 'text/javascript';
    document.body.appendChild(script);
  }

  successMessage = '';
  errorMessage = '';

  sendEmail() {
    const serviceID = 'service_dcb64fs';
    const templateID = 'template_762jtji';
    const publicKey = 'RSTcMCec2QAeWWLiI';

    emailjs.send(serviceID, templateID, this.form, publicKey).then(
      () => {
        this.successMessage = 'Email sent successfully!';
        this.errorMessage = '';
        // this.form = { name: '', email: '', message: '' };
      },
      (err) => {
        this.errorMessage = 'Failed to send email. Please try again.';
        this.successMessage = '';
        // console.log('Failed to send email.\n' + JSON.stringify(err));
      }
    );
  }
}
