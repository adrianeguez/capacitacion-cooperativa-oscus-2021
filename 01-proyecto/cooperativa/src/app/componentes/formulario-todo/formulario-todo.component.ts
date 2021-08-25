import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-todo',
  templateUrl: './formulario-todo.component.html',
  styleUrls: ['./formulario-todo.component.scss']
})
export class FormularioTodoComponent implements OnInit {

  @Input()
  valorTitulo = '';

  @Input()
  valorCompleted = false;

  @Output()
  // import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
  formularioValido = new EventEmitter<{title:string; completed:boolean;} | undefined>()

  todoForm?: FormGroup;
  constructor( // inyeccion dependencias
    private readonly _formBuilder: FormBuilder
  ) { }
  enviarFormulario(){
    console.log(this.todoForm);
  }
  ngOnInit(): void {

    this.todoForm = this._formBuilder.group(
      {
        titulo: [
          this.valorTitulo, // valor inicial del campo
          [ // Arreglo de validadores SINCRONOS
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(10),
            // Validators.email,
            // Validators.min(1),
            // Validators.max(10),
            // Validators.pattern(/[a-z]/),
            // mas validadores customizados (Validar ruc cedula)
          ],
          // validadores ASYNC
        ],
        completed: [
          this.valorCompleted,
          [
  
          ]
        ]
      }
    )
    if(this.todoForm){
      this.todoForm
        .valueChanges
        .subscribe(
          (datos)=>{
            console.log(datos);
            console.log(this.todoForm);
            if(this.todoForm){
              if(this.todoForm.valid){
                console.log('Esta valido');
                const titleControl = this.todoForm.get('titulo');
                const completedControl = this.todoForm.get('completed');
                if(titleControl && completedControl){
                  this.formularioValido.emit({
                    title: titleControl.value === '' ? undefined : titleControl.value, 
                    completed: completedControl.value
                  });
                }
              } else {
                this.formularioValido.emit(undefined);
                console.log('No esta valido');
              }
            }
          }
        );
    }
  }

}
