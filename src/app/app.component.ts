import { Component, VERSION } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  providerForm: FormGroup;
  keyword = "name";
  public countries = [
    {
      id: 1,
      name: "Albania"
    },
    {
      id: 2,
      name: "Belgium"
    },
    {
      id: 3,
      name: "Denmark"
    },
    {
      id: 4,
      name: "Montenegro"
    }
  ];
  constructor(private fb: FormBuilder) {
    this.providerForm = this.fb.group({
      test: [""]
    });
  }

  limpiarCaja() {
    this.providerForm = this.fb.group({
      test: [""]
    });
  }
}
