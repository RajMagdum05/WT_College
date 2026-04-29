import { Component, signal, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface QuickFix {
  error: string;
  solution: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // State using Signals - Loaded from LocalStorage
  fixes = signal<QuickFix[]>(this.getInitialFixes());
  
  constructor() {
    // Save to LocalStorage whenever the 'fixes' signal changes
    effect(() => {
      localStorage.setItem('quick-fixes', JSON.stringify(this.fixes()));
    });
  }

  private getInitialFixes(): QuickFix[] {
    const saved = localStorage.getItem('quick-fixes');
    return saved ? JSON.parse(saved) : [
      { error: 'Git: Unrelated Histories', solution: 'git merge origin master --allow-unrelated-histories' },
      { error: 'Vite: Port 5173 busy', solution: 'npx kill-port 5173' }
    ];
  }
  
  // Form models
  newError = '';
  newSolution = '';

  addFix() {
    if (!this.newError || !this.newSolution) {
      alert('Please fill both fields!');
      return;
    }

    const newEntry: QuickFix = {
      error: this.newError,
      solution: this.newSolution
    };

    // Update the signal array
    this.fixes.update(current => [...current, newEntry]);

    // Reset inputs
    this.newError = '';
    this.newSolution = '';
    
    alert('Fix saved successfully! 🛠️');
  }

  deleteFix(index: number) {
    this.fixes.update(current => current.filter((_, i) => i !== index));
  }
}
