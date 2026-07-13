// script.js - Embedded Systems C Tutorial Interactive Content

(function() {
    'use strict';

    // ----- DOM refs -----
    const grid = document.getElementById('tutorialGrid');
    const dynamicContent = document.getElementById('dynamicContent');

    // ----- CONTENT LIBRARY (keyed by data-topic) -----
    const contentMap = {
        intro: {
            title: 'C Intro',
            body: `<p><strong>Introduction to C</strong> – Developed by Dennis Ritchie, C is a procedural language.</p>
                   <p>It powers embedded systems, OS kernels, and performance-critical applications.</p>`
        },
        getstarted: {
            title: 'C Get Started',
            body: `<p><strong>Getting Started</strong> – Install GCC and write your first program:</p>
                   <pre style="background:#eef2f7; padding:12px; border-radius:8px;"><code>#include &lt;stdio.h&gt;
int main() {
  printf("Hello Embedded World!");
  return 0;
}</code></pre>`
        },
        syntax: {
            title: 'C Syntax',
            body: `<p><strong>C Syntax</strong> – Every C program has <code>main()</code>, statements end with <code>;</code>.</p>
                   <p>Braces <code>{ }</code> define blocks.</p>`
        },
        output: {
            title: 'C Output',
            body: `<p><strong>Output</strong> – <code>printf()</code> is your friend.</p>
                   <p><code>printf("Value: %d", 42);</code> prints <code>Value: 42</code></p>`
        },
        comments: {
            title: 'C Comments',
            body: `<p><strong>Comments</strong> – <code>//</code> single line, <code>/* ... */</code> multi‑line.</p>`
        },
        variables: {
            title: 'C Variables',
            body: `<p><strong>Variables</strong> – <code>type name = value;</code></p>
                   <p><code>int age = 25; float pi = 3.14;</code></p>`
        },
        datatypes: {
            title: 'C Data Types',
            body: `<p><strong>Data Types</strong> – <code>int</code>, <code>float</code>, <code>double</code>, <code>char</code>.</p>
                   <p>Modifiers: <code>short</code>, <code>long</code>, <code>unsigned</code>.</p>`
        },
        typeconversion: {
            title: 'C Type Conversion',
            body: `<p><strong>Type Conversion</strong> – Implicit (automatic) and explicit (casting).</p>
                   <p><code>float x = (float) 5 / 2;  // 2.5</code></p>`
        },
        constants: {
            title: 'C Constants',
            body: `<p><strong>Constants</strong> – <code>const</code> or <code>#define</code>.</p>
                   <p><code>const double PI = 3.14159;</code></p>`
        },
        operators: {
            title: 'C Operators',
            body: `<p><strong>Operators</strong> – Arithmetic, relational, logical, bitwise.</p>
                   <p><code>+  -  *  /  %  &amp;  |  ^  ~  &lt;&lt;  &gt;&gt;</code></p>`
        },
        booleans: {
            title: 'C Booleans',
            body: `<p><strong>Booleans</strong> – Include <code>&lt;stdbool.h&gt;</code> for <code>bool</code>.</p>
                   <p><code>bool flag = true;</code></p>`
        },
        ifelse: {
            title: 'C If...Else',
            body: `<p><strong>If...Else</strong> – Conditional branching.</p>
                   <p><code>if (x &gt; 0) { ... } else { ... }</code></p>`
        },
        switch: {
            title: 'C Switch',
            body: `<p><strong>Switch</strong> – Multi‑way branch.</p>
                   <p><code>switch(day) { case 1: ... break; }</code></p>`
        },
        whileloop: {
            title: 'C While Loop',
            body: `<p><strong>While Loop</strong> – <code>while (condition) { ... }</code></p>`
        },
        forloop: {
            title: 'C For Loop',
            body: `<p><strong>For Loop</strong> – <code>for (init; cond; inc) { ... }</code></p>`
        },
        breakcontinue: {
            title: 'C Break/Continue',
            body: `<p><strong>Break &amp; Continue</strong> – <code>break</code> exits loop, <code>continue</code> skips iteration.</p>`
        },
        arrays: {
            title: 'C Arrays',
            body: `<p><strong>Arrays</strong> – <code>int arr[5] = {1,2,3,4,5};</code></p>`
        },
        strings: {
            title: 'C Strings',
            body: `<p><strong>Strings</strong> – <code>char name[] = "Embedded";</code> (null‑terminated).</p>`
        },
        userinput: {
            title: 'C User Input',
            body: `<p><strong>User Input</strong> – <code>scanf("%d", &amp;age);</code></p>`
        },
        memoryaddress: {
            title: 'C Memory Address',
            body: `<p><strong>Memory Address</strong> – <code>&amp;variable</code> gives address.</p>
                   <p><code>printf("%p", &amp;x);</code></p>`
        },
        pointers: {
            title: 'C Pointers',
            body: `<p><strong>Pointers</strong> – <code>int *ptr = &amp;var;</code></p>
                   <p>Pointers are essential for embedded hardware access.</p>`
        },
        // functions
        functions: {
            title: 'C Functions',
            body: `<p><strong>Functions</strong> – <code>returnType name(params) { ... }</code></p>`
        },
        funcparams: {
            title: 'C Function Parameters',
            body: `<p><strong>Parameters</strong> – pass by value or by reference (pointers).</p>`
        },
        scope: {
            title: 'C Scope',
            body: `<p><strong>Scope</strong> – Local variables exist only inside their block.</p>`
        },
        funcdeclaration: {
            title: 'C Function Declaration',
            body: `<p><strong>Function Declaration</strong> – prototype before <code>main()</code>.</p>`
        },
        funcschallenge: {
            title: 'C Functions Challenge',
            body: `<p><strong>Challenge</strong> – Write a function <code>max(int a, int b)</code>.</p>`
        },
        mathfunctions: {
            title: 'C Math Functions',
            body: `<p><strong>Math</strong> – <code>#include &lt;math.h&gt;</code> for <code>sqrt()</code>, <code>pow()</code>.</p>`
        },
        inlinefunctions: {
            title: 'C Inline Functions',
            body: `<p><strong>Inline</strong> – <code>inline int square(int x) { return x*x; }</code></p>`
        },
        recursion: {
            title: 'C Recursion',
            body: `<p><strong>Recursion</strong> – a function that calls itself.</p>`
        },
        functionpointers: {
            title: 'C Function Pointers',
            body: `<p><strong>Function Pointers</strong> – <code>int (*funcPtr)(int,int) = &amp;sum;</code></p>`
        },
        // files
        createfiles: {
            title: 'C Create Files',
            body: `<p><strong>Create</strong> – <code>FILE *f = fopen("file.txt", "w");</code></p>`
        },
        writetofiles: {
            title: 'C Write To Files',
            body: `<p><strong>Write</strong> – <code>fprintf(f, "data");</code></p>`
        },
        readfiles: {
            title: 'C Read Files',
            body: `<p><strong>Read</strong> – <code>fscanf(f, "%d", &amp;val);</code></p>`
        },
        // structures
        structures: {
            title: 'C Structures',
            body: `<p><strong>Structures</strong> – <code>struct Person { char name[20]; int age; };</code></p>`
        },
        structschallenge: {
            title: 'C Structs Challenge',
            body: `<p><strong>Challenge</strong> – create a struct for a 2D point.</p>`
        },
        nestedstructures: {
            title: 'C Nested Structures',
            body: `<p><strong>Nested</strong> – struct inside struct.</p>`
        },
        structspointers: {
            title: 'C Structs &amp; Pointers',
            body: `<p><strong>Struct pointers</strong> – use <code>-></code> to access members.</p>`
        },
        unions: {
            title: 'C Unions',
            body: `<p><strong>Unions</strong> – share memory; only one member active at a time.</p>`
        },
        typedef: {
            title: 'C typedef',
            body: `<p><strong>typedef</strong> – create alias: <code>typedef struct { ... } Person;</code></p>`
        },
        structpadding: {
            title: 'C Struct Padding',
            body: `<p><strong>Padding</strong> – compiler may add padding for alignment.</p>`
        },
        enums: {
            title: 'C Enums',
            body: `<p><strong>Enums</strong> – <code>enum Color { RED, GREEN, BLUE };</code></p>`
        },
        memorymanagement: {
            title: 'C Memory Management',
            body: `<p><strong>Dynamic memory</strong> – <code>malloc()</code>, <code>calloc()</code>, <code>free()</code>.</p>`
        },
        errors: {
            title: 'C Errors',
            body: `<p><strong>Errors</strong> – compile‑time and runtime.</p>`
        },
        errorchallenge: {
            title: 'C Error Challenge',
            body: `<p><strong>Challenge</strong> – find the bug in a snippet.</p>`
        },
        debugging: {
            title: 'C Debugging',
            body: `<p><strong>Debugging</strong> – use <code>gdb</code> or print statements.</p>`
        },
        null: {
            title: 'C NULL',
            body: `<p><strong>NULL</strong> – <code>#define NULL ((void*)0)</code>.</p>`
        },
        errorhandling: {
            title: 'C Error Handling',
            body: `<p><strong>Error handling</strong> – check return values and <code>errno</code>.</p>`
        },
        inputvalidation: {
            title: 'C Input Validation',
            body: `<p><strong>Input Validation</strong> – always validate to avoid overflows.</p>`
        },
        date: {
            title: 'C Date',
            body: `<p><strong>Date &amp; Time</strong> – <code>#include &lt;time.h&gt;</code></p>`
        },
        randomnumbers: {
            title: 'C Random Numbers',
            body: `<p><strong>Random</strong> – <code>rand()</code> and <code>srand()</code>.</p>`
        },
        macros: {
            title: 'C Macros',
            body: `<p><strong>Macros</strong> – <code>#define PI 3.14</code></p>`
        },
        organizecode: {
            title: 'C Organize Code',
            body: `<p><strong>Organize</strong> – split into <code>.h</code> and <code>.c</code> files.</p>`
        },
        storageclasses: {
            title: 'C Storage Classes',
            body: `<p><strong>Storage Classes</strong> – <code>auto</code>, <code>register</code>, <code>static</code>, <code>extern</code>.</p>`
        },
        bitwise: {
            title: 'C Bitwise Operators',
            body: `<p><strong>Bitwise</strong> – <code>&amp;  |  ^  ~  &lt;&lt;  &gt;&gt;</code></p>`
        },
        fixedwidth: {
            title: 'C Fixed‑width Integers',
            body: `<p><strong>Fixed‑width</strong> – <code>#include &lt;stdint.h&gt;</code> for <code>int32_t</code> etc.</p>`
        },
        projects: {
            title: 'C Projects',
            body: `<p><strong>Projects</strong> – build a temperature logger or a simple shell.</p>`
        }
    };

    // ----- helper: render topic (only for non‑home items) -----
    function renderTopic(topicKey) {
        const data = contentMap[topicKey];
        if (data) {
            dynamicContent.innerHTML = `
                <h2>${data.title}</h2>
                <div class="content-body">${data.body}</div>
            `;
        } else {
            // fallback (should not happen for valid keys)
            dynamicContent.innerHTML = `
                <h2>📘 ${topicKey ? topicKey.charAt(0).toUpperCase() + topicKey.slice(1) : 'Topic'}</h2>
                <div class="content-body">
                    <div class="placeholder-message">
                        <p>Content for "<strong>${topicKey || 'this topic'}</strong>" is being prepared.</p>
                        <p>Stay tuned for more embedded insights.</p>
                    </div>
                </div>
            `;
        }

        // update active class on sidebar links (only for non‑home items)
        const allLinks = grid.querySelectorAll('a[data-topic]');
        allLinks.forEach(link => {
            link.classList.remove('active-item');
            if (link.getAttribute('data-topic') === topicKey) {
                link.classList.add('active-item');
            }
        });
    }

    // ----- attach click listeners to all NON‑HOME links (they have data-topic) -----
    const topicLinks = grid.querySelectorAll('a[data-topic]');
    topicLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // prevent hash change
            const topic = this.getAttribute('data-topic');
            if (topic && contentMap[topic]) {
                renderTopic(topic);
            }
        });
    });

    // ----- initialize -----
    // 1. Auto-update footer year
    const yearElement = document.getElementById('copyright-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // 2. Check URL hash for initial topic
    const hash = window.location.hash.replace('#', '');
    if (hash && contentMap[hash]) {
        renderTopic(hash);
    } else {
        // default: keep the placeholder, ensure no active class
        const allLinks = grid.querySelectorAll('a[data-topic]');
        allLinks.forEach(link => link.classList.remove('active-item'));
    }

})();
