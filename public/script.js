const languages = [
  {
    id: "python", name: "Python", ar: "بايثون", aliases: ["بايثون", "بيثون", "py"],
    type: "لغة برمجة عامة",
    about: "لغة سهلة القراءة نسبيًا، وتُستخدم لبناء البرامج وحل المشكلات والأتمتة.",
    uses: "الذكاء الاصطناعي، تحليل البيانات، الأتمتة، تطبيقات الويب والبرامج.",
    benefit: "بداية مناسبة للمبتدئين، مع مكتبات كثيرة ومجتمع تعليمي واسع.",
    example: 'print("Hello, world!")',
    exampleText: "يعرض رسالة على الشاشة."
  },
  {
    id: "javascript", name: "JavaScript", ar: "جافاسكريبت", aliases: ["جافا سكريبت", "js"],
    type: "لغة برمجة للويب",
    about: "لغة تضيف التفاعل والسلوك الديناميكي إلى صفحات الويب، وتعمل أيضًا في بيئات خارج المتصفح.",
    uses: "المواقع التفاعلية، تطبيقات الويب، الخوادم وأدوات التطوير.",
    benefit: "أساسية لتطوير واجهات الويب التفاعلية، ويمكن استخدامها في أكثر من جانب من المشروع.",
    example: 'console.log("Hello, world!");',
    exampleText: "يطبع رسالة في وحدة التحكم."
  },
  {
    id: "typescript", name: "TypeScript", ar: "تايب سكريبت", aliases: ["تايبسكريبت", "ts"],
    type: "لغة مبنية على JavaScript",
    about: "تضيف أنواعًا ثابتة إلى JavaScript وتُحوّل عادةً إلى JavaScript لتشغيلها.",
    uses: "تطبيقات الويب الكبيرة، المشاريع المشتركة، وتنظيم الأكواد.",
    benefit: "تساعد على اكتشاف أخطاء كثيرة أثناء التطوير وتحسين وضوح الكود.",
    example: 'const name: string = "Motasem";',
    exampleText: "يحدد أن المتغير name يحتوي على نص."
  },
  {
    id: "java", name: "Java", ar: "جافا", aliases: ["جافا"],
    type: "لغة برمجة عامة",
    about: "لغة متعددة الاستخدامات تعتمد على بيئة تشغيل Java، وتشتهر بتطبيقاتها المؤسسية.",
    uses: "أنظمة الشركات، الخوادم، تطبيقات Android ومشاريع كبيرة.",
    benefit: "تدعم بناء برامج منظمة وقابلة للصيانة، ولها أدوات ومكتبات ناضجة.",
    example: 'System.out.println("Hello, world!");',
    exampleText: "يعرض رسالة باستخدام Java."
  },
  {
    id: "c", name: "C", ar: "سي", aliases: ["لغة c"],
    type: "لغة برمجة منخفضة المستوى نسبيًا",
    about: "لغة تمنح المبرمج تحكمًا دقيقًا بالذاكرة والموارد عند بناء البرامج.",
    uses: "أنظمة التشغيل، الأنظمة المضمنة، التعريفات والبرامج عالية الأداء.",
    benefit: "تساعد على فهم أساسيات الذاكرة وكيفية عمل البرامج قرب مستوى النظام.",
    example: '#include <stdio.h>\nint main(void) {\n  printf("Hello!\\n");\n  return 0;\n}',
    exampleText: "برنامج صغير يطبع رسالة ثم ينتهي."
  },
  {
    id: "cpp", name: "C++", ar: "سي بلس بلس", aliases: ["سي بلس بلس", "سي++", "cpp"],
    type: "لغة برمجة عامة",
    about: "لغة تجمع بين البرمجة القريبة من النظام وميزات البرمجة كائنية التوجه وغيرها.",
    uses: "الألعاب، البرامج سريعة الأداء، المحركات والأنظمة.",
    benefit: "توفر أداءً وتحكمًا كبيرين، لكنها تحتاج عناية بالتفاصيل والذاكرة.",
    example: '#include <iostream>\nint main() {\n  std::cout << "Hello!";\n}',
    exampleText: "يعرض رسالة باستخدام مكتبة الإدخال والإخراج."
  },
  {
    id: "csharp", name: "C#", ar: "سي شارب", aliases: ["سي شارب", "سي#"],
    type: "لغة برمجة عامة",
    about: "لغة من منظومة .NET، وتدعم بناء التطبيقات بطرائق برمجية متعددة.",
    uses: "تطبيقات Windows، مواقع وخدمات الويب، الألعاب باستخدام Unity.",
    benefit: "تقدم أدوات تطوير قوية ومكتبات واسعة، وتناسب مشاريع متنوعة.",
    example: 'Console.WriteLine("Hello, world!");',
    exampleText: "يعرض رسالة في تطبيق C#."
  },
  {
    id: "php", name: "PHP", ar: "بي إتش بي", aliases: ["بي اتش بي"],
    type: "لغة برمجة للويب",
    about: "لغة تعمل غالبًا على الخادم لإنشاء صفحات ومحتوى ويب ديناميكي.",
    uses: "مواقع الويب، أنظمة إدارة المحتوى، وخدمات الويب.",
    benefit: "تتوفر لها استضافة واسعة وأدوات كثيرة لبناء مواقع تعتمد على الخادم.",
    example: '<?php echo "Hello, world!"; ?>',
    exampleText: "يرسل نصًا ليظهر في صفحة الويب."
  },
  {
    id: "go", name: "Go", ar: "جو", aliases: ["golang", "جولانج"],
    type: "لغة برمجة عامة",
    about: "لغة صممت لتكون واضحة نسبيًا وتدعم بناء خدمات وبرامج متزامنة.",
    uses: "الخوادم، أدوات المطورين، الخدمات السحابية والشبكات.",
    benefit: "تتميز ببساطة بناء البرامج وسرعة الترجمة ودعم التزامن.",
    example: 'package main\nimport "fmt"\nfunc main() { fmt.Println("Hello!") }',
    exampleText: "برنامج Go بسيط يعرض رسالة."
  },
  {
    id: "rust", name: "Rust", ar: "رَست", aliases: ["رست"],
    type: "لغة برمجة للأنظمة",
    about: "لغة تهتم بالأداء وسلامة الذاكرة، وتستخدم قواعد تمنع فئات من الأخطاء.",
    uses: "أدوات الأنظمة، البرامج عالية الأداء، الشبكات وبعض تطبيقات الويب.",
    benefit: "توفر تحكمًا منخفض المستوى مع ضمانات قوية لسلامة الذاكرة.",
    example: 'fn main() {\n    println!("Hello, world!");\n}',
    exampleText: "الدالة main هي نقطة بدء البرنامج."
  },
  {
    id: "ruby", name: "Ruby", ar: "روبي", aliases: ["روبي"],
    type: "لغة برمجة عامة",
    about: "لغة تشتهر بصياغتها المقروءة وسهولة التعبير عن الأفكار البرمجية.",
    uses: "تطوير الويب باستخدام Rails، الأتمتة والبرامج النصية.",
    benefit: "تساعد على كتابة كود مختصر وواضح.",
    example: 'puts "Hello, world!"',
    exampleText: "puts تطبع النص في الطرفية."
  },
  {
    id: "swift", name: "Swift", ar: "سويفت", aliases: ["سويفت"],
    type: "لغة برمجة",
    about: "لغة تطورها Apple لبناء التطبيقات مع التركيز على الأداء والسلامة.",
    uses: "تطبيقات iPhone وiPad وMac وApple Watch.",
    benefit: "مناسبة لمن يريد تطوير تطبيقات ضمن منظومة Apple.",
    example: 'print("Hello, world!")',
    exampleText: "يطبع نصًا في بيئة Swift."
  },
  {
    id: "kotlin", name: "Kotlin", ar: "كوتلن", aliases: ["كوتلين", "كوتلن"],
    type: "لغة برمجة",
    about: "لغة حديثة تعمل على JVM وتستخدم على نطاق واسع في تطوير Android.",
    uses: "تطبيقات Android، الخوادم وبعض مشاريع متعددة المنصات.",
    benefit: "تقلل بعض التكرار في الكود وتدعم التوافق مع Java.",
    example: 'fun main() {\n    println("Hello, world!")\n}',
    exampleText: "fun main نقطة بدء البرنامج."
  },
  {
    id: "dart", name: "Dart", ar: "دارت", aliases: ["دارت"],
    type: "لغة برمجة",
    about: "لغة ترتبط كثيرًا بإطار Flutter لبناء واجهات التطبيقات.",
    uses: "تطبيقات الهواتف والويب وسطح المكتب باستخدام Flutter.",
    benefit: "يمكن أن تساعد في مشاركة جزء كبير من الكود بين منصات متعددة.",
    example: 'void main() {\n  print("Hello, world!");\n}',
    exampleText: "الدالة main هي بداية تنفيذ البرنامج."
  },
  {
    id: "r", name: "R", ar: "آر", aliases: ["لغة آر", "لغة r"],
    type: "لغة للتحليل الإحصائي",
    about: "لغة وبيئة تركزان على الإحصاء وتحليل البيانات والرسوم البيانية.",
    uses: "البحوث، الإحصاء، تحليل البيانات والتصورات البيانية.",
    benefit: "توفر أدوات إحصائية متخصصة ومكتبات كثيرة للباحثين.",
    example: 'print("Hello, world!")',
    exampleText: "مثال بسيط لطباعة رسالة في R."
  },
  {
    id: "matlab", name: "MATLAB", ar: "ماتلاب", aliases: ["مات لاب", "ماتلاب"],
    type: "لغة وبيئة للحساب العلمي",
    about: "بيئة برمجية للحسابات العددية والمصفوفات والنمذجة والمحاكاة.",
    uses: "الهندسة، معالجة الإشارات، التحكم والبحث العلمي.",
    benefit: "تسهل العمل مع المصفوفات والمسائل الهندسية المعقدة.",
    example: "disp('Hello, world!')",
    exampleText: "disp تعرض النص في نافذة الأوامر."
  },
  {
    id: "julia", name: "Julia", ar: "جوليا", aliases: ["جوليا"],
    type: "لغة للحوسبة العلمية",
    about: "لغة تركز على الحساب العلمي والأداء والعمل مع البيانات العددية.",
    uses: "الرياضيات، النمذجة، المحاكاة وتحليل البيانات.",
    benefit: "تجمع بين صياغة مناسبة للحسابات العلمية وأداء جيد في حالات كثيرة.",
    example: 'println("Hello, world!")',
    exampleText: "يعرض رسالة في بيئة Julia."
  },
  {
    id: "scala", name: "Scala", ar: "سكالا", aliases: ["سكالا"],
    type: "لغة برمجة",
    about: "لغة تجمع أفكارًا من البرمجة كائنية التوجه والبرمجة الوظيفية.",
    uses: "أنظمة البيانات والخوادم وتطبيقات تعمل على JVM.",
    benefit: "توفر أدوات للتعامل مع النظم الكبيرة وأنواع البيانات المركبة.",
    example: 'object Main extends App {\n  println("Hello, world!")\n}',
    exampleText: "ينفذ البرنامج ويطبع رسالة."
  },
  {
    id: "perl", name: "Perl", ar: "بيرل", aliases: ["بيرل"],
    type: "لغة برمجة عامة",
    about: "لغة معروفة بمعالجة النصوص والملفات والمهام الإدارية.",
    uses: "معالجة النصوص، الأتمتة، وصيانة بعض الأنظمة القديمة.",
    benefit: "تملك إمكانات قوية للبحث داخل النصوص وتحويلها.",
    example: 'print "Hello, world!\\n";',
    exampleText: "يطبع رسالة مع الانتقال إلى سطر جديد."
  },
  {
    id: "lua", name: "Lua", ar: "لوا", aliases: ["لوا"],
    type: "لغة نصية خفيفة",
    about: "لغة صغيرة يمكن دمجها داخل برامج وألعاب لتخصيص السلوك.",
    uses: "الألعاب، البرمجيات المضمنة، وتوسعة بعض التطبيقات.",
    benefit: "خفيفة نسبيًا وسهلة الدمج داخل برامج أخرى.",
    example: 'print("Hello, world!")',
    exampleText: "يطبع رسالة في بيئة Lua."
  },
  {
    id: "haskell", name: "Haskell", ar: "هاسكل", aliases: ["هاسكل"],
    type: "لغة برمجة وظيفية",
    about: "لغة تعتمد بقوة على البرمجة الوظيفية والأنواع الثابتة.",
    uses: "التعليم، الأبحاث، البرمجيات التي تستفيد من النماذج الوظيفية.",
    benefit: "تساعد على التفكير المنظم وتقليل بعض الأخطاء المنطقية.",
    example: 'main = putStrLn "Hello, world!"',
    exampleText: "الدالة main تطبع رسالة."
  },
  {
    id: "elixir", name: "Elixir", ar: "إليكسير", aliases: ["اليكسير", "إليكسير"],
    type: "لغة برمجة",
    about: "لغة تعمل على آلة Erlang الافتراضية وتهتم بالتزامن والأنظمة الموزعة.",
    uses: "الخدمات الشبكية، التطبيقات المتزامنة والخوادم.",
    benefit: "مناسبة لأنظمة تحتاج التعامل مع عدد كبير من الاتصالات.",
    example: 'IO.puts("Hello, world!")',
    exampleText: "IO.puts تعرض النص."
  },
  {
    id: "erlang", name: "Erlang", ar: "إيرلانغ", aliases: ["ارلانج", "إيرلانج"],
    type: "لغة برمجة",
    about: "لغة وبيئة مصممتان للأنظمة المتزامنة والموزعة ذات التوافر العالي.",
    uses: "الاتصالات، أنظمة الرسائل وبعض الخدمات الشبكية.",
    benefit: "تهتم بتحمل الأعطال واستمرارية تشغيل الأنظمة.",
    example: 'io:format("Hello, world!~n").',
    exampleText: "تنسيق النص يتضمن علامة الانتقال إلى سطر جديد."
  },
  {
    id: "clojure", name: "Clojure", ar: "كلوجر", aliases: ["كلوجر", "كلوجور"],
    type: "لغة برمجة وظيفية",
    about: "لغة من عائلة Lisp تعمل على بيئات تشغيل متعددة، ومنها JVM.",
    uses: "الخوادم، معالجة البيانات والبرامج الوظيفية.",
    benefit: "تعتمد على نماذج بيانات بسيطة وأدوات قوية للتحويل.",
    example: '(println "Hello, world!")',
    exampleText: "يطبع نصًا باستخدام println."
  },
  {
    id: "fsharp", name: "F#", ar: "إف شارب", aliases: ["اف شارب", "f sharp"],
    type: "لغة برمجة وظيفية ومتعددة الأساليب",
    about: "لغة ضمن منظومة .NET تدعم البرمجة الوظيفية والأنواع الثابتة.",
    uses: "تحليل البيانات، الأنظمة والخدمات المبنية على .NET.",
    benefit: "تسهل التعبير عن قواعد العمل ومعالجة البيانات بوضوح.",
    example: 'printfn "Hello, world!"',
    exampleText: "يطبع نصًا باستخدام printfn."
  },
  {
    id: "ocaml", name: "OCaml", ar: "أو سيمل", aliases: ["أو سي مل", "او سيمل"],
    type: "لغة برمجة وظيفية",
    about: "لغة ذات نظام أنواع قوي تدعم أساليب برمجة متعددة.",
    uses: "المترجمات، الأدوات التحليلية والبرمجيات المتخصصة.",
    benefit: "تساعد على كتابة برامج موثوقة بفضل نظام الأنواع.",
    example: 'print_endline "Hello, world!";;',
    exampleText: "يطبع نصًا في بيئة OCaml."
  },
  {
    id: "vbnet", name: "VB.NET", ar: "فيجوال بيسك دوت نت", aliases: ["فيجوال بيسك .نت"],
    type: "لغة ضمن .NET",
    about: "لغة من منظومة .NET تستخدم صياغة قريبة من اللغة الإنجليزية.",
    uses: "تطبيقات الأعمال وبعض تطبيقات Windows والأنظمة القائمة.",
    benefit: "تسهل قراءة بعض الأكواد الإدارية وصيانة المشاريع الموجودة.",
    example: 'Console.WriteLine("Hello, world!")',
    exampleText: "يعرض رسالة في وحدة التحكم."
  },
  {
    id: "visualbasic", name: "Visual Basic", ar: "فيجوال بيسك", aliases: ["فيجوال بيسك", "vb6"],
    type: "لغة برمجة",
    about: "لغة اشتهرت ببناء تطبيقات Windows، خصوصًا في الإصدارات القديمة.",
    uses: "صيانة البرامج القديمة والتطبيقات القائمة.",
    benefit: "مفيدة عند التعامل مع أنظمة قديمة تعتمد عليها.",
    example: 'MsgBox "Hello, world!"',
    exampleText: "مثال من صياغة Visual Basic الكلاسيكية."
  },
  {
    id: "delphi", name: "Delphi / Object Pascal", ar: "دلفي / أوبجكت باسكال", aliases: ["دلفي", "أوبجكت باسكال"],
    type: "لغة وأدوات لتطوير التطبيقات",
    about: "ترتبط Delphi بلغة Object Pascal وبأدوات بناء تطبيقات سطح المكتب.",
    uses: "تطبيقات Windows وبعض تطبيقات الأعمال متعددة المنصات.",
    benefit: "تقدم بيئة تطوير مرئية وأدوات لبناء واجهات التطبيقات.",
    example: "begin\n  Writeln('Hello, world!');\nend.",
    exampleText: "صياغة باسكال مبسطة لعرض رسالة."
  },
  {
    id: "pascal", name: "Pascal", ar: "باسكال", aliases: ["باسكال"],
    type: "لغة برمجة تعليمية وعامة",
    about: "لغة ذات بنية واضحة استُخدمت تاريخيًا في التعليم وتطوير البرامج.",
    uses: "تعليم أساسيات البرمجة وبعض التطبيقات القائمة.",
    benefit: "تساعد على فهم المتغيرات والشروط والحلقات وبنية البرنامج.",
    example: "begin\n  writeln('Hello, world!');\nend.",
    exampleText: "يعرض النص ثم ينهي البرنامج."
  },
  {
    id: "fortran", name: "Fortran", ar: "فورتران", aliases: ["فورتران"],
    type: "لغة للحوسبة العلمية",
    about: "لغة قديمة ومستمرّة الاستخدام في الحسابات العددية عالية الأداء.",
    uses: "الفيزياء، المناخ، المحاكاة والهندسة.",
    benefit: "مناسبة لأحمال حسابية علمية كبيرة وبرامج متخصصة.",
    example: 'print *, "Hello, world!"',
    exampleText: "يعرض النص في وحدة الإخراج."
  },
  {
    id: "cobol", name: "COBOL", ar: "كوبول", aliases: ["كوبول"],
    type: "لغة للأعمال",
    about: "لغة طُورت لمعالجة البيانات والعمليات التجارية ذات السجلات المنظمة.",
    uses: "الأنظمة المالية والمصرفية وبعض أنظمة المؤسسات القديمة.",
    benefit: "مهمّة لفهم وصيانة أنظمة أعمال ما زالت تعتمد عليها.",
    example: 'DISPLAY "HELLO WORLD".',
    exampleText: "يعرض عبارة على الشاشة."
  },
  {
    id: "assembly", name: "Assembly", ar: "أسمبلي", aliases: ["اسمبلي", "لغة التجميع"],
    type: "لغة منخفضة المستوى",
    about: "تمثل تعليمات قريبة من تعليمات المعالج، وتختلف صياغتها باختلاف المعمارية.",
    uses: "الأنظمة المضمنة، تحسينات متخصصة ودراسة المعالجات.",
    benefit: "تساعد على فهم طريقة عمل المعالج والتعليمات الأساسية.",
    example: "MOV AX, 1",
    exampleText: "مثال على تعليمة لنقل قيمة إلى سجل في معمارية ملائمة.",
    note: "هذا المثال ليس برنامجًا كاملًا، وتعليمات Assembly تختلف حسب المعالج."
  },
  {
    id: "sql", name: "SQL", ar: "إس كيو إل", aliases: ["اس كيو ال", "اس كيو إل"],
    type: "لغة استعلام عن قواعد البيانات",
    about: "تُستخدم للتعامل مع البيانات في قواعد البيانات العلائقية.",
    uses: "البحث عن البيانات، إضافتها وتعديلها وإدارة الجداول.",
    benefit: "مهارة مهمة لمطوري الويب والبيانات والأنظمة الإدارية.",
    example: "SELECT name FROM users;",
    exampleText: "يطلب أسماء المستخدمين من جدول اسمه users.",
    note: "يتطلب المثال وجود جدول users وعمود name في قاعدة البيانات."
  },
  {
    id: "html", name: "HTML", ar: "إتش تي إم إل", aliases: ["اتش تي ام ال", "لغة صفحات الويب"],
    type: "لغة توصيف للويب وليست لغة برمجة عامة",
    about: "تحدد هيكل صفحة الويب، مثل العناوين والفقرات والروابط والصور.",
    uses: "بناء هيكل صفحات المواقع.",
    benefit: "هي نقطة البداية الأساسية لفهم كيفية تنظيم محتوى الويب.",
    example: "<h1>مرحبًا بالعالم</h1>",
    exampleText: "ينشئ عنوانًا رئيسيًا في صفحة HTML."
  },
  {
    id: "css", name: "CSS", ar: "سي إس إس", aliases: ["سي اس اس", "ستايل"],
    type: "لغة تنسيق للويب وليست لغة برمجة عامة",
    about: "تتحكم في شكل صفحات الويب، مثل الألوان والخطوط والمسافات وترتيب العناصر.",
    uses: "تصميم مواقع متجاوبة مع الشاشات المختلفة.",
    benefit: "تفصل مظهر الصفحة عن محتواها وتساعد على توحيد التصميم.",
    example: "h1 {\n  color: #4f5fd5;\n}",
    exampleText: "يجعل لون النص داخل العناوين h1 بنفسجيًا."
  },
  {
    id: "bash", name: "Bash", ar: "باش", aliases: ["باش شل", "شل"],
    type: "لغة أوامر ونصوص للأنظمة",
    about: "تُستخدم لتشغيل أوامر النظام وأتمتة المهام على أنظمة Unix-like.",
    uses: "Linux، الخوادم، معالجة الملفات وسير العمل الآلي.",
    benefit: "توفر الوقت عند تنفيذ المهام المتكررة وإدارة الخوادم.",
    example: 'echo "Hello, world!"',
    exampleText: "يطبع نصًا في الطرفية."
  },
  {
    id: "powershell", name: "PowerShell", ar: "باورشل", aliases: ["باورشيل"],
    type: "لغة أوامر وأتمتة",
    about: "بيئة أوامر ولغة نصوص لإدارة الأنظمة وأتمتة الإجراءات.",
    uses: "Windows، إدارة الأنظمة والخدمات السحابية.",
    benefit: "تساعد على أتمتة مهام النظام وإدارة إعداداته.",
    example: 'Write-Output "Hello, world!"',
    exampleText: "يرسل رسالة إلى مخرجات PowerShell."
  },
  {
    id: "objectivec", name: "Objective-C", ar: "أوبجكتف سي", aliases: ["أوبجكتيف سي"],
    type: "لغة برمجة",
    about: "لغة ارتبطت تاريخيًا بتطوير برامج Apple، وتضيف أسلوب الكائنات إلى C.",
    uses: "صيانة تطبيقات Apple القديمة والمشاريع القائمة.",
    benefit: "مفيدة لفهم قواعد الأكواد الموجودة المكتوبة بها.",
    example: 'NSLog(@"Hello, world!");',
    exampleText: "يكتب رسالة في سجل تطبيقات Apple."
  },
  {
    id: "groovy", name: "Groovy", ar: "غروفي", aliases: ["جروفي"],
    type: "لغة تعمل على JVM",
    about: "لغة مرنة تعمل مع منظومة Java وتستخدم في النصوص والأتمتة.",
    uses: "أدوات البناء، الاختبارات وبعض أنظمة Java.",
    benefit: "تسمح بكتابة مهام مختصرة والتكامل مع مكتبات Java.",
    example: "println 'Hello, world!'",
    exampleText: "يطبع رسالة في بيئة Groovy."
  },
  {
    id: "solidity", name: "Solidity", ar: "سوليديتي", aliases: ["سوليديتي"],
    type: "لغة للعقود الذكية",
    about: "لغة تستخدم لكتابة العقود الذكية على شبكات متوافقة مع Ethereum.",
    uses: "التطبيقات اللامركزية والعقود الذكية والأصول الرقمية.",
    benefit: "تمكن المطور من كتابة منطق يعمل على سلسلة الكتل.",
    example: 'contract HelloWorld {\n  string public message = "Hello";\n}',
    exampleText: "ينشئ عقدًا يحتوي على رسالة عامة.",
    note: "العقود الذكية تحتاج اختبارات ومراجعات أمنية قبل نشرها."
  },
  {
    id: "vhdl", name: "VHDL", ar: "في إتش دي إل", aliases: ["في اتش دي ال"],
    type: "لغة لوصف العتاد الرقمي",
    about: "لغة لوصف وتصميم الدوائر الرقمية ومحاكاتها.",
    uses: "تصميم FPGA والدوائر الإلكترونية الرقمية.",
    benefit: "تساعد مهندسي الإلكترونيات على وصف الدوائر واختبار سلوكها.",
    example: "entity gate is\n  port(a, b : in bit; y : out bit);\nend gate;",
    exampleText: "يصف المثال واجهة بسيطة لدائرة رقمية.",
    note: "هذا وصف للواجهة فقط، وليس تصميم الدائرة كاملًا."
  },
  {
    id: "verilog", name: "Verilog", ar: "فيريلوج", aliases: ["فيريلوج"],
    type: "لغة لوصف العتاد الرقمي",
    about: "تُستخدم لتصميم الدوائر الرقمية واختبار سلوك العتاد.",
    uses: "FPGA وتصميم الشرائح الرقمية.",
    benefit: "تسهل وصف الدوائر والتحقق من عملها بالمحاكاة.",
    example: "module and_gate(input a, input b, output y);\n  assign y = a & b;\nendmodule",
    exampleText: "يصف بوابة AND ذات مدخلين ومخرج."
  },
  {
    id: "scratch", name: "Scratch", ar: "سكراتش", aliases: ["سكراتش"],
    type: "بيئة برمجة مرئية تعليمية",
    about: "تتيح بناء البرامج بتركيب كتل مرئية بدل كتابة معظم الأوامر نصيًا.",
    uses: "تعليم الأطفال والمبتدئين أساسيات المنطق والألعاب والقصص التفاعلية.",
    benefit: "مناسبة للمبتدئين لأنها تقلل أخطاء الكتابة وتوضح تسلسل الأوامر.",
    example: "عند النقر على العلم الأخضر → قل «مرحبًا!» لمدة ثانيتين",
    exampleText: "هذا وصف لتسلسل كتل مرئية، وليس كودًا نصيًا حرفيًا."
  },
  {
    id: "lisp", name: "Lisp", ar: "ليسب", aliases: ["ليسب"],
    type: "عائلة لغات برمجة",
    about: "عائلة لغات قديمة تشتهر بالتعامل مع القوائم والتعبيرات الرمزية.",
    uses: "الأبحاث، الذكاء الاصطناعي تاريخيًا وبعض الأدوات المتخصصة.",
    benefit: "تعطي منظورًا مميزًا للتعبيرات والبرمجة الرمزية.",
    example: '(print "Hello, world!")',
    exampleText: "مثال شائع في بعض لهجات Lisp."
  },
  {
    id: "scheme", name: "Scheme", ar: "سكيم", aliases: ["سكيم"],
    type: "لغة برمجة وظيفية",
    about: "لغة من عائلة Lisp لها صياغة بسيطة تُستخدم في التعليم والبحث.",
    uses: "تعليم علوم الحاسوب والتجارب البرمجية.",
    benefit: "تساعد على فهم الدوال والتعبيرات والبرمجة الوظيفية.",
    example: '(display "Hello, world!")',
    exampleText: "يعرض النص على المخرجات."
  },
  {
    id: "prolog", name: "Prolog", ar: "برولوج", aliases: ["برولوج"],
    type: "لغة برمجة منطقية",
    about: "لغة تصف الحقائق والقواعد، ثم تستخدم الاستنتاج لإيجاد الإجابات.",
    uses: "المنطق، الأنظمة الخبيرة والأبحاث.",
    benefit: "تقدم طريقة مختلفة لحل المشكلات اعتمادًا على العلاقات والقواعد.",
    example: "hello :- writeln('Hello, world!').",
    exampleText: "قاعدة بسيطة تنفذ أمر الكتابة عند استدعائها."
  },
  {
    id: "apex", name: "Apex", ar: "أبكس", aliases: ["ابكس"],
    type: "لغة ضمن منصة Salesforce",
    about: "لغة خادمية تُستخدم لإضافة منطق مخصص إلى تطبيقات Salesforce.",
    uses: "أتمتة إجراءات المؤسسات وتوسعة تطبيقات CRM.",
    benefit: "تفيد المطورين الذين يعملون مع نظام Salesforce.",
    example: "System.debug('Hello, world!');",
    exampleText: "يسجل رسالة لأغراض التصحيح."
  },
  {
    id: "abap", name: "ABAP", ar: "إيه بي إيه بي", aliases: ["اي بي اي بي"],
    type: "لغة للأعمال",
    about: "لغة طورتها SAP لبناء تطبيقات الأعمال ومعالجة بياناتها.",
    uses: "تخصيص أنظمة SAP وتقارير المؤسسات.",
    benefit: "مفيدة للعمل على حلول المؤسسات المبنية على SAP.",
    example: "WRITE 'Hello, world!'.",
    exampleText: "يكتب رسالة في مخرجات البرنامج."
  },
  {
    id: "plsql", name: "PL/SQL", ar: "بي إل إس كيو إل", aliases: ["pl sql"],
    type: "لغة إجرائية لقواعد البيانات",
    about: "تضيف إمكانات إجرائية إلى SQL في قواعد بيانات Oracle.",
    uses: "الإجراءات المخزنة، الدوال ومعالجة بيانات Oracle.",
    benefit: "تجمع تعليمات SQL مع الشروط والحلقات والمنطق الإجرائي.",
    example: "BEGIN\n  DBMS_OUTPUT.PUT_LINE('Hello!');\nEND;\n/",
    exampleText: "يعرض رسالة عند تشغيل الكتلة في بيئة مناسبة."
  },
  {
    id: "tsql", name: "T-SQL", ar: "تي إس كيو إل", aliases: ["transact sql", "ترانزاكت اس كيو ال"],
    type: "امتداد لـ SQL",
    about: "لغة واستعلامات موسعة تستخدم مع Microsoft SQL Server.",
    uses: "الاستعلامات والإجراءات وإدارة البيانات في SQL Server.",
    benefit: "تساعد على تنفيذ عمليات البيانات والمنطق داخل قاعدة البيانات.",
    example: "SELECT 'Hello, world!';",
    exampleText: "يعيد نصًا كنتيجة لاستعلام."
  },
  {
    id: "ada", name: "Ada", ar: "آدا", aliases: ["ادا"],
    type: "لغة برمجة",
    about: "لغة تهتم بالموثوقية والوضوح وتستخدم في أنظمة حساسة.",
    uses: "الأنظمة المضمنة والطيران وبعض الأنظمة الدفاعية والصناعية.",
    benefit: "تركز على التحقق من الأنواع والانضباط في بناء البرنامج.",
    example: 'with Ada.Text_IO; use Ada.Text_IO;\nprocedure Hello is\nbegin\n  Put_Line("Hello, world!");\nend Hello;',
    exampleText: "برنامج كامل نسبيًا لعرض رسالة."
  },
  {
    id: "nim", name: "Nim", ar: "نيم", aliases: ["نيم"],
    type: "لغة برمجة عامة",
    about: "لغة مترجمة تجمع صياغة موجزة مع إمكانات لبناء برامج سريعة.",
    uses: "الأدوات والبرامج والتطبيقات عالية الأداء.",
    benefit: "توفر صياغة مرنة مع إمكانية إنتاج ملفات تنفيذية.",
    example: 'echo "Hello, world!"',
    exampleText: "يعرض رسالة."
  },
  {
    id: "zig", name: "Zig", ar: "زيغ", aliases: ["زيج"],
    type: "لغة برمجة للأنظمة",
    about: "لغة تهتم بالتحكم الواضح بالموارد وبناء برامج النظام.",
    uses: "أدوات النظام والتطبيقات منخفضة المستوى.",
    benefit: "تمنح المبرمج سيطرة واضحة على تفاصيل التنفيذ.",
    example: 'const std = @import("std");\npub fn main() void {\n  std.debug.print("Hello!\\n", .{});\n}',
    exampleText: "مثال لعرض نص باستخدام مكتبة Zig."
  },
  {
    id: "crystal", name: "Crystal", ar: "كريستال", aliases: ["كريستال"],
    type: "لغة برمجة عامة",
    about: "لغة ذات صياغة مستوحاة من Ruby وتُترجم إلى برامج أصلية.",
    uses: "الخوادم والأدوات وتطبيقات سطر الأوامر.",
    benefit: "تجمع صياغة مقروءة مع أداء جيد في تطبيقات مناسبة.",
    example: 'puts "Hello, world!"',
    exampleText: "يطبع رسالة."
  },
  {
    id: "dlang", name: "D", ar: "دي", aliases: ["لغة دي", "d language"],
    type: "لغة برمجة عامة",
    about: "لغة مترجمة تقدم ميزات برمجية حديثة مع اهتمام بالأداء.",
    uses: "برامج النظام والأدوات والتطبيقات عالية الأداء.",
    benefit: "توفر بدائل برمجية متعددة في لغة واحدة.",
    example: 'import std.stdio;\nvoid main() {\n  writeln("Hello, world!");\n}',
    exampleText: "يعرض رسالة من نقطة بدء البرنامج."
  },
  {
    id: "hack", name: "Hack", ar: "هاك", aliases: ["لغة hack"],
    type: "لغة مبنية على PHP",
    about: "لغة طورتها Meta لتقديم أنواع ثابتة وميزات إضافية لبيئات PHP محددة.",
    uses: "أنظمة وخدمات مبنية على منظومة Hack.",
    benefit: "تساعد على تنظيم الأنظمة الكبيرة باستخدام معلومات الأنواع.",
    example: '<?hh\necho "Hello, world!";',
    exampleText: "مثال بسيط لصياغة Hack."
  },
  {
    id: "actionscript", name: "ActionScript", ar: "أكشن سكريبت", aliases: ["اكشن سكريبت"],
    type: "لغة برمجة",
    about: "لغة ارتبطت بتطوير محتوى Flash التفاعلي، الذي لم يعد مناسبًا للمواقع الحديثة.",
    uses: "صيانة بعض المشاريع القديمة.",
    benefit: "مفيدة عند قراءة أو تحديث مشاريع تاريخية تعتمد عليها.",
    example: 'trace("Hello, world!");',
    exampleText: "يسجل الرسالة في أدوات تصحيح Flash."
  },
  {
    id: "tcl", name: "Tcl", ar: "تي سي إل", aliases: ["تي سي ال"],
    type: "لغة نصوص وأتمتة",
    about: "لغة نصية يمكن تضمينها داخل البرامج واستخدامها لأتمتة المهام.",
    uses: "الاختبارات، الأدوات الهندسية والأتمتة.",
    benefit: "تساعد على ربط المهام ببعضها داخل بيئات متخصصة.",
    example: 'puts "Hello, world!"',
    exampleText: "يطبع رسالة."
  },
  {
    id: "awk", name: "AWK", ar: "أووك", aliases: ["اوك"],
    type: "لغة لمعالجة النصوص",
    about: "لغة صغيرة تُستخدم لمعالجة النصوص والبيانات المنظمة سطرًا بسطر.",
    uses: "تحليل الملفات النصية والسجلات في الأنظمة.",
    benefit: "فعالة للمهام السريعة على البيانات النصية.",
    example: 'BEGIN { print "Hello, world!" }',
    exampleText: "يعرض رسالة عند بدء التنفيذ."
  },
  {
    id: "qsharp", name: "Q#", ar: "كيو شارب", aliases: ["كيو شارب"],
    type: "لغة للحوسبة الكمومية",
    about: "لغة من منظومة Microsoft لكتابة برامج وخوارزميات كمومية.",
    uses: "التعليم والبحث وتطوير خوارزميات كمومية.",
    benefit: "تساعد على التعبير عن العمليات الكمومية ضمن بيئة متخصصة.",
    example: '@EntryPoint()\noperation Main() : Unit {\n  Message("Hello, world!");\n}',
    exampleText: "هيكل توضيحي لعملية قابلة للتشغيل ضمن بيئة Q# مناسبة."
  },
  {
    id: "gdscript", name: "GDScript", ar: "جي دي سكريبت", aliases: ["جودوت", "godot script"],
    type: "لغة لمحرك ألعاب",
    about: "لغة نصية مرتبطة بمحرك Godot لتطوير الألعاب والتفاعلات.",
    uses: "ألعاب ثنائية وثلاثية الأبعاد باستخدام Godot.",
    benefit: "تتكامل مباشرة مع عقد ومشاهد المحرك.",
    example: 'extends Node\nfunc _ready():\n    print("Hello, world!")',
    exampleText: "يطبع الرسالة عند جاهزية العقدة."
  },
  {
    id: "renpy", name: "Ren'Py", ar: "رين باي", aliases: ["رينباي"],
    type: "محرك ولغة نصية للألعاب",
    about: "أداة لصناعة الروايات المرئية والألعاب المعتمدة على الحوار.",
    uses: "القصص التفاعلية والروايات المرئية.",
    benefit: "تتيح بناء قصة تفاعلية دون كتابة محرك ألعاب من الصفر.",
    example: 'define e = Character("سارة")\ne "مرحبًا بك!"',
    exampleText: "يعرّف شخصية ثم يعرض جملة حوارية."
  },
  {
    id: "labview", name: "LabVIEW", ar: "لاب فيو", aliases: ["لابفيو"],
    type: "بيئة برمجة رسومية",
    about: "بيئة تعتمد على مخططات وكتل رسومية لبناء أنظمة القياس والتحكم.",
    uses: "المختبرات، القياس، الاختبارات والهندسة.",
    benefit: "تربط القياس والتحكم بأجهزة وأدوات هندسية.",
    example: "مثال مرئي: قراءة قيمة حساس ← مقارنتها بحد محدد ← تشغيل تنبيه.",
    exampleText: "يُنفّذ المثال باستخدام كتل رسومية موصولة ببعضها، وليس نصًا برمجيًا حرفيًا."
  },
  {
    id: "wasm", name: "WebAssembly", ar: "ويب أسمبلي", aliases: ["wasm", "ويب اسمبلي"],
    type: "صيغة تعليمات قابلة للتشغيل على الويب",
    about: "صيغة منخفضة المستوى تسمح بتشغيل برامج مترجمة داخل بيئات متوافقة، ومنها المتصفح.",
    uses: "أجزاء عالية الأداء من تطبيقات الويب وأدوات المتصفح.",
    benefit: "تتيح تشغيل كود مترجم بكفاءة في البيئات الداعمة.",
    example: "WebAssembly غالبًا ناتج ترجمة من لغة أخرى، وليست بديلًا مباشرًا عن HTML وCSS.",
    exampleText: "توضيح لدور التقنية بدل برنامج كامل."
  },
  {
    id: "logo", name: "Logo", ar: "لوجو", aliases: ["لغة لوجو"],
    type: "لغة تعليمية",
    about: "لغة تعليمية تاريخية استُخدمت لتعليم البرمجة من خلال تحريك السلحفاة على الشاشة.",
    uses: "تعليم التكرار والأوامر والهندسة البسيطة.",
    benefit: "تجعل نتائج الأوامر مرئية للمبتدئ.",
    example: 'PRINT [HELLO WORLD]',
    exampleText: "تعرض العبارة في بيئة Logo مناسبة."
  },
  {
    id: "smalltalk", name: "Smalltalk", ar: "سمول توك", aliases: ["سمول توك"],
    type: "لغة كائنية التوجه",
    about: "لغة وبيئة من أوائل البيئات التي أثرت في البرمجة كائنية التوجه.",
    uses: "التعليم، البحث وبعض الأنظمة القائمة.",
    benefit: "توضح مفاهيم الكائنات والرسائل بصورة متماسكة.",
    example: "Transcript show: 'Hello, world!'.",
    exampleText: "يعرض رسالة في بيئات Smalltalk المناسبة."
  },
  {
    id: "eiffel", name: "Eiffel", ar: "إيفل", aliases: ["ايفل"],
    type: "لغة برمجة كائنية",
    about: "لغة تهتم بهندسة البرمجيات والتصميم بعقود تحقق من شروط البرنامج.",
    uses: "الأنظمة التي تستفيد من التصميم المنضبط.",
    benefit: "تشجع على توضيح شروط الدوال والافتراضات.",
    example: 'io.put_string ("Hello, world!%N")',
    exampleText: "يعرض نصًا متبوعًا بسطر جديد."
  },
  {
    id: "racket", name: "Racket", ar: "راكت", aliases: ["راكت"],
    type: "لغة ومنصة تعليمية",
    about: "لغة ضمن عائلة Lisp، مع أدوات لتعليم وتصميم لغات البرمجة.",
    uses: "التعليم، البحث، والتجارب اللغوية.",
    benefit: "مفيدة لفهم بناء اللغات والتعبيرات البرمجية.",
    example: '(displayln "Hello, world!")',
    exampleText: "يطبع النص وينتقل إلى سطر جديد."
  },
  {
    id: "pony", name: "Pony", ar: "بوني", aliases: ["بوني"],
    type: "لغة برمجة",
    about: "لغة تهتم بالتزامن وسلامة الذاكرة في التطبيقات.",
    uses: "الأبحاث والأنظمة المتزامنة المتخصصة.",
    benefit: "تقدم نموذجًا صارمًا للتعامل مع البيانات المتزامنة.",
    example: 'actor Main\n  new create(env: Env) =>\n    env.out.print("Hello, world!")',
    exampleText: "مثال توضيحي لطباعة رسالة باستخدام بيئة Pony."
  },
  {
    id: "forth", name: "Forth", ar: "فورث", aliases: ["فورث"],
    type: "لغة موجهة للمكدس",
    about: "لغة صغيرة تعتمد على المكدس وتناسب بعض الأنظمة والبيئات المحدودة.",
    uses: "الأنظمة المضمنة وبعض أدوات البرمجة المتخصصة.",
    benefit: "توضح طريقة مختلفة لتنفيذ الأوامر وإدارة القيم.",
    example: '.\" Hello, world!\"',
    exampleText: "يعرض نصًا في بيئة Forth مناسبة."
  },
  {
    id: "idris", name: "Idris", ar: "إدريس", aliases: ["ادريس"],
    type: "لغة وظيفية بأنواع معتمدة على القيم",
    about: "لغة تدعم أنواعًا متقدمة يمكن أن تعبّر عن خصائص للبيانات.",
    uses: "البحث والتعليم وتطوير برامج ذات متطلبات تحقق دقيقة.",
    benefit: "تساعد في صياغة شروط قوية ضمن نظام الأنواع.",
    example: 'main : IO ()\nmain = putStrLn "Hello, world!"',
    exampleText: "يحدد نوع main ثم يطبع رسالة."
  },
  {
    id: "mercury", name: "Mercury", ar: "ميركوري", aliases: ["ميركوري"],
    type: "لغة منطقية ووظيفية",
    about: "لغة تعتمد على المنطق وتضيف نظام أنواع وتحليلًا ساكنًا قويًا.",
    uses: "الأبحاث وبعض التطبيقات المنطقية المتخصصة.",
    benefit: "تساعد على كشف أخطاء كثيرة قبل التشغيل.",
    example: ':- pred main(io::di, io::uo) is det.\nmain(!IO) :- io.write_string("Hello!\\n", !IO).',
    exampleText: "مثال مختصر من صياغة Mercury."
  },
  {
    id: "elm", name: "Elm", ar: "إلم", aliases: ["إلم"],
    type: "لغة لواجهات الويب",
    about: "لغة وظيفية تُترجم إلى JavaScript، وتركز على واجهات ويب موثوقة.",
    uses: "بناء واجهات أمامية لتطبيقات الويب.",
    benefit: "يساعد نظام الأنواع فيها على اكتشاف أخطاء قبل تشغيل التطبيق.",
    example: 'import Html exposing (text)\nmain = text "Hello, world!"',
    exampleText: "يبني صفحة تعرض نصًا."
  },
  {
    id: "purescript", name: "PureScript", ar: "بيور سكريبت", aliases: ["بيورسكريبت"],
    type: "لغة وظيفية للويب",
    about: "لغة وظيفية ذات أنواع ثابتة تُستخدم لتطوير تطبيقات يمكن تشغيلها في JavaScript.",
    uses: "واجهات الويب والبرمجة الوظيفية.",
    benefit: "تقدم نظام أنواع صارمًا لمن يريد بناء واجهات بطريقة وظيفية.",
    example: 'module Main where\nimport Effect.Console (log)\nmain = log "Hello, world!"',
    exampleText: "يعرض رسالة باستخدام مكتبة وحدة التحكم."
  },
  {
    id: "coffeescript", name: "CoffeeScript", ar: "كوفي سكريبت", aliases: ["كوفي سكريبت"],
    type: "لغة تُترجم إلى JavaScript",
    about: "لغة ذات صياغة مختصرة تُترجم إلى JavaScript.",
    uses: "صيانة مشاريع قديمة أو مشاريع تختار هذه الصياغة.",
    benefit: "قد تقلل مقدار الكتابة، لكن JavaScript وTypeScript أكثر شيوعًا في مشاريع حديثة كثيرة.",
    example: 'console.log "Hello, world!"',
    exampleText: "يطبع رسالة قبل تحويل الكود إلى JavaScript."
  },
  {
    id: "cfml", name: "ColdFusion / CFML", ar: "كولد فيوجن", aliases: ["coldfusion", "cfml", "كولدفيجن"],
    type: "لغة وتقنية ويب",
    about: "تقنية لتطوير تطبيقات الويب مع لغة CFML للمنطق والمحتوى الديناميكي.",
    uses: "بعض أنظمة الويب المؤسسية والقائمة.",
    benefit: "تفيد في صيانة وتطوير التطبيقات المبنية على المنظومة.",
    example: '<cfoutput>Hello, world!</cfoutput>',
    exampleText: "يعرض نصًا داخل قالب CFML."
  },
  {
    id: "foxpro", name: "Visual FoxPro", ar: "فيجوال فوكس برو", aliases: ["فوكس برو"],
    type: "لغة وقاعدة بيانات تاريخية",
    about: "بيئة ولغة قواعد بيانات اشتهرت بتطبيقات الأعمال وسجلاتها.",
    uses: "صيانة أنظمة أعمال قديمة تعتمد عليها.",
    benefit: "معرفتها مفيدة عند ترحيل البيانات أو تحديث تطبيقات قديمة.",
    example: '? "Hello, world!"',
    exampleText: "يستخدم الأمر ? لعرض النص."
  },
  {
    id: "pli", name: "PL/I", ar: "بي إل ون", aliases: ["pli", "بي ال ون"],
    type: "لغة برمجة للأعمال والأنظمة",
    about: "لغة صممت للتعامل مع احتياجات متعددة في الأعمال والحوسبة العلمية.",
    uses: "بعض أنظمة المؤسسات والحواسيب المركزية القائمة.",
    benefit: "مهمة عند صيانة أنظمة قديمة تعتمد عليها.",
    example: "PUT SKIP LIST('Hello, world!');",
    exampleText: "يعرض رسالة باستخدام صياغة PL/I."
  },
  {
    id: "arduino", name: "Arduino (C/C++)", ar: "أردوينو", aliases: ["اردوينو", "arduino"],
    type: "منصة إلكترونية مع برمجة مبنية على C/C++",
    about: "منصة لتشغيل برامج تتحكم بلوحات إلكترونية وحساسات ومحركات.",
    uses: "الروبوتات، المشاريع التعليمية، الأجهزة المضمنة وإنترنت الأشياء.",
    benefit: "تربط البرمجة بالعالم المادي من خلال تجارب عملية.",
    example: 'void setup() {\n  Serial.begin(9600);\n  Serial.println("Hello!");\n}\nvoid loop() {}',
    exampleText: "يرسل رسالة عبر المنفذ التسلسلي عند بدء تشغيل اللوحة."
  },
  {
    id: "fortran77", name: "Fortran 77", ar: "فورتران 77", aliases: ["فورتران77"],
    type: "إصدار تاريخي من Fortran",
    about: "إصدار أقدم من لغة Fortran ما زال موجودًا في بعض البرامج العلمية.",
    uses: "صيانة برامج علمية وهندسية قديمة.",
    benefit: "معرفته تساعد على قراءة وتحديث الشيفرات القديمة.",
    example: '      PRINT *, "HELLO WORLD"\n      END',
    exampleText: "مثال بطابع الصياغة التقليدية لـFortran."
  },
  {
    id: "visualbasicnet", name: "Visual Basic .NET", ar: "فيجوال بيسك دوت نت", aliases: ["vb.net", "فيجوال بيسك نت"],
    type: "لغة ضمن .NET",
    about: "إصدار من Visual Basic يعمل مع منصة .NET.",
    uses: "تطبيقات الأعمال وتطبيقات Windows القائمة.",
    benefit: "يفيد في تطوير وصيانة البرامج المعتمدة على .NET.",
    example: 'Module Program\n  Sub Main()\n    Console.WriteLine("Hello!")\n  End Sub\nEnd Module',
    exampleText: "مثال برنامج صغير يطبع رسالة."
  },
  {
    id: "smalltalk", name: "Smalltalk", ar: "سمول توك", aliases: ["سمول توك"],
    type: "لغة برمجة كائنية التوجه",
    about: "لغة من أوائل اللغات التي جعلت الكائنات والرسائل محورًا للتطوير.",
    uses: "التعليم والبحث وبعض الأنظمة القائمة.",
    benefit: "تعطي تصورًا واضحًا عن البرمجة بالكائنات والرسائل.",
    example: "Transcript show: 'Hello!'.",
    exampleText: "يعرض رسالة في بيئة Smalltalk."
  },
  {
    id: "bashscript", name: "Shell Script", ar: "شل سكريبت", aliases: ["shell", "شل سكريبت", "shell scripting"],
    type: "نصوص لأتمتة الأوامر",
    about: "مجموعة نصوص تجمع أوامر النظام لتنفيذ مهام تلقائيًا.",
    uses: "الأنظمة، الخوادم، النسخ الاحتياطي وأتمتة المهام.",
    benefit: "تقلل تكرار الأوامر اليدوية في المهام المعتادة.",
    example: 'echo "Hello, world!"',
    exampleText: "مثال شائع في Bash، وهي إحدى بيئات الـShell."
  }
];

/* أدوات مساعدة للبحث بالعربي والإنجليزي */
const normalizeText = (value) =>
  String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[\u064B-\u065F\u0670\u06D6-\u06ED]/g, "")
    .replace(/[أإآ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/[^\p{L}\p{N}+#.]+/gu, " ")
    .trim()
    .replace(/\s+/g, " ");

const searchInput = document.getElementById("languageSearch");
const languageResults = document.getElementById("languageResults");
const popularLanguages = document.getElementById("popularLanguages");
const searchStatus = document.getElementById("searchStatus");
const noResults = document.getElementById("noResults");
const clearSearch = document.getElementById("clearSearch");
const languageDetail = document.getElementById("languageDetail");

const detailFields = {
  category: document.getElementById("detailCategory"),
  name: document.getElementById("detailName"),
  arabicName: document.getElementById("detailArabicName"),
  description: document.getElementById("detailDescription"),
  uses: document.getElementById("detailUses"),
  benefit: document.getElementById("detailBenefit"),
  exampleExplanation: document.getElementById("detailExampleExplanation"),
  example: document.getElementById("detailExample"),
  note: document.getElementById("detailExampleNote")
};

let selectedLanguageId = null;
let currentMatches = [];

const popularLanguageIds = [
  "python", "javascript", "html", "css",
  "java", "cpp", "csharp", "sql"
];

function findLanguage(id) {
  return languages.find((language) => language.id === id);
}

function languageSearchText(language) {
  return normalizeText([
    language.name,
    language.ar,
    ...(language.aliases || []),
    language.type,
    language.about,
    language.uses,
    language.benefit
  ].join(" "));
}

function getExactMatch(query) {
  return languages.find((language) => {
    const names = [language.name, language.ar, ...(language.aliases || [])];
    return names.some((name) => normalizeText(name) === query);
  });
}

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function renderPopularLanguages() {
  popularLanguages.replaceChildren();

  popularLanguages.appendChild(
    createElement("span", "popular-title", "لغات شائعة:")
  );

  popularLanguageIds.forEach((id) => {
    const language = findLanguage(id);
    if (!language) return;

    const chip = createElement("button", "popular-chip", language.name);
    chip.type = "button";
    chip.addEventListener("click", () => {
      selectLanguage(language);
    });

    popularLanguages.appendChild(chip);
  });
}

function fillLanguageDetail(language) {
  detailFields.category.textContent = language.type;
  detailFields.name.textContent = language.name;
  detailFields.arabicName.textContent = language.ar;
  detailFields.description.textContent = language.about;
  detailFields.uses.textContent = language.uses;
  detailFields.benefit.textContent = language.benefit;
  detailFields.exampleExplanation.textContent = language.exampleText;
  detailFields.example.textContent = language.example;
  detailFields.note.textContent = language.note || "";

  languageDetail.hidden = false;
}

function hideLanguageDetail() {
  languageDetail.hidden = true;
}

function makeLanguageResult(language) {
  const card = createElement("article", "language-result");
  card.dataset.languageId = language.id;

  const button = createElement("button", "language-result-button");
  button.type = "button";
  button.setAttribute("aria-expanded", String(selectedLanguageId === language.id));

  const textGroup = createElement("span", "language-result-text");

  const title = createElement("span", "language-result-title", language.name);
  const subtitle = createElement("span", "language-result-subtitle", language.ar);
  const type = createElement("span", "language-result-type", language.type);

  textGroup.append(title, subtitle, type);

  const arrow = createElement("span", "result-arrow", "←");
  arrow.setAttribute("aria-hidden", "true");

  button.append(textGroup, arrow);

  if (selectedLanguageId === language.id) {
    card.classList.add("is-selected");
    card.setAttribute("aria-current", "true");
  }

  button.addEventListener("click", () => selectLanguage(language));

  card.appendChild(button);
  return card;
}

function scrollToSelectedLanguage() {
  window.setTimeout(() => {
    const selectedCard = languageResults.querySelector(".language-result.is-selected");

    if (selectedCard) {
      selectedCard.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  }, 100);
}

function renderSearchResults() {
  const query = normalizeText(searchInput.value);
  clearSearch.hidden = !searchInput.value;
  languageResults.replaceChildren();
  noResults.hidden = true;

  if (!query) {
    selectedLanguageId = null;
    currentMatches = [];
    hideLanguageDetail();
    popularLanguages.hidden = false;
    searchStatus.textContent = "اختار لغة شائعة أو اكتب اسمها في البحث.";
    return;
  }

  popularLanguages.hidden = true;

  const exactMatch =
  (query.length >= 2 || ["c", "r", "d"].includes(query))
    ? getExactMatch(query)
    : null;  
  if (exactMatch) {
    selectedLanguageId = exactMatch.id;
    currentMatches = [exactMatch];
  } else {
    selectedLanguageId = null;
    currentMatches = languages.filter((language) =>
      languageSearchText(language).includes(query)
    );
  }

  hideLanguageDetail();

  if (currentMatches.length === 0) {
    searchStatus.textContent = "";
    noResults.hidden = false;
    return;
  }

  searchStatus.textContent =
    currentMatches.length === 1
      ? "ظهرت نتيجة واحدة."
      : `عدد النتائج: ${currentMatches.length}. اختار اللغة المناسبة.`;

  currentMatches.forEach((language) => {
    languageResults.appendChild(makeLanguageResult(language));
  });

  if (exactMatch) {
    fillLanguageDetail(exactMatch);
    scrollToSelectedLanguage();
  }
}

function selectLanguage(language) {
  searchInput.value = language.name;
  selectedLanguageId = language.id;
  renderSearchResults();
  searchInput.focus();
  scrollToSelectedLanguage();
}

function clearLanguageSearch() {
  searchInput.value = "";
  selectedLanguageId = null;
  renderSearchResults();
  searchInput.focus();
}

renderPopularLanguages();
renderSearchResults();

searchInput.addEventListener("input", renderSearchResults);

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && currentMatches.length > 0) {
    event.preventDefault();

    const chosen =
      currentMatches.find((language) => language.id === selectedLanguageId) ||
      currentMatches[0];

    selectLanguage(chosen);
  }

  if (event.key === "Escape") {
    clearLanguageSearch();
  }
});

clearSearch.addEventListener("click", clearLanguageSearch);

document.getElementById("backToResults").addEventListener("click", () => {
  clearLanguageSearch();

  document.getElementById("languageSearch").scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
});

/* فتح وإغلاق أقسام الموقع */
const guideButtons = document.querySelectorAll("[data-open-guide]");
const guidePanels = document.querySelectorAll(".guide-panel");

guideButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.dataset.openGuide;
    const targetPanel = document.getElementById(targetId);

    guidePanels.forEach((panel) => {
      panel.hidden = panel !== targetPanel;
    });

    targetPanel.hidden = false;

    targetPanel.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    if (targetId === "web-guide") {
      window.setTimeout(() => searchInput.focus(), 350);
    }
  });
});

document.querySelectorAll("[data-close-guide]").forEach((button) => {
  button.addEventListener("click", () => {
    const panel = button.closest(".guide-panel");
    panel.hidden = true;

    const correspondingButton = document.querySelector(
      `[data-open-guide="${panel.id}"]`
    );

    if (correspondingButton) {
      correspondingButton.focus();
    }
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
const questionForm = document.getElementById("languageQuestionForm");
const questionInput = document.getElementById("languageQuestion");
const questionButton = document.getElementById("askLanguageButton");
const questionStatus = document.getElementById("questionStatus");
const questionAnswer = document.getElementById("questionAnswer");
const questionAnswerText = document.getElementById("questionAnswerText");

questionForm.addEventListener("submit", async (event) => {
event.preventDefault();

const question = questionInput.value.trim();

if (!question) {
  questionStatus.textContent = "اكتب سؤالك أولًا.";
  return;
}

const selectedLanguage = selectedLanguageId
  ? findLanguage(selectedLanguageId)
  : null;

questionButton.disabled = true;
questionButton.textContent = "جاري تجهيز الإجابة...";
questionStatus.textContent = "جاري البحث عن إجابة مناسبة...";
questionAnswer.hidden = true;

try {
  const response = await fetch("/.netlify/functions/ask", {      method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      question,
      language: selectedLanguage
        ? selectedLanguage.name
        : ""
    })
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.error || "تعذر الحصول على الإجابة. جرّب مرة ثانية."
    );
  }

  questionAnswerText.textContent = data.answer;
  questionAnswer.hidden = false;
  questionStatus.textContent = "تم تجهيز الإجابة.";
} catch (error) {
  questionStatus.textContent =
    error.message ||
    "تعذر الاتصال بالمساعد. تأكد من اتصال الإنترنت ومن إعداد الموقع.";
} finally {
  questionButton.disabled = false;
  questionButton.textContent = "اسأل عن اللغة ←";
}
});
/* ===================================
 TECHPATH - CYBER SECURITY MODE
=================================== */

(() => {
const screen = document.getElementById("cyberModeScreen");
const output = document.getElementById("cyberTerminalOutput");

if (!screen || !output) return;

const messages = [
  ["SYSTEM", "[BOOT] TechPath Cyber Lab starting..."],
  ["SYSTEM", "[SYS] Loading defensive monitoring modules..."],
  ["OK", "[AUTH] Multi-factor authentication: ENABLED (demo)"],
  ["OK", "[POLICY] Reviewing access permissions..."],
  ["INFO", "[MONITOR] Monitoring simulated security events..."],
  ["INFO", "[LOG] AUTH_FAILURE user=demo src=192.0.2.18"],
  ["OK", "[DEFENSE] Reviewing firewall configuration..."],
  ["INFO", "[AUDIT] Checking software update status..."],
  ["OK", "[PATCH] Sample update check completed."],
  ["INFO", "[TRACE] Reviewing account activity..."],
  ["OK", "[BACKUP] Backup policy detected in sample configuration."],
  ["INFO", "[ALERT] Never share your password or verification codes."],
  ["OK", "[NETWORK] No external systems are being contacted."],
  ["INFO", "analyst@techpath:~$ run defensive-audit --scope demo"],
  ["OK", "[RESULT] Demo audit complete. No real scan was performed."],
  ["INFO", "[TIP] Keep your browser and operating system updated."],
  ["INFO", "[TIP] Use unique passwords for your important accounts."],
  ["OK", "[SECURE] Monitoring continues with simulated events..."],
  ["INFO", "[CHECK] Reviewing sample security logs..."],
  ["OK", "[STATUS] Cyber Lab is running normally."]
];

let timer = null;
let messageIndex = 0;

function addLine() { const wasNearBottom =
  output.scrollHeight - output.scrollTop - output.clientHeight < 30;
  const entry = messages[messageIndex % messages.length];
  messageIndex++;

  const line = document.createElement("div");
  line.className = "cyber-line";

  const time = document.createElement("span");
  time.className = "cyber-time";
  time.textContent =
    "[" +
    new Date().toLocaleTimeString("en-GB", { hour12: false }) +
    "]";

  const message = document.createElement("span");
  message.className = "cyber-message";
  message.textContent = entry[1];

  if (entry[0] === "SYSTEM") {
    message.classList.add("is-system");
  }

  if (entry[0] === "INFO") {
    message.classList.add("is-muted");
  }

  if (entry[0] === "OK") {
    message.classList.add("is-good");
  }

  line.append(time, message);
  output.appendChild(line);

  /* Keep the terminal from growing endlessly */
  while (output.children.length > 90) {
    output.firstElementChild.remove();
  }

  /* Automatically scroll to the newest line */
  if (wasNearBottom) {
    output.scrollTop = output.scrollHeight;
  }  }

function stopCyberMode() {
  screen.hidden = true;

  document.body.classList.remove("cyber-mode");
  document.documentElement.classList.remove("cyber-mode-active");

  if (timer !== null) {
    clearInterval(timer);
    timer = null;
  }
}

function startCyberMode() {
  if (timer !== null) {
    clearInterval(timer);
  }

  document.body.classList.add("cyber-mode");
  document.documentElement.classList.add("cyber-mode-active");

  screen.hidden = false;
  output.replaceChildren();
  messageIndex = 0;

  /* Fill the terminal when it opens */
  for (let i = 0; i < 14; i++) {
    addLine();
  }

  /* Add new lines automatically */
  timer = setInterval(addLine, 850);
}

function findGuideButton(guideId) {
  return Array.from(
    document.querySelectorAll("[data-open-guide]")
  ).find(button => button.dataset.openGuide === guideId);
}

document.addEventListener(
  "click",
  event => {
    const target = event.target;

    if (!(target instanceof Element)) return;

    /* Switch from Cyber Lab to another section */
    const cyberButton = target.closest("[data-cyber-open]");

    if (cyberButton) {
      event.preventDefault();
      event.stopImmediatePropagation();

      const guideId = cyberButton.dataset.cyberOpen;

      stopCyberMode();

      const guideButton = findGuideButton(guideId);

      if (guideButton) {
        guideButton.click();
      }

      return;
    }

    /* Exit to the main page */
    if (target.closest("[data-cyber-home]")) {
      event.preventDefault();
      event.stopImmediatePropagation();

      stopCyberMode();

      document.querySelectorAll(".guide-panel").forEach(guide => {
        guide.hidden = true;
      });

      const home = document.getElementById("home");

      if (home) {
        home.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }

      return;
    }

    const guideButton = target.closest("[data-open-guide]");

    /* Open Cyber Lab when its guide is selected */
    if (
      guideButton &&
      guideButton.dataset.openGuide === "security-guide"
    ) {
      event.preventDefault();
      event.stopImmediatePropagation();

      startCyberMode();
      return;
    }

    /* Also allow clicking anywhere on the Cyber Security card */
    const topicCard = target.closest(".topic-card");

    if (
      topicCard &&
      /الأمن\s*السيبراني|cyber\s*security/i.test(topicCard.textContent)
    ) {
      event.preventDefault();
      event.stopImmediatePropagation();

      startCyberMode();
      return;
    }

    /* Restore the normal site when AI or Web/Code is selected */
    if (
      guideButton &&
      ["ai-guide", "web-guide"].includes(
        guideButton.dataset.openGuide
      )
    ) {
      stopCyberMode();
    }
  },
  true
);
})();
/* ===================================
 CYBER SECURITY - INTERACTIVE GUIDES
=================================== */

(() => {
const title = document.getElementById("cyberLessonTitle");
const description = document.getElementById("cyberLessonDescription");
const stepsContainer = document.getElementById("cyberLessonSteps");
const note = document.getElementById("cyberLessonNote");
const number = document.getElementById("cyberLessonNumber");

if (!title || !description || !stepsContainer || !note || !number) {
  return;
}

const guides = {
  accounts: {
    number: "GUIDE / 01",
    title: "حماية الحسابات",
    description: "ابدأ بحماية حساباتك؛ فالبريد الإلكتروني غالبًا بوابة استرداد بقية الحسابات.",
    steps: [
      "استخدم كلمة مرور طويلة وفريدة لكل حساب، واستعن بمدير كلمات مرور موثوق.",
      "فعّل المصادقة متعددة العوامل (MFA)، ويفضل استخدام مفاتيح أمان أو تطبيق مصادقة متى أمكن.",
      "لا تشارك كلمات المرور أو رموز التحقق مع أي شخص.",
      "راجع الأجهزة والجلسات المسجّلة ووسائل استرداد الحساب دوريًا.",
      "استخدم صفحة الدخول الرسمية، وانتبه إلى إشعارات الدخول غير المعتادة."
    ],
    note: "تفعيل MFA يقلل خطر الاستيلاء على الحساب، لكنه لا يمنع جميع أنواع الهجمات."
  },

  phishing: {
    number: "GUIDE / 02",
    title: "التصيّد الإلكتروني",
    description: "التصيّد محاولة لخداعك كي تكشف بياناتك أو تفتح ملفًا ضارًا أو تسجّل الدخول في صفحة مزيفة.",
    steps: [
      "افحص اسم النطاق كاملًا؛ فقد يستخدم المحتال اسمًا يشبه الاسم الأصلي.",
      "احذر الرسائل التي تضغط عليك للتصرف فورًا بسبب جائزة أو تهديد بإغلاق حسابك.",
      "لا تدخل كلمة مرورك بعد فتح رابط غير متوقع.",
      "إذا شككت برسالة من بنك أو شركة، افتح الموقع الرسمي بنفسك أو اتصل عبر قناة معروفة.",
      "لا تفتح المرفقات غير المتوقعة حتى لو بدا اسم المرسل مألوفًا."
    ],
    note: "وجود HTTPS أو رمز القفل لا يثبت وحده أن الموقع موثوق؛ تحقق من النطاق والجهة المرسلة."
  },

  device: {
    number: "GUIDE / 03",
    title: "تأمين الكمبيوتر والموبايل",
    description: "تحديث النظام وإعدادات الحماية الأساسية تساعد على تقليل فرص استغلال الثغرات.",
    steps: [
      "فعّل تحديثات النظام والمتصفح والبرامج التلقائية.",
      "استخدم قفل شاشة قويًا، واقفل جهازك عند الابتعاد عنه.",
      "نزّل البرامج من المواقع الرسمية أو المتاجر الموثوقة.",
      "راجع صلاحيات التطبيقات، مثل الميكروفون والكاميرا والموقع.",
      "تأكد من أن أدوات الحماية المدمجة تعمل، مثل Windows Security على ويندوز.",
      "لا توصل أجهزة USB مجهولة بمعداتك."
    ],
    note: "لا تثبّت أداة لمجرد أن إعلانًا أو نافذة منبثقة تزعم أن جهازك مصاب."
  },

  wifi: {
    number: "GUIDE / 04",
    title: "حماية شبكة Wi-Fi المنزلية",
    description: "الراوتر هو نقطة مهمة لحماية أجهزتك المتصلة بالإنترنت.",
    steps: [
      "غيّر كلمة مرور إدارة الراوتر الافتراضية.",
      "استخدم WPA3 أو WPA2-AES إذا كان متاحًا ومدعومًا.",
      "غيّر كلمة مرور Wi-Fi إذا كانت سهلة التخمين أو معروفة لعدد كبير من الأشخاص.",
      "حدّث البرنامج الداخلي للراوتر من الشركة المصنّعة.",
      "عطّل ميزات الإدارة عن بُعد التي لا تحتاجها.",
      "استخدم شبكة ضيوف للأجهزة الزائرة عند توفرها."
    ],
    note: "اسم الشبكة المخفي وحده لا يوفر حماية قوية؛ ركّز على التشفير وكلمات المرور والتحديثات."
  },

  incident: {
    number: "GUIDE / 05",
    title: "ماذا تفعل عند اختراق حسابك؟",
    description: "التصرف السريع والمنظم يساعد على استعادة الحساب وتقليل الضرر.",
    steps: [
      "افتح الموقع الرسمي للخدمة من جهاز موثوق، وليس عبر رابط مشبوه.",
      "إذا كان الحساب لا يزال متاحًا، غيّر كلمة المرور فورًا إلى كلمة جديدة وفريدة.",
      "سجّل الخروج من الجلسات الأخرى وراجع الأجهزة المسجّلة.",
      "تحقق من البريد ورقم الهاتف ووسائل الاسترداد وقواعد إعادة توجيه البريد.",
      "أمّن بريدك الأساسي والحسابات الأخرى التي تستخدم كلمة المرور نفسها.",
      "إذا تعرّض حساب مالي للخطر، اتصل بالبنك عبر رقم أو قناة رسمية."
    ],
    note: "إذا فقدت إمكانية الدخول، استخدم استرداد الحساب الرسمي. احتفظ بالأدلة ولا تدفع للمبتزين دون طلب مساعدة مختصة."
  },

  privacy: {
    number: "GUIDE / 06",
    title: "الخصوصية الرقمية",
    description: "كلما قللت المعلومات الشخصية التي تكشفها، قللت فرص إساءة استخدامها.",
    steps: [
      "شارك أقل قدر ممكن من معلوماتك الشخصية علنًا.",
      "راجع إعدادات الخصوصية في الشبكات الاجتماعية والتطبيقات.",
      "لا تنشر صور الوثائق أو التذاكر أو رموز QR التي قد تحتوي معلومات حساسة.",
      "راجع أذونات الموقع وجهات الاتصال والميكروفون للتطبيقات.",
      "احذف الحسابات والتطبيقات التي لم تعد تحتاجها.",
      "اقرأ ملخص سياسة الخصوصية قبل مشاركة بيانات حساسة."
    ],
    note: "إعدادات الخصوصية ليست بديلًا عن الحذر في المعلومات التي تنشرها."
  },

  malware: {
    number: "GUIDE / 07",
    title: "البرمجيات الخبيثة",
    description: "البرمجيات الخبيثة قد تتجسس على نشاطك أو تسرق ملفاتك أو تسيطر على جهازك.",
    steps: [
      "نزّل التطبيقات من مصادرها الرسمية.",
      "حدّث النظام والتطبيقات لسد الثغرات المعروفة.",
      "تجنب البرامج المقرصنة وأدوات التفعيل المجهولة.",
      "لا تعطِ البرامج صلاحيات المسؤول دون سبب موثوق.",
      "إذا اشتبهت بإصابة الجهاز، استخدم أداة الحماية الموثوقة واتبع إرشاداتها.",
      "إذا كان الجهاز ضمن شبكة عمل أو دراسة، أبلغ المسؤول التقني."
    ],
    note: "بطء الجهاز وحده لا يثبت وجود فيروس. لا تثبّت أدوات تنظيف مجهولة لمعالجة المشكلة."
  },

  ransomware: {
    number: "GUIDE / 08",
    title: "برامج الفدية",
    description: "برامج الفدية قد تشفر الملفات وتطلب المال مقابل استعادتها أو تهدد بنشرها.",
    steps: [
      "احتفظ بنسخ احتياطية منفصلة عن الجهاز الأساسي.",
      "حدّث النظام والبرامج، وقلّل الحسابات ذات الصلاحيات الإدارية.",
      "تجنب المرفقات والروابط غير المتوقعة.",
      "إذا ظهرت علامات تشفير غير طبيعي، افصل الجهاز المصاب عن الشبكة إذا أمكن بأمان.",
      "أبلغ فريق الدعم أو مختص الاستجابة للحوادث، ولا تحذف الأدلة بسرعة.",
      "استخدم خطة استعادة معروفة ومصادر موثوقة لفحص خيارات فك التشفير."
    ],
    note: "دفع الفدية لا يضمن استعادة الملفات أو منع نشرها."
  },

  backup: {
    number: "GUIDE / 09",
    title: "النسخ الاحتياطي والاستعادة",
    description: "النسخ الاحتياطي الجيد يساعدك على التعافي من الأعطال والحذف العرضي وبرامج الفدية.",
    steps: [
      "حدد الملفات التي لا تستطيع تعويضها.",
      "أنشئ نسخًا احتياطية منتظمة على وسيط منفصل أو خدمة موثوقة.",
      "احتفظ بنسخة غير متصلة بالجهاز أو محمية من التعديل متى أمكن.",
      "احمِ حساب النسخ الاحتياطي بكلمة مرور قوية وMFA.",
      "جرّب استعادة بعض الملفات للتأكد أن النسخ تعمل.",
      "احتفظ بخطة توضح أين توجد النسخ وكيف تستعيدها."
    ],
    note: "وجود نسخة احتياطية لا يكفي؛ يجب اختبار إمكانية الاستعادة بشكل دوري."
  },

  social: {
    number: "GUIDE / 10",
    title: "أمان مواقع التواصل",
    description: "حسابات التواصل قد تُستخدم لانتحال شخصيتك أو خداع أصدقائك.",
    steps: [
      "فعّل المصادقة متعددة العوامل.",
      "راجع الأجهزة والجلسات والتطبيقات المتصلة بحسابك.",
      "لا تنشر معلومات قد تساعد على تخمين كلمات المرور أو إجابات الاسترداد.",
      "تحقق من طلبات المال أو المساعدة المفاجئة باتصال مستقل مع الشخص.",
      "اضبط من يستطيع رؤية منشوراتك أو مراسلتك أو العثور عليك.",
      "استخدم أدوات الإبلاغ الرسمية للحسابات المنتحلة والمحتوى الاحتيالي."
    ],
    note: "قد تُسرق حسابات أشخاص تعرفهم؛ الاسم والصورة ليسا دليلًا كافيًا على هوية المرسل."
  },

  email: {
    number: "GUIDE / 11",
    title: "أمان البريد الإلكتروني",
    description: "البريد الإلكتروني غالبًا وسيلة استرداد الحسابات، لذلك يجب حمايته بعناية.",
    steps: [
      "استخدم كلمة مرور فريدة وفعّل MFA.",
      "افحص عنوان المرسل الفعلي، وليس الاسم الظاهر فقط.",
      "لا تفتح مرفقًا لم تتوقع وصوله قبل التحقق من المرسل.",
      "راجع قواعد إعادة التوجيه والمرشحات والتطبيقات المتصلة بالحساب.",
      "لا ترسل معلومات حساسة إلى عنوان لم تتحقق منه.",
      "احتفظ بوسيلة استرداد حديثة وآمنة."
    ],
    note: "إذا سيطر شخص على بريدك، فقد يتمكن من إعادة تعيين كلمات مرور حسابات أخرى."
  },

  browser: {
    number: "GUIDE / 12",
    title: "أمان المتصفح",
    description: "المتصفح هو بوابتك للويب، لكن الإضافات والصلاحيات قد تزيد المخاطر.",
    steps: [
      "حدّث Chrome أو Firefox أو المتصفح الذي تستخدمه.",
      "راجع الإضافات واحذف ما لا تحتاجه أو لا تثق بمصدره.",
      "لا تسمح بالإشعارات أو الكاميرا أو الميكروفون لمواقع بلا حاجة.",
      "اكتب عنوان الموقع الرسمي عند التعامل مع الخدمات المهمة.",
      "انتبه للتحذيرات الأمنية ولا تتجاوزها لمجرد فتح صفحة.",
      "احذف بيانات الدخول المحفوظة على جهاز مشترك."
    ],
    note: "التصفح الخاص يقلل ما يُحفظ محليًا في الجلسة، لكنه لا يجعلك مجهولًا على الإنترنت."
  },

  mobile: {
    number: "GUIDE / 13",
    title: "أمان الهواتف",
    description: "الهاتف يحتوي على حسابات ورسائل وصور وقد يتضمن وسائل الدخول والتحقق.",
    steps: [
      "فعّل قفل الشاشة والتحديثات التلقائية.",
      "نزّل التطبيقات من المتاجر الرسمية وتحقق من اسم المطوّر.",
      "راجع الأذونات واحذف التطبيقات غير المستخدمة.",
      "فعّل العثور على الجهاز وإمكانية قفله أو مسحه عن بُعد عند دعمها.",
      "لا تترك رموز التحقق ظاهرة على شاشة القفل.",
      "احذر ملفات APK المجهولة وروابط التثبيت التي تصلك برسائل."
    ],
    note: "لا تتجاهل تحذيرات النظام المتعلقة بالتطبيقات أو شهادات الأمان."
  },

  cloud: {
    number: "GUIDE / 14",
    title: "أمان التخزين السحابي",
    description: "الخدمات السحابية تسهّل الوصول للملفات، لكنها تحتاج إلى ضبط المشاركة والحسابات.",
    steps: [
      "أمّن الحساب السحابي بكلمة مرور فريدة وMFA.",
      "راجع الملفات والمجلدات التي شاركتها مع الآخرين.",
      "أوقف روابط المشاركة العامة التي لم تعد تحتاجها.",
      "تأكد من الجهة التي تمنحها صلاحية الوصول إلى ملفاتك.",
      "احتفظ بنسخة مستقلة من الملفات المهمة.",
      "راجع سجل الدخول والنشاط إذا كانت الخدمة توفره."
    ],
    note: "وجود الملف في خدمة سحابية لا يعني أن رابط مشاركته خاص تلقائيًا؛ راجع إعدادات كل ملف."
  },

  ai: {
    number: "GUIDE / 15",
    title: "الذكاء الاصطناعي والتهديدات الرقمية",
    description: "قد تُستخدم أدوات الذكاء الاصطناعي في الاحتيال أو تقليد الصوت والصورة، كما قد تساعد المدافعين.",
    steps: [
      "تحقق بشكل مستقل من طلبات المال أو المعلومات العاجلة حتى لو بدا الصوت مألوفًا.",
      "استخدم وسيلة تحقق متفقًا عليها مع العائلة أو فريق العمل.",
      "لا ترفع كلمات المرور أو الوثائق السرية أو بيانات العملاء إلى أدوات غير معتمدة.",
      "افحص المعلومات التي يولدها الذكاء الاصطناعي قبل اتخاذ قرار أمني.",
      "انتبه إلى أن الصور والصوت والفيديو قد تكون مزيفة أو معدّلة.",
      "استخدم أدوات الكشف كمؤشر مساعد، لا كدليل قاطع بمفردها."
    ],
    note: "المحتوى المصطنع قد يبدو مقنعًا؛ التحقق من المصدر والسياق أهم من الاعتماد على الانطباع البصري وحده."
  },

  downloads: {
    number: "GUIDE / 16",
    title: "التنزيلات والملفات",
    description: "الملفات التي تنزّلها قد تحتوي على برامج ضارة أو مستندات تحاول استغلال ثغرات.",
    steps: [
      "نزّل البرامج من الموقع الرسمي للمطوّر.",
      "تجنب النسخ المقرصنة وأدوات التفعيل المجهولة.",
      "افحص الملف بأداة الحماية قبل تشغيله إذا كانت هناك شكوك.",
      "انتبه لامتدادات الملفات وأسماء الملفات التي تحاول خداعك.",
      "لا تفعّل وحدات الماكرو في مستندات غير موثوقة.",
      "تحقق من التوقيع الرقمي أو قيمة التجزئة عندما ينشرها المصدر الرسمي."
    ],
    note: "نتيجة فحص واحدة لا تضمن خلو الملف من كل التهديدات؛ المصدر والسلوك والتحديثات مهمة أيضًا."
  },

  publicwifi: {
    number: "GUIDE / 17",
    title: "استخدام الشبكات العامة",
    description: "شبكات المقاهي والفنادق والمطارات قد لا تكون مُدارة بطريقة يمكنك التحقق منها.",
    steps: [
      "تحقق من اسم الشبكة مع الموظف أو الجهة الرسمية قبل الاتصال.",
      "عطّل الاتصال التلقائي بالشبكات العامة التي لا تحتاجها.",
      "استخدم مواقع وتطبيقات رسمية محدثة.",
      "تجنب تجاهل تحذيرات الشهادات أو تثبيت ملفات تعريف اتصال مجهولة.",
      "استخدم VPN موثوقًا عند الحاجة ووفق سياسة الجهة التي تتبع لها.",
      "افصل الاتصال بالشبكة العامة عندما تنتهي."
    ],
    note: "VPN لا يمنع التصيّد أو جميع أنواع التجسس، ولا يعوّض تحديث الجهاز وحماية الحسابات."
  },

  network: {
    number: "GUIDE / 18",
    title: "أساسيات الشبكات",
    description: "فهم أساسيات الشبكات يساعدك على قراءة المشكلات الأمنية وفهم ما يجري بين الأجهزة.",
    steps: [
      "IP يعرّف واجهة الشبكة على مستوى بروتوكول الإنترنت.",
      "DNS يساعد على تحويل أسماء النطاقات إلى عناوين IP.",
      "المنافذ تُستخدم لتحديد خدمات واتصالات الشبكة على الجهاز.",
      "الجدار الناري يطبق قواعد للسماح بحركة مرور معينة أو حظرها.",
      "قسّم الشبكات عند الحاجة لعزل الأجهزة ذات مستويات الثقة المختلفة.",
      "راقب إعدادات الراوتر والخدمات المكشوفة على الشبكة."
    ],
    note: "تعلّم هذه المفاهيم داخل شبكتك أو مختبر تدريبي، ولا تفحص شبكات الآخرين دون تصريح."
  },

  websecurity: {
    number: "GUIDE / 19",
    title: "أمان المواقع الإلكترونية",
    description: "مواقع الويب تتعامل مع مدخلات المستخدمين والجلسات والبيانات، ويجب تصميمها لحمايتها.",
    steps: [
      "تحقق من البيانات على الخادم، ولا تعتمد على التحقق في المتصفح وحده.",
      "استخدم استعلامات قاعدة بيانات مَعْلَمية (parameterized queries) لتقليل خطر SQL injection.",
      "احمِ الجلسات باستخدام إعدادات ملفات تعريف الارتباط المناسبة وHTTPS.",
      "طبّق ضوابط تمنع الوصول إلى سجلات أو حسابات مستخدمين آخرين.",
      "لا تعرض تفاصيل الأخطاء الداخلية أو أسرار الخادم للزائر.",
      "حدّث المكتبات والإضافات، واختبر الموقع ضمن بيئة تملكها أو لديك إذن باختبارها."
    ],
    note: "HTTPS يحمي الاتصال أثناء النقل، لكنه لا يجعل التطبيق نفسه آمنًا تلقائيًا."
  },

  coding: {
    number: "GUIDE / 20",
    title: "البرمجة الآمنة",
    description: "الأمان يبدأ من كتابة الكود وإدارة الأسرار والاعتماديات بطريقة صحيحة.",
    steps: [
      "تحقق من كل مدخلات المستخدم على الخادم وبحسب نوع البيانات المتوقع.",
      "استخدم الاستعلامات المعلّمة بدل بناء أوامر قاعدة البيانات بدمج النصوص.",
      "لا تضع مفاتيح API أو كلمات المرور أو مفاتيح التوقيع في كود الواجهة أو مستودع عام.",
      "طبّق أقل صلاحية ممكنة على قواعد البيانات والخدمات والحسابات.",
      "حدّث الحزم التابعة لمشروعك وتابع التحذيرات الأمنية.",
      "راجع الكود واختبر حالات الفشل والصلاحيات قبل النشر."
    ],
    note: "إذا تسرّب سر أو مفتاح، لا تكتفِ بحذفه من آخر نسخة؛ أبطله ودوّره من لوحة الخدمة."
  },

  logs: {
    number: "GUIDE / 21",
    title: "السجلات والمراقبة الأمنية",
    description: "السجلات تساعد على اكتشاف الأحداث غير المعتادة وفهم ما حدث بعد وقوع مشكلة.",
    steps: [
      "راجع محاولات الدخول الفاشلة والتغييرات الحساسة في الحسابات.",
      "راقب التنبيهات المتعلقة بالأجهزة أو المواقع أو الجلسات غير المعروفة.",
      "استخدم توقيتًا متناسقًا قدر الإمكان لتسهيل ربط الأحداث.",
      "احمِ سجلات النظام من التعديل غير المصرح به.",
      "لا تسجّل كلمات المرور أو رموز الجلسات أو بيانات حساسة غير لازمة.",
      "حدّد طريقة واضحة للإبلاغ عن التنبيهات ومراجعتها."
    ],
    note: "السجل وحده لا يثبت كل تفاصيل الحادث؛ قارنه بمصادر أخرى واحفظ الأدلة عند الحاجة."
  },

  encryption: {
    number: "GUIDE / 22",
    title: "التشفير والمفاتيح",
    description: "التشفير يساعد على حماية سرية البيانات، لكنه يحتاج إلى إدارة صحيحة للمفاتيح.",
    steps: [
      "استخدم الخدمات التي تعتمد HTTPS لحماية البيانات أثناء النقل.",
      "فعّل تشفير الجهاز أو القرص عندما يكون متاحًا ومناسبًا.",
      "احتفظ بمفاتيح الاسترداد في مكان آمن منفصل عن الجهاز.",
      "لا ترسل المفاتيح السرية أو كلمات المرور في محادثات عامة.",
      "استخدم مكتبات تشفير موثوقة بدل ابتكار خوارزمية خاصة بك.",
      "تأكد من أن النسخ الاحتياطية يمكن استعادتها باستخدام المفاتيح اللازمة."
    ],
    note: "التشفير لا يحمي البيانات من شخص يملك وصولًا مصرحًا به إلى جهاز مفتوح أو حساب مخترق."
  },

  payments: {
    number: "GUIDE / 23",
    title: "أمان التسوق والدفع الإلكتروني",
    description: "المحتالون قد ينتحلون المتاجر أو شركات الشحن أو الجهات المالية لسرقة الأموال.",
    steps: [
      "تحقق من اسم النطاق وبيانات المتجر ووسيلة التواصل قبل الدفع.",
      "لا تشارك PIN البطاقة أو رمز التحقق لمعاملة لم تبدأها بنفسك.",
      "استخدم قنوات الدفع الرسمية وإشعارات المعاملات.",
      "احذر البائع الذي يضغط عليك لتحويل الأموال خارج المنصة.",
      "راجع كشف الحساب وأبلغ البنك فورًا عن أي معاملة مجهولة.",
      "لا تثبّت تطبيق دعم عن بُعد بناءً على اتصال غير متوقع يدّعي أنه من البنك."
    ],
    note: "رمز القفل وحده لا يثبت أن المتجر شرعي؛ تأكد من هوية المتجر وشروط الدفع."
  },

  iot: {
    number: "GUIDE / 24",
    title: "أمان الأجهزة الذكية",
    description: "الكاميرات والتلفزيونات والأجهزة المتصلة قد تتعرض للخطر إذا أهملت حساباتها وتحديثاتها.",
    steps: [
      "غيّر بيانات الدخول الافتراضية لكل جهاز يدعم ذلك.",
      "نزّل التحديثات من الشركة المصنّعة.",
      "عطّل الخدمات والميزات التي لا تحتاجها.",
      "ضع أجهزة إنترنت الأشياء على شبكة منفصلة عند توفر هذا الخيار.",
      "راجع الصلاحيات والتسجيلات والوصول عن بُعد.",
      "استبدل الأجهزة التي انتهى دعمها عندما تمثل مخاطر لا يمكن معالجتها."
    ],
    note: "لا تفتح لوحة إدارة جهازك على الإنترنت مباشرة دون حاجة وضوابط أمنية مناسبة."
  },

  identity: {
    number: "GUIDE / 25",
    title: "حماية الهوية الرقمية",
    description: "سرقة الهوية قد تشمل استخدام صورك أو وثائقك أو بياناتك لتمثيلك دون إذنك.",
    steps: [
      "لا تنشر صور الوثائق أو المعلومات الشخصية الحساسة دون حاجة.",
      "استخدم وسائل تحقق قوية للحسابات التي تحتوي على بياناتك الرسمية.",
      "تحقق من طلبات مشاركة الهوية عبر الجهة الرسمية، لا عبر رابط مجهول.",
      "فعّل تنبيهات تسجيل الدخول والمعاملات عندما تكون متاحة.",
      "وثّق الحسابات المنتحلة والتقط صورًا للأدلة قبل الإبلاغ عنها.",
      "إذا استُخدمت بياناتك في معاملة مالية، تواصل مع الجهة المعنية عبر قناة رسمية."
    ],
    note: "لا ترسل نسخة من هويتك إلى جهة لم تتحقق من هويتها والغرض الذي ستستخدمها فيه."
  },

  access: {
    number: "GUIDE / 26",
    title: "الصلاحيات والتحكم بالوصول",
    description: "يقلل مبدأ أقل صلاحية من الضرر الذي قد يحدث عند إساءة استخدام حساب أو اختراقه.",
    steps: [
      "امنح الحسابات الصلاحيات الضرورية فقط لأداء العمل.",
      "استخدم حسابًا عاديًا للمهام اليومية بدل حساب المسؤول عند الإمكان.",
      "افصل الحسابات الشخصية عن حسابات العمل أو الإدارة.",
      "ألغِ وصول الموظفين أو التطبيقات التي لم تعد تحتاج إلى الدخول.",
      "راجع الصلاحيات الحساسة بعد التغييرات وفي فترات منتظمة.",
      "لا تشارك حساب المسؤول بين عدة أشخاص إذا كان يمكن إنشاء حسابات منفصلة."
    ],
    note: "تسجيل الدخول الناجح لا يعني أن كل طلب بعده يجب أن يُسمح به؛ تحقق من صلاحية كل عملية."
  },

  vulnerability: {
    number: "GUIDE / 27",
    title: "الثغرات الأمنية والتحديثات",
    description: "الثغرة ضعف قد يسمح بسلوك غير مقصود؛ وتقليل التعرض لها يبدأ بالجرد والتحديث والاختبار.",
    steps: [
      "اعرف أنظمة التشغيل والبرامج والمكتبات التي تستخدمها.",
      "تابع إشعارات الأمان من الشركة المطوّرة للمكوّن.",
      "طبّق التحديثات الأمنية بحسب خطورتها وظروف النظام.",
      "اختبر التحديثات في بيئة مناسبة قبل تعميمها على الأنظمة المهمة.",
      "أزل البرامج والخدمات التي لا تحتاجها.",
      "استخدم مختبرات قانونية لتعلّم اكتشاف الثغرات والتحقق من الإصلاح."
    ],
    note: "لا تختبر ثغرة على موقع عام أو جهاز لا تملكه دون إذن واضح ونطاق اختبار محدد."
  },

  careers: {
    number: "GUIDE / 28",
    title: "مسارات العمل في الأمن السيبراني",
    description: "المجال يتضمن مسارات متنوعة؛ اختيار المسار المناسب يعتمد على أساسياتك واهتماماتك.",
    steps: [
      "أساسيات الشبكات وأنظمة التشغيل مفيدة لمعظم التخصصات.",
      "SOC وBlue Team يركزان على المراقبة والتحليل والاستجابة للحوادث.",
      "Red Team واختبار الاختراق يتطلبان مهارات اختبار ضمن تصريح ونطاق واضح.",
      "الحوسبة السحابية الأمنية تركز على الهوية والإعدادات وحماية الخدمات.",
      "أمن التطبيقات والبرمجة الآمنة يناسب من يحب تطوير البرمجيات.",
      "أنشئ مختبرًا قانونيًا ووثّق مشاريعك وملاحظاتك بدل اختبار أنظمة الآخرين."
    ],
    note: "ابدأ بالأساسيات ومشاريع صغيرة يمكنك شرحها، ثم توسع تدريجيًا إلى المسار الذي يناسبك."
  },

  ethics: {
    number: "GUIDE / 29",
    title: "الأخلاقيات والقانون في الأمن السيبراني",
    description: "المهارة التقنية يجب أن تُستخدم بموافقة واضحة وضمن حدود قانونية وأخلاقية.",
    steps: [
      "اختبر الأنظمة التي تملكها أو لديك إذن صريح لاختبارها.",
      "اتفق على نطاق الاختبار والوقت والأنظمة المسموح بها قبل البدء.",
      "لا تحاول الوصول إلى بيانات أشخاص آخرين أو نسخها دون ضرورة وإذن.",
      "أوقف الاختبار إذا اكتشفت تأثيرًا غير متوقع أو خطرًا على الخدمة.",
      "وثّق النتائج بطريقة مسؤولة وشاركها مع الجهة المالكة عبر القناة المعتمدة.",
      "تعلّم على منصات تدريبية ومختبرات مصممة لهذا الغرض."
    ],
    note: "وجود ثغرة في نظام لا يمنحك الإذن لاختبارها أو استغلالها. احصل على تصريح واضح أولًا."
  }
};

function showGuide(key) {
  const guide = guides[key];
  if (!guide) return;

  number.textContent = guide.number;
  title.textContent = guide.title;
  description.textContent = guide.description;
  note.textContent = guide.note;

  stepsContainer.replaceChildren();

  guide.steps.forEach(step => {
    const item = document.createElement("li");
    item.textContent = step;
    stepsContainer.appendChild(item);
  });

  document.querySelectorAll("[data-cyber-topic]").forEach(button => {
    const active = button.dataset.cyberTopic === key;

    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

document.addEventListener("click", event => {
  const target = event.target;

  if (!(target instanceof Element)) return;

  const button = target.closest("[data-cyber-topic]");
  if (!button) return;

  showGuide(button.dataset.cyberTopic);

  document.getElementById("cyberLessonTitle")?.scrollIntoView({
    behavior: "smooth",
    block: "nearest"
  });
});

showGuide("accounts");
})();
/* =====================================
 SECURE PASSWORD GENERATOR
===================================== */

(() => {
const panel = document.getElementById("cyberPasswordPanel");
const openButton = document.querySelector(
  ".cyber-password-feature-btn[data-password-open]"
);
const closeButton = document.querySelector("[data-password-close]");
const lengthSelect = document.getElementById("cyberPasswordLength");
const lengthToggle = document.getElementById("cyberLengthToggle");
const lengthOptions = document.getElementById("cyberLengthOptions");
const output = document.getElementById("cyberPasswordOutput");
const generateButton = document.getElementById("cyberGeneratePassword");
const copyButton = document.getElementById("cyberCopyPassword");
const status = document.getElementById("cyberPasswordStatus");

// Do not stop the rest of the website if this tool's HTML is missing.
if (
  !panel || !openButton || !closeButton || !lengthSelect ||
  !lengthToggle || !lengthOptions || !output || !generateButton ||
  !copyButton || !status
) {
  console.error("Password Generator: one or more HTML elements are missing.");
  return;
}

const upper = "ABCDEFGHJKLMNPQRSTUVWXYZ";
const lower = "abcdefghijkmnopqrstuvwxyz";
const digits = "23456789";
const symbols = "!@#$%^&*()-_=+[]{}?";
const allCharacters = upper + lower + digits + symbols;

// Avoid repeating a password already generated in this browser-page session.
const generatedPasswords = new Set();

function randomIndex(max) {
  if (!window.crypto || typeof window.crypto.getRandomValues !== "function") {
    throw new Error("SECURE_RANDOM_UNAVAILABLE");
  }

  // Rejection sampling avoids modulo bias.
  const range = 0x100000000;
  const limit = Math.floor(range / max) * max;
  const buffer = new Uint32Array(1);

  do {
    window.crypto.getRandomValues(buffer);
  } while (buffer[0] >= limit);

  return buffer[0] % max;
}

function randomCharacter(characters) {
  return characters[randomIndex(characters.length)];
}

function shuffleCharacters(characters) {
  for (let i = characters.length - 1; i > 0; i--) {
    const j = randomIndex(i + 1);
    [characters[i], characters[j]] = [characters[j], characters[i]];
  }

  return characters;
}

function createPassword(length) {
  if (!Number.isInteger(length) || length < 16 || length > 1000) {
    throw new Error("INVALID_LENGTH");
  }

  // Ensure at least one uppercase, lowercase, digit, and symbol.
  for (let attempt = 0; attempt < 100; attempt++) {
    const characters = [
      randomCharacter(upper),
      randomCharacter(lower),
      randomCharacter(digits),
      randomCharacter(symbols)
    ];

    while (characters.length < length) {
      characters.push(randomCharacter(allCharacters));
    }

    const password = shuffleCharacters(characters).join("");

    if (!generatedPasswords.has(password)) {
      generatedPasswords.add(password);
      return password;
    }
  }

  throw new Error("PASSWORD_GENERATION_FAILED");
}

function getPasswordLength() {
  const value = String(lengthSelect.value).trim();

  if (!/^\d+$/.test(value)) {
    throw new Error("INVALID_LENGTH");
  }

  const length = Number(value);

  if (!Number.isSafeInteger(length) || length < 16 || length > 1000) {
    throw new Error("INVALID_LENGTH");
  }

  return length;
}

function updateLengthLabel(length) {
  lengthToggle.textContent = `${length} Characters ▾`;
}

function generateNewPassword() {
  let length;

  try {
    length = getPasswordLength();
  } catch (error) {
    status.textContent = "اختار عددًا صحيحًا من 16 إلى 1000 حرف.";
    lengthSelect.focus();
    return;
  }

  try {
    const password = createPassword(length);
    output.value = password;
    updateLengthLabel(length);

    lengthOptions.hidden = true;
    lengthToggle.setAttribute("aria-expanded", "false");

    status.textContent = `تم إنشاء كلمة مرور عشوائية جديدة بطول ${length} حرفًا.`;
    copyButton.disabled = false;
  } catch (error) {
    output.value = "";
    status.textContent = "تعذّر إنشاء كلمة المرور بأمان. جرّب تحديث الصفحة.";
    copyButton.disabled = true;
    console.error("Password generation failed:", error);
  }
}

async function copyPassword() {
  if (!output.value) {
    status.textContent = "أنشئ كلمة مرور أولًا.";
    return;
  }

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(output.value);
    } else {
      // Fallback for local previews where Clipboard API is unavailable.
      output.focus();
      output.select();
      output.setSelectionRange(0, output.value.length);

      const copied = document.execCommand("copy");
      if (!copied) throw new Error("COPY_FAILED");

      output.setSelectionRange(0, 0);
    }

    status.textContent = "✓ تم نسخ كلمة المرور. احتفظ بها في مكان آمن.";
  } catch (error) {
    output.focus();
    output.select();
    output.setSelectionRange(0, output.value.length);
    status.textContent = "تعذّر النسخ التلقائي. انسخها باستخدام Ctrl + C.";
  }
}

// Open and close the custom password-length menu.
lengthToggle.addEventListener("click", () => {
  const willOpen = lengthOptions.hidden;
  lengthOptions.hidden = !willOpen;
  lengthToggle.setAttribute("aria-expanded", String(willOpen));

  if (willOpen) lengthSelect.focus();
});

// Preserve the six original preset lengths.
document.querySelectorAll("[data-password-length]").forEach(button => {
  button.addEventListener("click", () => {
    const length = Number(button.dataset.passwordLength);
    if (!Number.isInteger(length) || length < 16 || length > 1000) return;

    lengthSelect.value = String(length);
    updateLengthLabel(length);
    lengthOptions.hidden = true;
    lengthToggle.setAttribute("aria-expanded", "false");
    status.textContent = `تم اختيار ${length} حرفًا. اضغط GENERATE NEW لإنشاء كلمة المرور.`;
  });
});

// Update the label when the user enters a custom length from 16 to 1000.
function updateCustomLengthLabel() {
  try {
    updateLengthLabel(getPasswordLength());
  } catch (error) {
    // Allow the user to finish typing an incomplete value.
  }
}

lengthSelect.addEventListener("input", updateCustomLengthLabel);
lengthSelect.addEventListener("change", updateCustomLengthLabel);

openButton.addEventListener("click", () => {
  panel.hidden = !panel.hidden;
  openButton.setAttribute("aria-expanded", String(!panel.hidden));

  if (!panel.hidden) {
    if (!output.value) generateNewPassword();
    panel.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

closeButton.addEventListener("click", () => {
  panel.hidden = true;
  openButton.setAttribute("aria-expanded", "false");

  document.getElementById("cyberLearning")?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

generateButton.addEventListener("click", generateNewPassword);
copyButton.addEventListener("click", copyPassword);
})();

/* Remove duplicate Cyber Security topic cards */

(() => {
const seenTopics = new Set();

document.querySelectorAll("[data-cyber-topic]").forEach(card => {
  const topic = card.dataset.cyberTopic;

  if (!topic) return;

  if (seenTopics.has(topic)) {
    card.remove();
    return;
  }

  seenTopics.add(topic);
});
})();

/* ==================================================
   TECHPATH CYBER ACADEMY — INDEPENDENT LESSON PAGES
   Unique learning paths, compact topics, quizzes,
   progress tracking, video links and official sources.
================================================== */

(() => {
  "use strict";

  const cyberLearning = document.getElementById("cyberLearning");
  const cyberScreen = document.getElementById("cyberModeScreen");
  const libraryHeading = cyberLearning?.querySelector(".cyber-library-heading");
  const topicGrid = cyberLearning?.querySelector(".cyber-learning-grid");
  const oldLessonPanel = cyberLearning?.querySelector(".cyber-lesson");

  if (!cyberLearning || !cyberScreen || !libraryHeading || !topicGrid) {
    console.error("TechPath Academy: missing required HTML elements.");
    return;
  }

  // Replace the older dynamically generated academy, if present.
  document.getElementById("cyberAcademy")?.remove();
  document.getElementById("cyberAcademyStyles")?.remove();
  document.getElementById("techPathCyberAcademyStyles")?.remove();

  // The 29-item library remains visible and independent from course lesson pages.
  if (oldLessonPanel) oldLessonPanel.hidden = false;

  const STORAGE_KEY = "techpath.cyberAcademy.progress.v3";

  const SOURCES = {
    cisa: {
      title: "CISA — Secure Our World",
      url: "https://www.cisa.gov/secure-our-world"
    },
    phishing: {
      title: "FTC — Recognize and avoid phishing scams",
      url: "https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams"
    },
    ransomware: {
      title: "CISA — StopRansomware Guide",
      url: "https://www.cisa.gov/stopransomware/ransomware-guide"
    },
    incident: {
      title: "NIST — Computer Security Incident Handling",
      url: "https://csrc.nist.gov/pubs/sp/800/61/r3/final"
    },
    nist: {
      title: "NIST Cybersecurity Framework",
      url: "https://www.nist.gov/cyberframework"
    },
    owasp: {
      title: "OWASP Top 10: 2025",
      url: "https://top10.owasp.org/2025/"
    },
    cheatSheets: {
      title: "OWASP Cheat Sheet Series",
      url: "https://cheatsheetseries.owasp.org/"
    },
    crypto: {
      title: "NIST — Cryptographic Standards and Guidelines",
      url: "https://csrc.nist.gov/projects/cryptographic-standards-and-guidelines"
    },
    nice: {
      title: "NIST NICE — Cybersecurity Workforce Framework",
      url: "https://www.nist.gov/itl/applied-cybersecurity/nice/nice-framework-resource-center"
    },
    ai: {
      title: "NIST — AI Risk Management Framework",
      url: "https://www.nist.gov/itl/ai-risk-management-framework"
    },
    iot: {
      title: "NIST — Cybersecurity for IoT",
      url: "https://www.nist.gov/itl/applied-cybersecurity/nist-cybersecurity-iot-program"
    }
  };

  /*
   * Every topic has one primary path.
   * The 29 compact squares remain a separate quick-access index.
   */
  const PATHS = [
    {
      id: "foundations",
      number: "PATH 01",
      level: "مبتدئ",
      title: "أساسيات الحماية الرقمية",
      description: "ابدأ بحماية الحسابات والخصوصية والبريد ومواجهة الخداع الرقمي.",
      topics: [
        "accounts", "phishing", "privacy", "email",
        "social", "payments", "identity", "ethics"
      ]
    },
    {
      id: "devices",
      number: "PATH 02",
      level: "مبتدئ",
      title: "الأجهزة والشبكات",
      description: "تعلّم حماية الكمبيوتر والهاتف والمتصفح والشبكات والأجهزة الذكية.",
      topics: [
        "device", "browser", "mobile", "downloads",
        "malware", "wifi", "publicwifi", "network", "iot"
      ]
    },
    {
      id: "defense",
      number: "PATH 03",
      level: "متوسط",
      title: "الدفاع والاستجابة للحوادث",
      description: "افهم السجلات والثغرات والنسخ الاحتياطية والتعافي من الحوادث.",
      topics: [
        "ransomware", "backup", "incident", "logs", "vulnerability"
      ]
    },
    {
      id: "appsec",
      number: "PATH 04",
      level: "متوسط",
      title: "أمن التطبيقات والبيانات",
      description: "ركّز على أمان المواقع والكود والصلاحيات والتشفير والخدمات السحابية.",
      topics: [
        "websecurity", "coding", "access", "encryption", "cloud"
      ]
    },
    {
      id: "future",
      number: "PATH 05",
      level: "استكشاف",
      title: "الذكاء الاصطناعي والمسار المهني",
      description: "استكشف تهديدات الذكاء الاصطناعي والمهارات المطلوبة لمسارات العمل.",
      topics: ["ai", "careers"]
    }
  ];

  /*
   * Lesson explanations are educational starting points.
   * Each lesson also uses its existing detailed steps and safety note
   * from the current Cyber Security guide.
   */
  const LESSONS = {
    accounts: {
      title: "حماية الحسابات",
      explanation: "أمان الحسابات يعتمد على كلمات مرور فريدة، ومصادقة متعددة العوامل، ومراجعة وسائل الاسترداد والجلسات النشطة. احمِ بريدك الأساسي بعناية لأنه قد يُستخدم لاستعادة حسابات أخرى.",
      learn: [
        "استخدام كلمات مرور طويلة وفريدة.",
        "فهم المصادقة متعددة العوامل (MFA).",
        "مراجعة الجلسات والأجهزة ووسائل الاسترداد."
      ],
      practice: [
        "راجع إعدادات أمان حساب مهم تملكه.",
        "فعّل MFA إذا كانت الخدمة تدعمها.",
        "تأكد من أن وسائل استرداد الحساب محدثة وتحت سيطرتك."
      ],
      warning: "لا تستخدم كلمة المرور نفسها في مواقع متعددة، ولا تشارك رموز التحقق مع أي شخص.",
      quiz: {
        q: "ما أفضل إجراء عند استخدام كلمة المرور نفسها في عدة حسابات؟",
        options: [
          "تركها ما دامت طويلة",
          "استخدام كلمات مرور فريدة وتفعيل MFA",
          "إرسالها إلى بريدك الإلكتروني"
        ],
        answer: 1,
        explain: "تفرد كلمات المرور يقلل أثر تسريب أي حساب، بينما تضيف MFA طبقة حماية أخرى."
      },
      sources: ["cisa", "nist"],
      video: "CISA account security multi factor authentication password manager"
    },

    phishing: {
      title: "التصيّد الإلكتروني",
      explanation: "التصيّد محاولة لخداع المستخدم حتى يكشف بياناته أو يفتح ملفًا ضارًا أو يدخل إلى صفحة تسجيل دخول مزيفة. قد يصل عبر البريد أو الرسائل النصية أو المكالمات أو الشبكات الاجتماعية.",
      learn: [
        "فحص عنوان المرسل والنطاق كاملًا.",
        "اكتشاف الطلبات العاجلة والمرفقات غير المتوقعة.",
        "التحقق عبر قناة مستقلة."
      ],
      practice: [
        "حدد مؤشرات الشك في رسالة تدريبية.",
        "افتح الموقع الرسمي بكتابة عنوانه بنفسك.",
        "استخدم وسيلة الإبلاغ الرسمية عند استلام رسالة مشبوهة."
      ],
      warning: "وجود HTTPS أو شعار مشهور لا يثبت أن الموقع شرعي. لا تدخل بياناتك عبر رابط غير متوقع.",
      quiz: {
        q: "وصلتك رسالة عاجلة تطلب تحديث كلمة المرور عبر رابط غير متوقع. ماذا تفعل؟",
        options: [
          "فتح الرابط فورًا",
          "فتح الموقع الرسمي والتحقق بصورة مستقلة",
          "إرسال رمز التحقق إلى المرسل"
        ],
        answer: 1,
        explain: "التحقق عبر قناة مستقلة يقلل احتمال إدخال بياناتك في صفحة مزيفة."
      },
      sources: ["phishing", "cisa"],
      video: "CISA phishing awareness recognize phishing emails"
    },

    device: {
      title: "تأمين الكمبيوتر والموبايل",
      explanation: "حماية الأجهزة تجمع بين التحديثات الأمنية، وتقليل الصلاحيات، وقفل الشاشة، واستخدام أدوات الحماية الموثوقة. لا توجد أداة منفردة تمنع جميع المخاطر.",
      learn: [
        "أهمية تحديث النظام والتطبيقات.",
        "مبدأ أقل صلاحية.",
        "استخدام أدوات الحماية المدمجة."
      ],
      practice: [
        "تحقق من حالة تحديثات النظام.",
        "احذف البرامج التي لم تعد تحتاجها.",
        "تأكد من عمل قفل الشاشة وأداة الحماية."
      ],
      warning: "لا تثبّت أداة تنظيف بسبب نافذة منبثقة تدّعي أن جهازك مصاب.",
      quiz: {
        q: "لماذا نثبت التحديثات الأمنية؟",
        options: [
          "لأنها تضمن انعدام المخاطر",
          "لإصلاح مشكلات وثغرات معروفة",
          "لزيادة عدد البرامج فقط"
        ],
        answer: 1,
        explain: "تساعد التحديثات على معالجة ثغرات معروفة، لكنها لا تجعل الجهاز محصنًا بالكامل."
      },
      sources: ["cisa", "nist"],
      video: "CISA secure devices software updates cybersecurity"
    },

    wifi: {
      title: "حماية شبكة Wi-Fi المنزلية",
      explanation: "تأمين الشبكة يبدأ من حماية إعدادات الراوتر، واستخدام تشفير حديث، وتحديث البرنامج الداخلي، ومراجعة الأجهزة المتصلة.",
      learn: [
        "الفرق بين كلمة مرور الشبكة وكلمة مرور إدارة الراوتر.",
        "أهمية WPA2-AES أو WPA3 عند توفره.",
        "تقليل الخدمات البعيدة غير اللازمة."
      ],
      practice: [
        "راجع دليل الراوتر لمعرفة طريقة تحديثه الرسمية.",
        "غيّر كلمة مرور الإدارة الافتراضية.",
        "راجع الأجهزة المتصلة وإعدادات التشفير."
      ],
      warning: "إخفاء اسم الشبكة وحده لا يوفر حماية قوية. لا تفتح إدارة الراوتر للإنترنت دون حاجة وضوابط مناسبة.",
      quiz: {
        q: "ما الذي يساعد أكثر على تأمين الراوتر؟",
        options: [
          "إخفاء اسم الشبكة فقط",
          "كلمة مرور قوية وتشفير حديث وتحديثات",
          "اسم شبكة قصير"
        ],
        answer: 1,
        explain: "الحماية الأفضل تعتمد على مجموعة إعدادات، لا على إخفاء اسم الشبكة فقط."
      },
      sources: ["cisa", "nist"],
      video: "NIST home wireless router security WPA3"
    },

    incident: {
      title: "الاستجابة للحوادث الأمنية",
      explanation: "الاستجابة للحوادث هي منهج منظم لتقليل الضرر، واحتواء المشكلة، وحفظ المعلومات اللازمة للتحقيق، ثم استعادة الأنظمة بصورة آمنة ومنع تكرار السبب.",
      learn: [
        "التمييز بين الاحتواء والتعافي.",
        "حفظ الأدلة والسجلات المهمة.",
        "الإبلاغ والتصعيد وفق خطة واضحة."
      ],
      practice: [
        "اكتب قائمة بجهات التواصل عند وقوع حادث.",
        "حدد مكان النسخ الاحتياطية وبيانات الدعم.",
        "تدرّب على إعداد تسلسل زمني لحادث افتراضي."
      ],
      warning: "لا تحذف السجلات ولا تعِد تهيئة جهاز مشتبه به بعشوائية قبل تقييم الحاجة إلى الأدلة.",
      quiz: {
        q: "ما التصرف المناسب بعد الاشتباه بحادث على جهاز عمل؟",
        options: [
          "حذف جميع السجلات",
          "اتباع خطة الاستجابة وإبلاغ المسؤول",
          "إعادة إرسال الملفات المشبوهة للزملاء"
        ],
        answer: 1,
        explain: "الإبلاغ المنظم وحفظ الأدلة يساعدان على تقليل الضرر ودعم التحقيق."
      },
      sources: ["incident", "nist"],
      video: "NIST incident response lifecycle cybersecurity"
    },

    privacy: {
      title: "الخصوصية الرقمية",
      explanation: "الخصوصية الرقمية تتعلق بالمعلومات التي تنشرها، والبيانات التي تجمعها التطبيقات، والأشخاص الذين يستطيعون الوصول إليها. تقليل البيانات المكشوفة يقلل فرص إساءة استخدامها.",
      learn: [
        "مراجعة إعدادات الخصوصية.",
        "التحكم في أذونات التطبيقات.",
        "تقليل مشاركة البيانات الشخصية."
      ],
      practice: [
        "راجع إعدادات الخصوصية في حساب اجتماعي.",
        "أوقف إذنًا غير ضروري لتطبيق.",
        "راجع الملفات أو الروابط التي شاركتها علنًا."
      ],
      warning: "الحساب الخاص لا يمنع المتابعين من حفظ المحتوى أو إعادة مشاركته.",
      quiz: {
        q: "ما الممارسة الأفضل لحماية الخصوصية؟",
        options: [
          "منح جميع التطبيقات كل الأذونات",
          "مراجعة الأذونات ومشاركة أقل قدر لازم",
          "نشر الوثائق لتسهيل الوصول إليها"
        ],
        answer: 1,
        explain: "تقليل البيانات والصلاحيات يقلل المعلومات التي قد تُكشف أو يُساء استخدامها."
      },
      sources: ["cisa", "nist"],
      video: "CISA online privacy personal information security"
    },

    malware: {
      title: "البرمجيات الخبيثة",
      explanation: "البرمجيات الخبيثة قد تسرق البيانات أو تتجسس أو تعطل الملفات. وقد تصل من مرفقات أو تنزيلات مجهولة أو ثغرات أو حسابات مخترقة.",
      learn: [
        "مصادر العدوى الشائعة.",
        "أهمية التنزيلات الموثوقة.",
        "خطوات أولية عند الاشتباه بإصابة."
      ],
      practice: [
        "تحقق من مصدر برنامج مثبت لديك.",
        "راجع حالة أداة الحماية المدمجة.",
        "تعرّف على طريقة الإبلاغ عن ملف مشبوه دون تشغيله."
      ],
      warning: "لا تشغّل ملفًا مشبوهًا لتعرف ماذا يفعل، ولا تثبّت أداة إزالة مجهولة من إعلان.",
      quiz: {
        q: "كيف تتعامل مع مرفق غير متوقع من جهة غير مؤكدة؟",
        options: [
          "تشغيله بسرعة",
          "التحقق من المرسل قبل فتحه",
          "تعطيل الحماية لفتحه"
        ],
        answer: 1,
        explain: "التحقق من المصدر وتجنب تشغيل الملف يقللان خطر العدوى."
      },
      sources: ["cisa", "ransomware"],
      video: "CISA malware prevention safe downloads"
    },

    ransomware: {
      title: "برامج الفدية",
      explanation: "برامج الفدية قد تشفر الملفات أو تمنع الوصول إلى الأنظمة وتطلب المال، وقد تهدد بنشر البيانات. الحماية تعتمد على التحديثات والنسخ الاحتياطية والاستجابة المنظمة.",
      learn: [
        "تقليل فرص الإصابة.",
        "الاحتواء والإبلاغ عند وقوع الحادث.",
        "أهمية النسخ الاحتياطية المحمية."
      ],
      practice: [
        "راجع آخر نسخة احتياطية لديك.",
        "حدد الحسابات ذات الصلاحيات الإدارية.",
        "اكتب قائمة بخطوات الإبلاغ عند ظهور حادث."
      ],
      warning: "دفع الفدية لا يضمن استعادة الملفات أو منع نشرها.",
      quiz: {
        q: "أي إعداد يساعد على التعافي من برامج الفدية؟",
        options: [
          "نسخة احتياطية منفصلة ومختبرة",
          "نسخة متصلة دائمًا ولها صلاحيات كتابة كاملة",
          "حذف سجلات الحادث فورًا"
        ],
        answer: 0,
        explain: "النسخ الاحتياطية الموثوقة والمحمية تساعد على استعادة البيانات بعد تأمين بيئة التشغيل."
      },
      sources: ["ransomware", "incident"],
      video: "CISA StopRansomware guide backups incident response"
    },

    backup: {
      title: "النسخ الاحتياطي والاستعادة",
      explanation: "النسخ الاحتياطي هو نسخة يمكن استعادة البيانات منها عند الحذف أو الأعطال أو الهجمات. لا يكفي وجود النسخة؛ يجب اختبار الاستعادة وحماية النسخ.",
      learn: [
        "تحديد البيانات التي يجب نسخها.",
        "حماية النسخ من التعديل غير المصرح.",
        "اختبار الاستعادة دوريًا."
      ],
      practice: [
        "حدد ملفات لا يمكن تعويضها.",
        "احتفظ بنسخة منفصلة عن الجهاز الأساسي.",
        "اختبر استعادة ملف صغير."
      ],
      warning: "مزامنة الملفات وحدها ليست بديلًا كاملًا عن النسخ الاحتياطي، فقد تنتقل التغييرات الضارة إلى النسخة المتزامنة.",
      quiz: {
        q: "كيف تتأكد أن النسخة الاحتياطية مفيدة؟",
        options: [
          "بالنظر إلى اسم المجلد",
          "باختبار الاستعادة والتحقق من الملفات",
          "بتركها دون مراجعة"
        ],
        answer: 1,
        explain: "اختبار الاستعادة يكشف مشكلات الوصول أو التلف أو نقص البيانات."
      },
      sources: ["ransomware", "nist"],
      video: "CISA backup recovery ransomware best practices"
    },

    social: {
      title: "أمان مواقع التواصل",
      explanation: "قد تُستخدم حسابات التواصل لانتحال شخصيتك أو خداع أصدقائك. الحماية تشمل تأمين جلسات الدخول، ومراجعة التطبيقات المتصلة، والتحقق من الطلبات غير المعتادة.",
      learn: [
        "تأمين الحساب والجلسات.",
        "التحقق من طلبات المال والمعلومات.",
        "الإبلاغ عن الانتحال."
      ],
      practice: [
        "راجع الجلسات النشطة.",
        "اضبط من يستطيع رؤية منشوراتك أو مراسلتك.",
        "تعرف إلى طريقة الإبلاغ الرسمية للمنصة."
      ],
      warning: "قد يكون حساب صديقك مخترقًا؛ تحقق من الطلبات المالية عبر وسيلة مستقلة.",
      quiz: {
        q: "صديقك طلب تحويلًا عاجلًا عبر حسابه. ماذا تفعل؟",
        options: [
          "التحويل مباشرة",
          "التأكد منه عبر وسيلة مستقلة",
          "إرسال بيانات بطاقتك"
        ],
        answer: 1,
        explain: "التواصل المستقل يساعد على التأكد من هوية صاحب الطلب."
      },
      sources: ["cisa", "phishing"],
      video: "CISA social media account security impersonation scams"
    },

    email: {
      title: "أمان البريد الإلكتروني",
      explanation: "البريد الإلكتروني غالبًا وسيلة لاستعادة الحسابات واستقبال بيانات حساسة. لذلك يجب تأمين الدخول ومراجعة الجلسات وقواعد تحويل الرسائل والتطبيقات المتصلة.",
      learn: [
        "تأمين الدخول والاسترداد.",
        "فحص المرسل والمرفقات.",
        "مراجعة قواعد التحويل والتطبيقات المتصلة."
      ],
      practice: [
        "راجع وسائل استرداد البريد.",
        "تحقق من قواعد التحويل والمرشحات.",
        "راجع تسجيلات الدخول إذا كانت الخدمة تعرضها."
      ],
      warning: "تغيير كلمة المرور وحده قد لا يكفي إذا بقيت جلسة أو تطبيق مشبوه قادرًا على الوصول إلى البريد.",
      quiz: {
        q: "بعد الاشتباه باختراق البريد، ماذا تراجع بالإضافة إلى كلمة المرور؟",
        options: [
          "قواعد التحويل والجلسات والتطبيقات المتصلة",
          "لون صورة الحساب",
          "حجم صندوق الوارد فقط"
        ],
        answer: 0,
        explain: "قد يحتفظ المهاجم بوصول بديل عبر جلسة أو تطبيق أو قاعدة تحويل."
      },
      sources: ["cisa", "phishing"],
      video: "CISA email account security phishing protection"
    },

    browser: {
      title: "أمان المتصفح",
      explanation: "المتصفح يتعامل مع مواقع وإضافات وملفات وصلاحيات. التحديثات ومراجعة الإضافات وأذونات المواقع تساعد على تقليل المخاطر.",
      learn: [
        "إدارة الإضافات والصلاحيات.",
        "تحديث المتصفح.",
        "فهم حدود التصفح الخاص."
      ],
      practice: [
        "راجع الإضافات واحذف غير الضروري.",
        "راجع المواقع التي لديها إذن الإشعارات.",
        "تأكد أن المتصفح يتلقى التحديثات."
      ],
      warning: "التصفح الخاص لا يخفي نشاطك تلقائيًا عن المواقع أو الشبكات أو جهات العمل.",
      quiz: {
        q: "ماذا لا يضمن وضع التصفح الخاص؟",
        options: [
          "تقليل بعض آثار التصفح المحلية",
          "إخفاء النشاط عن كل المواقع والشبكات",
          "فتح جلسة تصفح محلية جديدة"
        ],
        answer: 1,
        explain: "التصفح الخاص ليس أداة إخفاء هوية كاملة ولا يمنع كل أنواع التتبع."
      },
      sources: ["cisa", "nist"],
      video: "browser security privacy permissions official guidance"
    },

    mobile: {
      title: "أمان الهواتف",
      explanation: "الهاتف يحتوي على البريد والرسائل والصور ورموز التحقق. الحماية تعتمد على قفل الشاشة، والتحديثات، ومصدر التطبيقات، وميزات العثور على الجهاز.",
      learn: [
        "تأمين قفل الشاشة.",
        "مراجعة التطبيقات والأذونات.",
        "الاستعداد لفقدان الهاتف أو سرقته."
      ],
      practice: [
        "راجع تحديثات الهاتف.",
        "احذف التطبيقات غير المستخدمة.",
        "تعرف إلى طريقة قفل الجهاز عن بُعد."
      ],
      warning: "لا تثبّت ملفات APK من روابط مجهولة ولا تمنح التطبيقات الحساسة صلاحيات لا تحتاجها.",
      quiz: {
        q: "ما الأفضل قبل فقدان الهاتف؟",
        options: [
          "تفعيل العثور على الجهاز وخيارات القفل مسبقًا",
          "تعطيل قفل الشاشة",
          "حفظ كلمات المرور في ملاحظة عامة"
        ],
        answer: 0,
        explain: "التجهيز المسبق يسمح بقفل الجهاز أو مسحه عند الحاجة."
      },
      sources: ["cisa", "nist"],
      video: "mobile phone security updates app permissions official"
    },

    cloud: {
      title: "أمان التخزين السحابي",
      explanation: "الأمن السحابي يشمل حماية الهوية والصلاحيات والتخزين والسجلات والإعدادات. من المخاطر الشائعة مشاركة ملفات للعامة دون قصد أو منح صلاحيات أكبر من اللازم.",
      learn: [
        "مراجعة صلاحيات الحسابات.",
        "تقليل المشاركة العامة.",
        "تفعيل السجلات والنسخ الاحتياطية."
      ],
      practice: [
        "راجع صلاحيات مشروع أو حساب تملكه.",
        "أوقف روابط المشاركة العامة غير اللازمة.",
        "تعرف إلى كيفية مراجعة سجل الدخول."
      ],
      warning: "لا تفترض أن مزود السحابة يتولى كل جوانب الحماية؛ إعدادات الحساب والبيانات والصلاحيات مهمة أيضًا.",
      quiz: {
        q: "ما أحد الإجراءات المهمة لحماية حساب سحابي؟",
        options: [
          "منح الجميع صلاحيات المدير",
          "مراجعة الصلاحيات وتفعيل MFA للحسابات الحساسة",
          "تعطيل السجلات"
        ],
        answer: 1,
        explain: "تقليل الصلاحيات وتعزيز المصادقة يقللان أثر سرقة الحسابات."
      },
      sources: ["nist", "cisa"],
      video: "NIST cloud security identity access management basics"
    },

    ai: {
      title: "الذكاء الاصطناعي والتهديدات الرقمية",
      explanation: "قد تُستخدم أدوات الذكاء الاصطناعي لتقليد الصوت والصورة أو توسيع الاحتيال، كما يمكن أن تساعد في الدفاع. يجب التحقق من المصادر وعدم اعتبار مخرجات AI دليلًا قاطعًا.",
      learn: [
        "مخاطر التزييف والانتحال.",
        "التحقق من الطلبات الحساسة.",
        "حماية البيانات عند استخدام أدوات AI."
      ],
      practice: [
        "اتفق مع العائلة على وسيلة تحقق للطلبات المالية الطارئة.",
        "راجع سياسة خصوصية أداة AI قبل إدخال معلومات حساسة.",
        "تحقق من إجابة AI بمصدر رسمي."
      ],
      warning: "لا تعتمد على أداة كشف التزييف وحدها، ولا ترفع الأسرار أو بيانات العملاء إلى خدمة غير معتمدة.",
      quiz: {
        q: "وصل طلب مالي بصوت يبدو أنه صوت قريب لك. ماذا تفعل؟",
        options: [
          "إرسال المال فورًا",
          "الاتصال به عبر وسيلة مستقلة معروفة",
          "إرسال رمز التحقق"
        ],
        answer: 1,
        explain: "التحقق عبر قناة مستقلة يقلل خطر انتحال الصوت أو الحساب."
      },
      sources: ["ai", "cisa"],
      video: "NIST AI risk management framework synthetic media security"
    },

    downloads: {
      title: "التنزيلات والملفات",
      explanation: "الملفات قد تحتوي على برامج ضارة أو مستندات تستغل ثغرات. المصدر والتوقيع والتحديثات أكثر أهمية من اسم الملف أو شكله.",
      learn: [
        "اختيار مصادر موثوقة.",
        "فهم التوقيعات الرقمية وقيم التجزئة.",
        "التعامل مع المرفقات بحذر."
      ],
      practice: [
        "تحقق من نطاق موقع التنزيل.",
        "راجع إعدادات حماية الملفات.",
        "تعلم التحقق من التوقيع الرقمي عندما يوفره المطور."
      ],
      warning: "لا تشغّل ملفًا مشبوهًا ولا تعطّل الحماية لتجاوزه.",
      quiz: {
        q: "من أين الأفضل تنزيل برنامج؟",
        options: [
          "من الموقع الرسمي أو متجر موثوق",
          "من رابط مجهول",
          "من مرفق غير متوقع"
        ],
        answer: 0,
        explain: "المصدر الرسمي يقلل احتمال تنزيل نسخة معدلة أو خبيثة."
      },
      sources: ["cisa", "ransomware"],
      video: "CISA safe downloads software verification digital signatures"
    },

    publicwifi: {
      title: "استخدام الشبكات العامة",
      explanation: "قد تكون شبكات المقاهي والفنادق حقيقية أو مزيفة، وقد تختلف طريقة إدارتها وحمايتها. احذر شبكات غير معروفة والبوابات التي تطلب معلومات غير منطقية.",
      learn: [
        "التحقق من اسم الشبكة.",
        "تجنب تجاوز تحذيرات الشهادات.",
        "فهم حدود VPN وHTTPS."
      ],
      practice: [
        "تحقق من اسم الشبكة مع الجهة الرسمية.",
        "عطّل الاتصال التلقائي بالشبكات العامة.",
        "افصل الاتصال عند انتهاء الحاجة."
      ],
      warning: "VPN لا يمنع التصيّد أو البرامج الخبيثة بحد ذاته، ولا يبرر تجاهل تحذيرات الشهادات.",
      quiz: {
        q: "هل يمنع VPN كل أنواع الاحتيال الإلكتروني؟",
        options: [
          "نعم دائمًا",
          "لا؛ لا يمنع التصيّد والبرمجيات الخبيثة بحد ذاته",
          "فقط على الشبكات المفتوحة"
        ],
        answer: 1,
        explain: "VPN أداة واحدة ضمن مجموعة ضوابط أمنية."
      },
      sources: ["cisa", "nist"],
      video: "public Wi-Fi security VPN HTTPS guidance"
    },

    network: {
      title: "أساسيات الشبكات",
      explanation: "فهم IP وDNS والمنافذ والبروتوكولات والجدران النارية يساعد على تفسير الاتصال واكتشاف الإعدادات غير الضرورية.",
      learn: [
        "وظيفة IP وDNS.",
        "دور المنافذ والخدمات.",
        "تقسيم الشبكة وقواعد الجدار الناري."
      ],
      practice: [
        "اقرأ إعدادات الشبكة في جهاز تملكه.",
        "ارسم خريطة مبسطة لشبكتك المنزلية.",
        "تعرّف إلى الخدمات التي يحتاجها جهازك."
      ],
      warning: "لا تفحص شبكات أو عناوين لا تملكها ولا تملك تصريحًا واضحًا لاختبارها.",
      quiz: {
        q: "ما وظيفة DNS الأساسية؟",
        options: [
          "تشفير ملفات الجهاز",
          "المساعدة على ربط أسماء النطاقات بعناوينها",
          "إنشاء نسخ احتياطية"
        ],
        answer: 1,
        explain: "يساعد DNS على العثور على العنوان المرتبط باسم النطاق."
      },
      sources: ["nist", "cisa"],
      video: "networking fundamentals DNS IP firewall cybersecurity"
    },

    websecurity: {
      title: "أمان المواقع الإلكترونية",
      explanation: "أمن الويب يحمي الحسابات والبيانات والخدمات من الوصول غير المصرح به والاستغلال. يجب تطبيق التحقق من البيانات والصلاحيات على الخادم، واستخدام ممارسات تطوير آمنة.",
      learn: [
        "التحكم بالوصول.",
        "تقليل مخاطر حقن المدخلات.",
        "حماية الجلسات والإعدادات."
      ],
      practice: [
        "راجع OWASP Top 10:2025.",
        "تدرّب داخل تطبيق محلي أو مختبر مصرح به.",
        "اكتب قائمة تحقق لتسجيل الدخول والصلاحيات."
      ],
      warning: "HTTPS يحمي الاتصال أثناء النقل، لكنه لا يجعل التطبيق آمنًا تلقائيًا.",
      quiz: {
        q: "أين يجب التحقق من صلاحية الوصول إلى بيانات خاصة؟",
        options: [
          "في واجهة المستخدم فقط",
          "على الخادم عند الطلب",
          "في لون الزر"
        ],
        answer: 1,
        explain: "ضوابط الخادم تحمي البيانات حتى لو تجاوز المستخدم الواجهة."
      },
      sources: ["owasp", "cheatSheets"],
      video: "OWASP Top 10 2025 web application security"
    },

    coding: {
      title: "البرمجة الآمنة",
      explanation: "البرمجة الآمنة تحمي المدخلات والبيانات والأسرار والصلاحيات، وتستخدم مكتبات موثوقة واختبارات تكشف الحالات غير المتوقعة.",
      learn: [
        "التحقق من مدخلات المستخدم.",
        "حماية مفاتيح API والأسرار.",
        "تقليل الصلاحيات وتحديث الاعتماديات."
      ],
      practice: [
        "ابحث في مشروع تملكه عن أسرار مكتوبة مباشرة في الكود.",
        "راجع اعتماديات المشروع وتحديثاتها.",
        "اختبر أن المستخدم لا يستطيع قراءة بيانات مستخدم آخر."
      ],
      warning: "لا تضع مفتاح API سريًا في كود الواجهة الأمامية أو مستودع عام. إذا تسرب، أبطله وولّد بديلًا.",
      quiz: {
        q: "أين يجب حفظ مفتاح API السري؟",
        options: [
          "في كود الواجهة الأمامية العام",
          "في خدمة خلفية مع ضوابط وصول",
          "في عنوان الصفحة"
        ],
        answer: 1,
        explain: "الأسرار في كود المتصفح يمكن للمستخدمين استخراجها."
      },
      sources: ["owasp", "cheatSheets"],
      video: "OWASP secure coding practices cheat sheets"
    },

    logs: {
      title: "السجلات والمراقبة الأمنية",
      explanation: "السجلات تسجل أحداث الدخول والتغييرات وأخطاء الخدمات. تحليلها يساعد على فهم النشاط غير المعتاد، لكن كل تنبيه يحتاج إلى تفسير ومقارنة بالسياق.",
      learn: [
        "تحديد الأحداث التي تستحق التسجيل.",
        "ربط الأحداث بالتوقيت والمصدر والحساب.",
        "حماية السجلات من التعديل."
      ],
      practice: [
        "حلل عينة سجلات تدريبية.",
        "اكتب تسلسلًا زمنيًا لحادث افتراضي.",
        "تحقق من عدم تسجيل كلمات المرور أو رموز الجلسات."
      ],
      warning: "لا تعتبر كل تنبيه هجومًا مؤكدًا ولا تحذف السجلات قبل تقييم الحاجة إلى الأدلة.",
      quiz: {
        q: "ما الممارسة المناسبة في تصميم السجلات؟",
        options: [
          "تسجيل كلمات المرور كاملة",
          "تسجيل الأحداث اللازمة وحماية السجلات",
          "السماح للجميع بتعديلها"
        ],
        answer: 1,
        explain: "السجلات المفيدة تكون محمية ولا تكشف أسرارًا غير لازمة."
      },
      sources: ["incident", "nist"],
      video: "NIST security logging monitoring incident response"
    },

    encryption: {
      title: "التشفير والمفاتيح",
      explanation: "التشفير يحمي سرية البيانات باستخدام مفتاح مناسب. أما التجزئة فتهدف إلى إنتاج قيمة تحقق، والترميز مثل Base64 ليس تشفيرًا.",
      learn: [
        "الفرق بين التشفير والتجزئة والترميز.",
        "أهمية إدارة المفاتيح.",
        "استخدام مكتبات معيارية موثوقة."
      ],
      practice: [
        "حدد البيانات التي تحتاج إلى حماية أثناء النقل أو التخزين.",
        "تعلّم الفرق بين التجزئة وBase64.",
        "خطط لحفظ مفتاح الاسترداد في مكان منفصل وآمن."
      ],
      warning: "لا تصمم خوارزمية تشفير خاصة بك ولا تضع مفتاح التشفير بجانب البيانات المشفرة دون حماية.",
      quiz: {
        q: "هل Base64 خوارزمية تشفير؟",
        options: [
          "نعم، تحتاج مفتاحًا سريًا",
          "لا، هو ترميز يمكن فكّه دون مفتاح",
          "هو بديل عن HTTPS"
        ],
        answer: 1,
        explain: "Base64 طريقة تمثيل للبيانات، وليست وسيلة لإخفاء محتواها."
      },
      sources: ["crypto", "cheatSheets"],
      video: "NIST cryptographic standards encryption hashing key management"
    },

    payments: {
      title: "أمان التسوق والدفع الإلكتروني",
      explanation: "الاحتيال المالي الرقمي يستغل المتاجر المزيفة والرسائل المنتحلة وطلبات التحويل العاجلة. التحقق من الجهة وقناة الدفع ومراجعة المعاملات خطوات أساسية.",
      learn: [
        "التحقق من المتجر والجهة المستقبلة.",
        "حماية رموز التحقق وبيانات الدفع.",
        "الإبلاغ عن المعاملات غير المعروفة."
      ],
      practice: [
        "احفظ رقم الاتصال الرسمي للبنك من مصدر موثوق.",
        "فعّل إشعارات المعاملات إذا كانت متاحة.",
        "راجع سجل المعاملات بانتظام."
      ],
      warning: "لا تشارك PIN البطاقة أو رمز تحقق لمعاملة لم تبدأها بنفسك.",
      quiz: {
        q: "طلب متصل رمز تحقق لمعاملة لم تبدأها. ما الأفضل؟",
        options: [
          "إعطاؤه الرمز لتوقيف العملية",
          "عدم مشاركة الرمز والتواصل مع البنك رسميًا",
          "إرسال صورة البطاقة"
        ],
        answer: 1,
        explain: "تواصل مع المؤسسة عبر قناة رسمية مستقلة، ولا تشارك رمز التحقق مع متصل غير موثوق."
      },
      sources: ["phishing", "cisa"],
      video: "FTC online payment scams protect financial accounts"
    },

    iot: {
      title: "أمان الأجهزة الذكية",
      explanation: "الكاميرات والتلفزيونات والأجهزة الذكية متصلة بالشبكة وقد تتأثر ببيانات دخول افتراضية أو تحديثات مفقودة أو خدمات بعيدة غير ضرورية.",
      learn: [
        "تغيير بيانات الدخول الافتراضية.",
        "تحديث البرنامج الداخلي.",
        "تقييد الوصول عن بُعد."
      ],
      practice: [
        "راجع إعدادات جهاز ذكي تملكه.",
        "غيّر بيانات الدخول الافتراضية إن وجدت.",
        "راجع من يستطيع الوصول إلى الكاميرات أو التسجيلات."
      ],
      warning: "لا تفتح واجهة إدارة الجهاز للإنترنت لمجرد تسهيل الوصول، ولا تتجاهل توقف التحديثات.",
      quiz: {
        q: "ما أحد أهم إجراءات تأمين جهاز ذكي؟",
        options: [
          "ترك كلمة المرور الافتراضية",
          "تغيير بيانات الدخول وتثبيت التحديثات",
          "تفعيل كل الخدمات البعيدة"
        ],
        answer: 1,
        explain: "تغيير بيانات الدخول والتحديثات يقللان مخاطر شائعة في الأجهزة المتصلة."
      },
      sources: ["iot", "nist"],
      video: "NIST IoT cybersecurity device security guidance"
    },

    identity: {
      title: "حماية الهوية الرقمية",
      explanation: "الهوية الرقمية تشمل البيانات والحسابات التي تربط النشاط الإلكتروني بشخص ما. قد تُستخدم وثيقة أو صورة أو حساب منتحل لارتكاب احتيال باسم صاحبها.",
      learn: [
        "تقليل كشف معلومات الهوية.",
        "التحقق من طلبات مشاركة الوثائق.",
        "الإبلاغ عن انتحال الهوية."
      ],
      practice: [
        "راجع المعلومات الشخصية الظاهرة في ملفاتك العامة.",
        "تأكد من أن وسائل استرداد حساباتك محدثة.",
        "اعرف قناة الإبلاغ الرسمية للجهات المهمة."
      ],
      warning: "لا ترسل صورة هويتك لجهة لم تتحقق من هويتها والغرض من جمع الوثيقة.",
      quiz: {
        q: "طلبت جهة غير متحقق منها صورة هويتك برسالة. ماذا تفعل؟",
        options: [
          "إرسالها فورًا",
          "التحقق من الجهة والغرض عبر قناة رسمية",
          "نشرها في حساب عام"
        ],
        answer: 1,
        explain: "التحقق من الجهة والغرض وقناة الإرسال يقلل مخاطر إساءة الاستخدام."
      },
      sources: ["cisa", "nist"],
      video: "NIST digital identity guidelines identity theft protection"
    },

    access: {
      title: "الصلاحيات والتحكم بالوصول",
      explanation: "المصادقة تتحقق من هوية المستخدم، أما التفويض فيحدد ما يُسمح له بفعله. يجب أن تُطبق الصلاحيات على المورد المطلوب وليس على واجهة العرض فقط.",
      learn: [
        "التمييز بين المصادقة والتفويض.",
        "تطبيق مبدأ أقل صلاحية.",
        "إلغاء الصلاحيات غير اللازمة."
      ],
      practice: [
        "ارسم خريطة لصلاحيات مستخدمين في مشروع تجريبي.",
        "راجع التطبيقات المتصلة بحسابك.",
        "اختبر أن المستخدم لا يستطيع الوصول إلى بيانات حساب آخر."
      ],
      warning: "لا تمنح الجميع صلاحيات المسؤول لتسهيل العمل، ولا تعتبر نجاح تسجيل الدخول إذنًا لكل عملية.",
      quiz: {
        q: "ماذا يعني مبدأ أقل صلاحية؟",
        options: [
          "إعطاء الجميع صلاحيات كاملة",
          "منح الحد الأدنى اللازم لأداء المهمة",
          "منع جميع المستخدمين من الوصول"
        ],
        answer: 1,
        explain: "تقليل الصلاحيات يقلل أثر الخطأ أو إساءة الاستخدام أو اختراق الحساب."
      },
      sources: ["owasp", "cheatSheets"],
      video: "OWASP broken access control least privilege authorization"
    },

    vulnerability: {
      title: "الثغرات الأمنية والتحديثات",
      explanation: "الثغرة ضعف قد يؤثر على سرية النظام أو سلامته أو توافره. إدارتها تتطلب جرد الأصول ومتابعة التنبيهات وتحديد الأولوية وإصلاح المشكلة والتحقق من الحل.",
      learn: [
        "معرفة البرامج والإصدارات الموجودة.",
        "تقييم أولوية الإصلاح.",
        "التحقق من نجاح التحديث."
      ],
      practice: [
        "أنشئ قائمة بالبرامج وإصداراتها على جهاز تملكه.",
        "تعرف على مكان إشعارات الأمان الرسمية للمورد.",
        "وثّق ثغرة وإصلاحها في بيئة تدريبية."
      ],
      warning: "لا تختبر ثغرة على موقع عام أو جهاز لا تملكه دون تصريح واضح ونطاق محدد.",
      quiz: {
        q: "ما بداية إدارة الثغرات بصورة منظمة؟",
        options: [
          "التحديث عشوائيًا",
          "جرد الأصول والإصدارات وتحديد الأولويات",
          "إيقاف السجلات"
        ],
        answer: 1,
        explain: "الجرد والتقييم يساعدان على اختيار الإصلاحات المناسبة لمستوى الخطر."
      },
      sources: ["nist", "owasp"],
      video: "CISA vulnerability management patching guidance"
    },

    careers: {
      title: "مسارات العمل في الأمن السيبراني",
      explanation: "الأمن السيبراني مجموعة من التخصصات، منها المراقبة والدفاع، واختبار الاختراق، وأمن التطبيقات، والسحابة، والتحقيق الرقمي، وإدارة المخاطر.",
      learn: [
        "فهم اختلاف المسارات والمهام اليومية.",
        "ربط المهارات بالوظيفة المطلوبة.",
        "بناء مشاريع موثقة لملف الأعمال."
      ],
      practice: [
        "اختر مسارًا أوليًا ودوّن المهارات التي يحتاجها.",
        "أنجز مشروعًا قانونيًا مناسبًا للمسار.",
        "وثّق السؤال والمنهجية والنتيجة وحدود المشروع."
      ],
      warning: "لا تعتمد على اسم شهادة وحده، ولا تدّعِ خبرة لم تكتسبها فعليًا.",
      quiz: {
        q: "ما أفضل طريقة للبدء في مسار مهني؟",
        options: [
          "تعلم كل التخصصات دفعة واحدة",
          "اختيار مسار وتنفيذ مشروع مرتبط به",
          "شراء شهادة دون دراسة محتواها"
        ],
        answer: 1,
        explain: "فهم طبيعة العمل وبناء مهارات ومشاريع مرتبطة به يساعد على اتخاذ قرار عملي."
      },
      sources: ["nice", "nist"],
      video: "NIST NICE cybersecurity career work roles framework"
    },

    ethics: {
      title: "الأخلاقيات والقانون",
      explanation: "الاختبار الأمني الأخلاقي يتطلب تفويضًا واضحًا ونطاقًا محددًا واحترامًا للبيانات والخدمات. اكتشاف ضعف تقني لا يمنح صاحبه تلقائيًا إذنًا لاختباره.",
      learn: [
        "التمييز بين الاختبار المصرح به وغير المصرح.",
        "فهم النطاق وقواعد الاشتباك.",
        "توثيق النتائج والإبلاغ المسؤول."
      ],
      practice: [
        "اكتب نموذج نطاق لمختبر افتراضي.",
        "أنشئ تقريرًا لمشكلة في تطبيق تدريبي.",
        "راجع قواعد البرنامج قبل أي اختبار فعلي."
      ],
      warning: "لا تفحص أنظمة أو حسابات الآخرين دون إذن صريح، ولا تنسخ بيانات خاصة لإثبات وجود مشكلة.",
      quiz: {
        q: "ما الشرط الأساسي قبل اختبار نظام ليس ملكك؟",
        options: [
          "أن يكون النظام متصلًا بالإنترنت",
          "وجود تصريح واضح ونطاق محدد",
          "أن يكون الاختبار ممتعًا"
        ],
        answer: 1,
        explain: "التصريح والنطاق الواضحان ضروريان لاختبار مسؤول وآمن."
      },
      sources: ["nist", "nice"],
      video: "NIST cybersecurity ethics authorized security testing responsible disclosure"
    }
  };

  const extraTitles = {
    publicwifi: "الشبكات العامة",
    websecurity: "أمان المواقع الإلكترونية",
    coding: "البرمجة الآمنة",
    logs: "السجلات والمراقبة",
    encryption: "التشفير والمفاتيح",
    iot: "أمان الأجهزة الذكية",
    identity: "حماية الهوية الرقمية",
    access: "الصلاحيات والتحكم بالوصول",
    vulnerability: "الثغرات والتحديثات",
    careers: "مسارات العمل في الأمن السيبراني",
    ethics: "الأخلاقيات والقانون"
  };

  const knownCards = Array.from(
    topicGrid.querySelectorAll("[data-cyber-topic]")
  );

  const getCard = (id) =>
    knownCards.find((card) => card.dataset.cyberTopic === id) || null;

  const topicIds = Array.from(
    new Set(knownCards.map((card) => card.dataset.cyberTopic))
  ).filter((id) => Boolean(LESSONS[id]));

  const pathForTopic = new Map();

  PATHS.forEach((path) => {
    path.topics.forEach((id) => {
      if (!pathForTopic.has(id)) pathForTopic.set(id, path.id);
    });
  });

  const assigned = new Set();

  PATHS.forEach((path) => {
    path.topics = path.topics.filter((id) => {
      if (!topicIds.includes(id) || assigned.has(id)) return false;
      assigned.add(id);
      return true;
    });
  });

  topicIds.forEach((id) => {
    if (!assigned.has(id)) {
      PATHS[0].topics.push(id);
      pathForTopic.set(id, PATHS[0].id);
    }
  });

  function loadProgress() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      return new Set(
        Array.isArray(saved) ? saved.filter((id) => topicIds.includes(id)) : []
      );
    } catch {
      return new Set();
    }
  }

  const completed = loadProgress();

  let activePathId = PATHS[0].id;
  let searchText = "";
  let completionFilter = "all";
  let currentLessonId = null;
  let returnTarget = null;

  function saveProgress() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(completed)));
      return true;
    } catch (error) {
      console.warn("Cyber Academy progress could not be saved.", error);
      return false;
    }
  }

  function normalize(value) {
    return String(value || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[\u064B-\u065F\u0670\u06D6-\u06ED]/g, "")
      .replace(/[أإآ]/g, "ا")
      .replace(/ى/g, "ي")
      .replace(/[^\p{L}\p{N}+#.]+/gu, " ")
      .trim()
      .replace(/\s+/g, " ");
  }

  function createElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  }

  function getLessonMeta(id) {
    const card = getCard(id);
    return {
      id,
      title: extraTitles[id] || card?.querySelector("strong")?.textContent.trim() || id,
      description:
        card?.querySelector("span:nth-last-child(2)")?.textContent.trim() ||
        "درس تعليمي في الأمن السيبراني."
    };
  }

  function getProgress(path) {
    const total = path.topics.length;
    const done = path.topics.filter((id) => completed.has(id)).length;

    return {
      total,
      done,
      percent: total ? Math.round((done / total) * 100) : 0
    };
  }

  /* Compact card grid: eight columns on wide screens. */
  const layoutStyle = document.createElement("style");
  layoutStyle.id = "techPathCyberCompactStyles";
  layoutStyle.textContent = `
    #cyberLearning .cyber-learning-grid {
      display:grid !important;
      grid-template-columns:repeat(8,minmax(0,1fr)) !important;
      gap:8px !important;
      align-items:stretch !important;
    }
    #cyberLearning .cyber-learning-grid .cyber-learning-card {
      min-width:0 !important;
      min-height:105px !important;
      padding:8px !important;
      gap:5px !important;
      border-radius:6px !important;
      align-items:center !important;
      justify-content:flex-start !important;
      text-align:center !important;
      overflow-wrap:anywhere;
    }
    #cyberLearning .cyber-learning-grid .cyber-card-number {
      font-size:8px !important;
      line-height:1.35 !important;
      letter-spacing:0 !important;
      text-align:center !important;
    }
    #cyberLearning .cyber-learning-grid .cyber-card-icon {
      font-size:14px !important;
      line-height:1.2 !important;
    }
    #cyberLearning .cyber-learning-grid .cyber-learning-card strong {
      font-size:11px !important;
      line-height:1.6 !important;
      text-align:center !important;
    }
    #cyberLearning .cyber-learning-grid .cyber-learning-card > span:nth-last-child(2) {
      display:none !important;
    }
    #cyberLearning .cyber-learning-grid .cyber-card-action {
      margin-top:auto !important;
      padding-top:5px !important;
      border-top:1px solid rgba(75,255,127,.14) !important;
      font-size:8px !important;
      line-height:1.3 !important;
      text-align:center !important;
      width:100%;
    }
    @media(max-width:1250px) {
      #cyberLearning .cyber-learning-grid {grid-template-columns:repeat(6,minmax(0,1fr)) !important;}
    }
    @media(max-width:950px) {
      #cyberLearning .cyber-learning-grid {grid-template-columns:repeat(4,minmax(0,1fr)) !important;}
    }
    @media(max-width:600px) {
      #cyberLearning .cyber-learning-grid {grid-template-columns:repeat(3,minmax(0,1fr)) !important;}
      #cyberLearning .cyber-learning-grid .cyber-learning-card {min-height:98px !important;padding:7px !important;}
    }
    @media(max-width:380px) {
      #cyberLearning .cyber-learning-grid {grid-template-columns:repeat(2,minmax(0,1fr)) !important;}
    }
  `;

  document.head.appendChild(layoutStyle);

  /* Build the new academy. */
  const academy = document.createElement("section");
  academy.id = "cyberAcademy";
  academy.setAttribute("aria-labelledby", "cyberAcademyTitle");

  academy.innerHTML = `
    <header>
      <p class="academy-kicker">[ TECHPATH CYBER ACADEMY ]</p>
      <h2 id="cyberAcademyTitle">أكاديمية الأمن السيبراني <span>من الصفر إلى التخصص</span></h2>
      <p class="academy-intro">
        اختار مسارًا تعليميًا، وادرس الدروس بترتيب واضح. كل درس يفتح صفحة مستقلة
        فيها شرح، وخطوات عملية، واختبار قصير، ومراجع موثوقة.
      </p>
    </header>

    <div class="academy-stats">
      <div><span>المسارات</span><strong id="academyPathCount">05</strong></div>
      <div><span>الدروس الفريدة</span><strong id="academyLessonCount">29</strong></div>
      <div><span>الدروس المكتملة</span><strong id="academyDoneCount">00 / 29</strong></div>
      <div><span>التقدم الكلي</span><strong id="academyOverallPercent">0%</strong></div>
    </div>

    <div class="academy-section-heading">
      <h3>المسارات التعليمية</h3>
      <span>كل درس له مسار أساسي واحد</span>
    </div>

    <div class="academy-paths" id="academyPaths"></div>

    <section class="academy-course">
      <div class="academy-section-heading">
        <h3 id="academyCourseTitle">أساسيات الحماية الرقمية</h3>
        <span id="academyCourseMeta"></span>
      </div>

      <p id="academyCourseDescription" class="academy-course-description"></p>

      <div class="academy-progress-text">
        <span id="academyCourseProgressText"></span>
        <strong id="academyCourseProgressPercent">0%</strong>
      </div>

      <div class="academy-progress-track">
        <div id="academyCourseProgressFill"></div>
      </div>

      <div class="academy-toolbar">
        <input
          id="academyLessonSearch"
          type="search"
          placeholder="ابحث عن درس في هذا المسار..."
          aria-label="ابحث عن درس"
          autocomplete="off"
        >

        <select id="academyLessonFilter" aria-label="تصفية الدروس">
          <option value="all">كل الدروس</option>
          <option value="incomplete">غير المكتملة</option>
          <option value="complete">المكتملة</option>
        </select>
      </div>

      <div id="academyCourseLessons" class="academy-course-lessons"></div>
    </section>

    <p class="academy-note">
      يُحفظ التقدم في هذا المتصفح. المحتوى تعليمي، والمختبرات الأمنية
      يجب تنفيذها فقط على أنظمة تملكها أو لديك إذن واضح لاختبارها.
    </p>
  `;

  const academyStyle = document.createElement("style");
  academyStyle.id = "techPathCyberAcademyStyles";

  academyStyle.textContent = `
    #cyberAcademy {
      direction:rtl;
      text-align:right;
      margin:26px 0 30px;
      padding:clamp(15px,2.5vw,27px);
      border:1px solid rgba(75,255,127,.25);
      border-radius:9px;
      background:radial-gradient(ellipse at 100% 0%,rgba(31,130,55,.12),transparent 45%),rgba(2,14,6,.96);
      color:#dffff0;
      font-family:"Tajawal",Tahoma,Arial,sans-serif;
    }
    #cyberAcademy * {box-sizing:border-box;}
    #cyberAcademy .academy-kicker {
      margin:0 0 8px;
      color:#62fa8a;
      font:bold 10px Consolas,monospace;
      letter-spacing:1px;
      direction:ltr;
      text-align:left;
    }
    #cyberAcademy h2 {
      margin:0;
      color:#effff3;
      font-size:clamp(24px,3.7vw,36px);
      line-height:1.7;
    }
    #cyberAcademy h2 span {color:#4dff7d;}
    #cyberAcademy .academy-intro,
    #cyberAcademy .academy-course-description {
      color:#a8cbb1;
      font-size:14px;
      line-height:2;
    }
    #cyberAcademy .academy-stats {
      display:grid;
      grid-template-columns:repeat(4,minmax(0,1fr));
      gap:9px;
      margin:20px 0 26px;
    }
    #cyberAcademy .academy-stats > div {
      padding:12px;
      border:1px solid rgba(75,255,127,.18);
      border-radius:6px;
      background:rgba(6,31,13,.72);
    }
    #cyberAcademy .academy-stats span {
      display:block;
      color:#8fc49b;
      font-size:11px;
    }
    #cyberAcademy .academy-stats strong {
      display:block;
      margin-top:5px;
      color:#73ff96;
      font:bold 20px Consolas,monospace;
      direction:ltr;
      text-align:right;
    }
    #cyberAcademy .academy-section-heading {
      display:flex;
      justify-content:space-between;
      align-items:center;
      gap:10px;
      flex-wrap:wrap;
      margin:22px 0 12px;
    }
    #cyberAcademy .academy-section-heading h3 {
      margin:0;
      color:#e8ffed;
      font-size:20px;
    }
    #cyberAcademy .academy-section-heading > span {
      color:#8ab896;
      font-size:11px;
    }
    #cyberAcademy .academy-paths {
      display:grid;
      grid-template-columns:repeat(5,minmax(0,1fr));
      gap:10px;
    }
    #cyberAcademy .academy-path-card {
      display:flex;
      flex-direction:column;
      min-width:0;
      padding:13px;
      border:1px solid rgba(75,255,127,.2);
      border-radius:6px;
      background:rgba(5,26,11,.82);
    }
    #cyberAcademy .academy-path-card.is-active {
      border-color:#4dff7d;
      background:rgba(18,57,28,.9);
    }
    #cyberAcademy .academy-path-label {
      color:#63ed86;
      font:bold 9px Consolas,monospace;
      direction:ltr;
    }
    #cyberAcademy .academy-path-card h4 {
      margin:8px 0;
      color:#eaffee;
      font-size:14px;
      line-height:1.7;
    }
    #cyberAcademy .academy-path-card p {
      flex:1;
      margin:0 0 10px;
      color:#9cc5a7;
      font-size:11px;
      line-height:1.8;
    }
    #cyberAcademy .academy-path-card small {
      color:#84bb91;
      font-size:10px;
    }
    #cyberAcademy .academy-select-path {
      margin-top:10px;
      padding:8px 6px;
      border:1px solid rgba(75,255,127,.3);
      border-radius:4px;
      background:#0b2d13;
      color:#caffd5;
      font: bold 11px "Tajawal",Tahoma,Arial,sans-serif;
      cursor:pointer;
    }
    #cyberAcademy .academy-select-path:hover {background:#174b24;}
    #cyberAcademy .academy-course {
      margin-top:25px;
      padding:18px;
      border:1px solid rgba(75,255,127,.26);
      border-radius:7px;
      background:rgba(1,10,4,.72);
    }
    #cyberAcademy .academy-course-description {
      margin:8px 0 15px;
      font-size:13px;
    }
    #cyberAcademy .academy-progress-text {
      display:flex;
      justify-content:space-between;
      gap:10px;
      color:#8dcc9b;
      font-size:11px;
    }
    #cyberAcademy .academy-progress-text strong {
      color:#78ff98;
      font:bold 12px Consolas,monospace;
    }
    #cyberAcademy .academy-progress-track {
      height:6px;
      margin-top:8px;
      overflow:hidden;
      border-radius:99px;
      background:rgba(120,180,135,.16);
    }
    #cyberAcademy #academyCourseProgressFill {
      width:0;
      height:100%;
      background:linear-gradient(90deg,#28c95a,#84ff9d);
      transition:width .2s ease;
    }
    #cyberAcademy .academy-toolbar {
      display:grid;
      grid-template-columns:minmax(0,1fr) minmax(150px,210px);
      gap:9px;
      margin:18px 0 13px;
    }
    #cyberAcademy .academy-toolbar input,
    #cyberAcademy .academy-toolbar select {
      width:100%;
      min-width:0;
      min-height:42px;
      padding:9px 11px;
      border:1px solid rgba(75,255,127,.3);
      border-radius:5px;
      outline:none;
      background:#041008;
      color:#d8ffe1;
      font:13px "Tajawal",Tahoma,Arial,sans-serif;
    }
    #cyberAcademy .academy-toolbar input {direction:rtl;}
    #cyberAcademy .academy-course-lessons {
      display:grid;
      grid-template-columns:repeat(2,minmax(0,1fr));
      gap:9px;
    }
    #cyberAcademy .academy-lesson-item {
      display:flex;
      flex-direction:column;
      gap:9px;
      min-width:0;
      padding:13px;
      border:1px solid rgba(75,255,127,.16);
      border-radius:5px;
      background:rgba(7,26,12,.8);
    }
    #cyberAcademy .academy-lesson-item.is-complete {
      border-color:rgba(75,255,127,.48);
    }
    #cyberAcademy .academy-lesson-top {
      display:flex;
      align-items:flex-start;
      gap:9px;
    }
    #cyberAcademy .academy-lesson-number {
      display:grid;
      flex:0 0 30px;
      width:30px;
      height:30px;
      place-items:center;
      border:1px solid rgba(75,255,127,.25);
      border-radius:4px;
      color:#73ff96;
      font:bold 10px Consolas,monospace;
    }
    #cyberAcademy .academy-lesson-item h4 {
      margin:0;
      color:#e7ffed;
      font-size:14px;
      line-height:1.7;
    }
    #cyberAcademy .academy-lesson-item p {
      margin:3px 0 0;
      color:#9bc4a5;
      font-size:11px;
      line-height:1.8;
    }
    #cyberAcademy .academy-lesson-actions {
      display:flex;
      align-items:center;
      justify-content:space-between;
      flex-wrap:wrap;
      gap:9px;
      padding-top:8px;
      border-top:1px solid rgba(75,255,127,.12);
    }
    #cyberAcademy .academy-open-lesson {
      padding:8px 10px;
      border:1px solid rgba(75,255,127,.3);
      border-radius:4px;
      background:#0b2d13;
      color:#b6ffca;
      font:bold 11px "Tajawal",Tahoma,Arial,sans-serif;
      cursor:pointer;
    }
    #cyberAcademy .academy-open-lesson:hover {background:#174b24;}
    #cyberAcademy .academy-done-label {
      display:flex;
      align-items:center;
      gap:5px;
      color:#a5cdae;
      font-size:10px;
      cursor:pointer;
    }
    #cyberAcademy .academy-done-label input {
      width:15px;
      height:15px;
      margin:0;
      accent-color:#48ec78;
    }
    #cyberAcademy .academy-empty {
      grid-column:1/-1;
      padding:22px 12px;
      border:1px dashed rgba(75,255,127,.25);
      color:#9fc7aa;
      text-align:center;
      font-size:13px;
    }
    #cyberAcademy .academy-note {
      margin:18px 0 0;
      padding-top:13px;
      border-top:1px solid rgba(75,255,127,.14);
      color:#779d80;
      font-size:11px;
      line-height:1.9;
    }

    #cyberLessonDetailPage[hidden] {display:none !important;}
    #cyberLessonDetailPage {
      position:fixed;
      inset:0;
      z-index:10000000;
      overflow:auto;
      direction:rtl;
      text-align:right;
      background:radial-gradient(ellipse at 100% 0%,rgba(20,107,43,.22),transparent 45%),#020805;
      color:#e6ffeb;
      font-family:"Tajawal",Tahoma,Arial,sans-serif;
      padding:20px;
    }
    #cyberLessonDetailPage * {box-sizing:border-box;}
    #cyberLessonDetailPage .lesson-page-inner {
      width:min(1050px,100%);
      margin:0 auto;
      padding:clamp(16px,3vw,34px);
      border:1px solid rgba(75,255,127,.27);
      border-radius:9px;
      background:rgba(2,14,6,.96);
    }
    #cyberLessonDetailPage .lesson-page-top {
      display:flex;
      justify-content:space-between;
      align-items:center;
      flex-wrap:wrap;
      gap:12px;
      padding-bottom:14px;
      border-bottom:1px solid rgba(75,255,127,.18);
    }
    #cyberLessonDetailPage .lesson-page-kicker {
      color:#66f28a;
      font:10px Consolas,monospace;
      direction:ltr;
    }
    #cyberLessonDetailPage .lesson-back {
      padding:9px 12px;
      border:1px solid rgba(75,255,127,.3);
      border-radius:5px;
      background:#0b2d13;
      color:#caffd5;
      font:12px "Tajawal",Tahoma,Arial,sans-serif;
      cursor:pointer;
    }
    #cyberLessonDetailPage h1 {
      margin:20px 0 10px;
      color:#effff3;
      font-size:clamp(25px,4vw,38px);
      line-height:1.6;
    }
    #cyberLessonDetailPage .lesson-page-intro {
      color:#b1d6bb;
      font-size:15px;
      line-height:2.1;
    }
    #cyberLessonDetailPage .lesson-page-meta {
      display:flex;
      flex-wrap:wrap;
      gap:8px;
      margin:12px 0 20px;
    }
    #cyberLessonDetailPage .lesson-page-meta span {
      padding:5px 9px;
      border:1px solid rgba(75,255,127,.2);
      border-radius:20px;
      color:#9feab0;
      font-size:10px;
    }
    #cyberLessonDetailPage .lesson-detail-section {
      margin-top:24px;
      padding-top:18px;
      border-top:1px solid rgba(75,255,127,.15);
    }
    #cyberLessonDetailPage .lesson-detail-section h2 {
      margin:0 0 12px;
      color:#dfffe6;
      font-size:20px;
      line-height:1.7;
    }
    #cyberLessonDetailPage .lesson-detail-section p,
    #cyberLessonDetailPage .lesson-detail-section li {
      color:#b2d4bb;
      font-size:14px;
      line-height:2.1;
    }
    #cyberLessonDetailPage .lesson-detail-section ul,
    #cyberLessonDetailPage .lesson-detail-section ol {
      padding-right:23px;
    }
    #cyberLessonDetailPage .lesson-detail-section li {margin:5px 0;}
    #cyberLessonDetailPage .lesson-detail-section li::marker {color:#61ef85;}
    #cyberLessonDetailPage .lesson-concept {
      padding:13px;
      margin:10px 0;
      border-right:3px solid #4dff7d;
      background:rgba(18,57,28,.42);
    }
    #cyberLessonDetailPage .lesson-concept h3 {
      margin:0 0 5px;
      color:#dfffe6;
      font-size:15px;
    }
    #cyberLessonDetailPage .lesson-concept p {margin:0;}
    #cyberLessonDetailPage .lesson-video-box {
      display:flex;
      flex-direction:column;
      align-items:flex-start;
      gap:10px;
      padding:18px;
      border:1px solid rgba(75,255,127,.22);
      border-radius:6px;
      background:#041008;
    }
    #cyberLessonDetailPage .lesson-video-frame {
      width:100%;
      aspect-ratio:16/9;
      border:0;
      border-radius:5px;
      background:#000;
    }
    #cyberLessonDetailPage .lesson-video-link {
      display:inline-flex;
      padding:9px 12px;
      border:1px solid #4dff7d;
      border-radius:5px;
      background:#10351a;
      color:#caffd5;
      text-decoration:none;
      font-size:12px;
    }
    #cyberLessonDetailPage .lesson-video-caption {
      margin:0;
      color:#90b99b;
      font-size:12px;
      line-height:1.9;
    }
    #cyberLessonDetailPage .lesson-quiz {
      padding:17px;
      border:1px solid rgba(75,255,127,.22);
      border-radius:6px;
      background:rgba(5,26,11,.82);
    }
    #cyberLessonDetailPage .lesson-quiz-question {
      margin:0 0 13px;
      color:#e6ffeb;
      font-weight:700;
    }
    #cyberLessonDetailPage .lesson-quiz-answers {
      display:grid;
      gap:8px;
    }
    #cyberLessonDetailPage .lesson-quiz-answer {
      padding:10px 12px;
      border:1px solid rgba(75,255,127,.22);
      border-radius:5px;
      background:#041008;
      color:#c6fbd1;
      text-align:right;
      font:13px/1.8 "Tajawal",Tahoma,Arial,sans-serif;
      cursor:pointer;
    }
    #cyberLessonDetailPage .lesson-quiz-answer:disabled {cursor:default;opacity:.9;}
    #cyberLessonDetailPage .lesson-quiz-answer.is-right {
      border-color:#4dff7d;
      background:rgba(25,102,43,.5);
    }
    #cyberLessonDetailPage .lesson-quiz-answer.is-wrong {
      border-color:#ff8a8a;
      background:rgba(105,25,25,.35);
    }
    #cyberLessonDetailPage .lesson-quiz-feedback {
      min-height:22px;
      margin:12px 0 0;
      color:#9feab0;
      font-size:12px;
      line-height:1.9;
    }
    #cyberLessonDetailPage .lesson-quiz-caption {
      margin:0 0 7px;
      color:#90b99b;
      font-size:12px;
      line-height:1.9;
    }
    #cyberLessonDetailPage .lesson-quiz-start,
    #cyberLessonDetailPage .lesson-quiz-next,
    #cyberLessonDetailPage .lesson-quiz-restart {
      display:inline-flex;
      align-items:center;
      justify-content:center;
      margin-top:13px;
      padding:10px 15px;
      border:1px solid #4dff7d;
      border-radius:5px;
      background:#10351a;
      color:#dfffe6;
      font:700 13px/1.7 "Tajawal",Tahoma,Arial,sans-serif;
      cursor:pointer;
    }
    #cyberLessonDetailPage .lesson-quiz-start:hover,
    #cyberLessonDetailPage .lesson-quiz-next:hover,
    #cyberLessonDetailPage .lesson-quiz-restart:hover {background:#174d26;}
    #cyberLessonDetailPage .lesson-quiz-progress {
      margin:0 0 12px;
      color:#90ffac;
      font-size:12px;
      line-height:1.8;
    }
    #cyberLessonDetailPage .lesson-quiz-result {
      padding:13px;
      border:1px solid rgba(75,255,127,.25);
      border-radius:5px;
      background:rgba(18,57,28,.42);
    }
    #cyberLessonDetailPage .lesson-quiz-result h3 {margin:0 0 7px;color:#dfffe6;}
    #cyberLessonDetailPage .lesson-quiz-result p {margin:5px 0;line-height:1.9;}
    #cyberLessonDetailPage .lesson-quiz-review {margin-top:15px;}
    #cyberLessonDetailPage .lesson-quiz-review h3 {font-size:14px;color:#dfffe6;}
    #cyberLessonDetailPage .lesson-quiz-review details {
      margin:8px 0;padding:10px;border:1px solid rgba(75,255,127,.16);border-radius:5px;
      background:rgba(0,0,0,.16);
    }
    #cyberLessonDetailPage .lesson-quiz-review summary {cursor:pointer;color:#c6fbd1;line-height:1.8;}
    #cyberLessonDetailPage .lesson-quiz-review p {margin:7px 0;color:#a8d5b3;font-size:12px;line-height:1.9;}
    #cyberLessonDetailPage .lesson-sources {
      display:grid;
      gap:8px;
    }
    #cyberLessonDetailPage .lesson-sources a {
      color:#90ffac;
      text-decoration:underline;
      text-underline-offset:3px;
      font-size:13px;
      line-height:1.8;
      overflow-wrap:anywhere;
    }
    #cyberLessonDetailPage .lesson-complete-area {
      display:flex;
      align-items:center;
      justify-content:space-between;
      flex-wrap:wrap;
      gap:12px;
      margin-top:25px;
      padding:15px;
      border:1px solid rgba(75,255,127,.25);
      background:rgba(12,52,23,.45);
    }
    #cyberLessonDetailPage .lesson-complete-area label {
      display:flex;
      align-items:center;
      gap:8px;
      color:#caffd5;
      font-size:13px;
    }
    #cyberLessonDetailPage .lesson-complete-area input {
      width:17px;
      height:17px;
      accent-color:#48ec78;
    }
    #cyberLessonDetailPage .lesson-complete-status {
      color:#8fc99d;
      font-size:11px;
    }
    @media(max-width:1050px) {
      #cyberAcademy .academy-paths {grid-template-columns:repeat(3,minmax(0,1fr));}
    }
    @media(max-width:760px) {
      #cyberAcademy .academy-stats {grid-template-columns:repeat(2,minmax(0,1fr));}
      #cyberAcademy .academy-paths {grid-template-columns:repeat(2,minmax(0,1fr));}
      #cyberAcademy .academy-course-lessons {grid-template-columns:1fr;}
      #cyberAcademy .academy-toolbar {grid-template-columns:1fr;}
      #cyberLessonDetailPage {padding:8px;}
      #cyberLessonDetailPage .lesson-page-inner {padding:15px;}
    }
    @media(max-width:410px) {
      #cyberAcademy .academy-paths {grid-template-columns:1fr;}
    }
    @media(prefers-reduced-motion:reduce) {
      #cyberAcademy *,#cyberLessonDetailPage * {transition:none !important;}
    }
  `;

  document.head.appendChild(academyStyle);
  cyberLearning.insertBefore(academy, libraryHeading);

  /* ============================================================
     TECHPATH — INTERACTIVE DEFENSIVE CYBER CHALLENGE LAB
     Replaces the visible 29-topic tile library without removing
     its hidden source cards, which the independent courses use.
  ============================================================ */
  (() => {
    const learningHeading = cyberLearning.querySelector(".cyber-learning-heading");
    const mainHeading = learningHeading?.querySelector("h2");
    const headingDescription = learningHeading?.querySelector("p:last-child");

    if (mainHeading) mainHeading.innerHTML = 'THE <span>CYBER LAB</span>';
    if (headingDescription) {
      headingDescription.textContent = "تعلّم عبر المسارات التعليمية، ثم اختبر قراراتك في مواقف أمنية تفاعلية وآمنة.";
    }

    // Keep the legacy guide nodes in the DOM as data sources for existing lessons,
    // but remove them from the visible interface.
    libraryHeading.hidden = true;
    topicGrid.hidden = true;
    if (oldLessonPanel) oldLessonPanel.hidden = true;

    const labStyle = document.createElement("style");
    labStyle.id = "techPathCyberChallengeStyles";
    labStyle.textContent = `
      #cyberLearning .cyber-library-heading[hidden],
      #cyberLearning .cyber-learning-grid[hidden],
      #cyberLearning .cyber-lesson[hidden] { display:none !important; }
      #cyberChallengeLab { direction:rtl; text-align:right; margin:28px 0 32px; padding:clamp(16px,2.5vw,30px); border:1px solid rgba(75,255,127,.28); border-radius:10px; color:#e4ffeb; background:radial-gradient(ellipse at 100% 0%,rgba(31,130,55,.15),transparent 45%),linear-gradient(145deg,rgba(3,18,8,.98),rgba(1,9,4,.98)); font-family:"Tajawal",Tahoma,Arial,sans-serif; box-shadow:0 18px 50px rgba(0,0,0,.18); }
      #cyberChallengeLab * { box-sizing:border-box; }
      #cyberChallengeLab .tc-kicker { color:#65f38b; font:700 10px/1.8 Consolas,monospace; letter-spacing:1px; direction:ltr; text-align:left; }
      #cyberChallengeLab .tc-title { margin:9px 0 7px; color:#effff2; font:800 clamp(24px,3.4vw,36px)/1.55 "Tajawal",Tahoma,Arial,sans-serif; }
      #cyberChallengeLab .tc-title span { color:#4dff7d; }
      #cyberChallengeLab .tc-lead { max-width:820px; margin:0; color:#a9cdb1; font-size:14px; line-height:2; }
      #cyberChallengeLab .tc-stats { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:10px; margin:23px 0; }
      #cyberChallengeLab .tc-stat { min-width:0; padding:14px; border:1px solid rgba(75,255,127,.17); border-radius:7px; background:rgba(7,30,13,.73); }
      #cyberChallengeLab .tc-stat span { display:block; color:#83b991; font-size:11px; line-height:1.7; }
      #cyberChallengeLab .tc-stat strong { display:block; margin-top:3px; color:#e4ffeb; font:800 clamp(18px,2.2vw,25px)/1.5 Consolas,Tahoma,monospace; direction:ltr; text-align:right; overflow-wrap:anywhere; }
      #cyberChallengeLab .tc-controls { display:grid; grid-template-columns:minmax(0,1fr) minmax(0,1fr) minmax(0,.8fr) auto; align-items:end; gap:12px; padding:16px; border:1px solid rgba(75,255,127,.2); border-radius:8px; background:rgba(2,12,5,.72); }
      #cyberChallengeLab .tc-field { display:grid; gap:7px; min-width:0; }
      #cyberChallengeLab .tc-field label { color:#b5eac1; font-size:12px; font-weight:700; }
      #cyberChallengeLab select { width:100%; min-height:43px; padding:9px 11px; border:1px solid rgba(75,255,127,.35); border-radius:5px; outline:none; background:#06150a; color:#e1ffea; font:13px "Tajawal",Tahoma,Arial,sans-serif; }
      #cyberChallengeLab select:focus-visible { outline:2px solid #4dff7d; outline-offset:2px; }
      #cyberChallengeLab .tc-primary, #cyberChallengeLab .tc-secondary { display:inline-flex; align-items:center; justify-content:center; gap:8px; min-height:43px; padding:10px 16px; border:1px solid #4dff7d; border-radius:5px; background:linear-gradient(135deg,#145327,#0b2914); color:#e6ffec; font:700 13px "Tajawal",Tahoma,Arial,sans-serif; cursor:pointer; transition:transform .18s,background .18s,border-color .18s; }
      #cyberChallengeLab .tc-primary:hover, #cyberChallengeLab .tc-secondary:hover { transform:translateY(-1px); background:#174a25; border-color:#a3ffb8; }
      #cyberChallengeLab button:focus-visible { outline:2px solid #b3ffc3; outline-offset:3px; }
      #cyberChallengeLab button:disabled { cursor:not-allowed; opacity:.48; transform:none; }
      #cyberChallengeLab .tc-secondary { border-color:rgba(75,255,127,.28); background:rgba(15,42,22,.55); color:#bbebc6; }
      #cyberChallengeLab .tc-controls-note { margin:10px 2px 0; color:#759c7e; font-size:11px; line-height:1.8; }
      #cyberChallengeLab .tc-workspace { margin-top:18px; }
      #cyberChallengeLab .tc-empty { padding:clamp(18px,3vw,28px); border:1px dashed rgba(75,255,127,.32); border-radius:8px; background:rgba(3,20,8,.55); }
      #cyberChallengeLab .tc-empty h3 { margin:0 0 7px; color:#e7ffed; font-size:20px; line-height:1.7; }
      #cyberChallengeLab .tc-empty p { margin:0 0 16px; color:#a6cdb0; font-size:14px; line-height:2; }
      #cyberChallengeLab .tc-empty .tc-primary { margin-top:4px; }
      #cyberChallengeLab .tc-progress-head { display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:10px; margin-bottom:9px; }
      #cyberChallengeLab .tc-progress-label { color:#8fbd9b; font:11px Consolas,monospace; direction:ltr; }
      #cyberChallengeLab .tc-progress-count { color:#c7f7d1; font-size:12px; font-weight:700; }
      #cyberChallengeLab .tc-progress-track { height:7px; overflow:hidden; border:1px solid rgba(75,255,127,.17); border-radius:99px; background:#051109; }
      #cyberChallengeLab .tc-progress-fill { height:100%; width:0; border-radius:99px; background:linear-gradient(90deg,#23b853,#8affaa); transition:width .25s ease; }
      #cyberChallengeLab .tc-card { margin-top:16px; overflow:hidden; border:1px solid rgba(75,255,127,.3); border-radius:8px; background:linear-gradient(145deg,rgba(8,31,14,.96),rgba(2,12,5,.98)); }
      #cyberChallengeLab .tc-card-top { display:flex; flex-wrap:wrap; align-items:center; gap:8px; padding:13px 17px; border-bottom:1px solid rgba(75,255,127,.16); background:rgba(10,39,18,.58); }
      #cyberChallengeLab .tc-pill { display:inline-flex; align-items:center; min-height:25px; padding:4px 9px; border:1px solid rgba(75,255,127,.22); border-radius:99px; color:#a9f8bc; font-size:10px; font-weight:700; }
      #cyberChallengeLab .tc-pill.tc-difficulty { border-color:rgba(150,200,255,.25); color:#bcdcff; }
      #cyberChallengeLab .tc-scenario { padding:clamp(17px,3vw,26px); }
      #cyberChallengeLab .tc-scenario h3 { margin:0 0 10px; color:#f0fff3; font-size:clamp(20px,2.7vw,26px); line-height:1.6; }
      #cyberChallengeLab .tc-scenario-text { margin:0; padding:14px 15px; border-right:3px solid #4dff7d; border-radius:4px 0 0 4px; background:rgba(36,98,48,.14); color:#c4e9cd; font-size:14px; line-height:2; }
      #cyberChallengeLab .tc-question { margin:19px 0 12px; color:#e7ffed; font-size:15px; font-weight:800; line-height:1.9; }
      #cyberChallengeLab .tc-options { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:10px; }
      #cyberChallengeLab .tc-option { display:flex; align-items:flex-start; gap:10px; width:100%; min-width:0; padding:13px; border:1px solid rgba(116,182,129,.22); border-radius:6px; background:rgba(4,20,8,.8); color:#cbe9d1; font:13px/1.9 "Tajawal",Tahoma,Arial,sans-serif; text-align:right; cursor:pointer; transition:border-color .18s,background .18s; }
      #cyberChallengeLab .tc-option:hover:not(:disabled) { border-color:#54f47f; background:rgba(20,65,30,.67); }
      #cyberChallengeLab .tc-option-letter { display:grid; flex:0 0 25px; width:25px; height:25px; place-items:center; border:1px solid rgba(75,255,127,.23); border-radius:4px; color:#70ee91; font:12px Consolas,monospace; direction:ltr; }
      #cyberChallengeLab .tc-option.is-correct { border-color:#4dff7d; background:rgba(23,104,44,.36); color:#e4ffeb; }
      #cyberChallengeLab .tc-option.is-wrong { border-color:#ff8f8f; background:rgba(126,32,32,.2); color:#ffd6d6; }
      #cyberChallengeLab .tc-option.is-correct .tc-option-letter { border-color:#4dff7d; background:#164a24; }
      #cyberChallengeLab .tc-feedback { margin-top:15px; padding:16px; border:1px solid rgba(75,255,127,.23); border-radius:6px; background:rgba(4,23,9,.82); }
      #cyberChallengeLab .tc-feedback[hidden] { display:none !important; }
      #cyberChallengeLab .tc-feedback h4 { margin:0 0 8px; color:#91ffac; font-size:16px; }
      #cyberChallengeLab .tc-feedback p { margin:7px 0; color:#b8dbc1; font-size:13px; line-height:2; }
      #cyberChallengeLab .tc-safe-action { margin-top:12px !important; padding-top:12px; border-top:1px solid rgba(75,255,127,.14); }
      #cyberChallengeLab .tc-scenario-actions { display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:12px; margin-top:17px; }
      #cyberChallengeLab .tc-actions-hint { color:#7eaa89; font-size:11px; line-height:1.8; }
      #cyberChallengeLab .tc-result { padding:clamp(17px,3vw,27px); border:1px solid rgba(75,255,127,.3); border-radius:8px; background:radial-gradient(ellipse at 100% 0%,rgba(40,158,70,.13),transparent 50%),rgba(3,18,8,.92); }
      #cyberChallengeLab .tc-result-score { display:grid; grid-template-columns:auto 1fr; align-items:center; gap:17px; margin:15px 0 18px; }
      #cyberChallengeLab .tc-score-number { display:grid; place-items:center; width:100px; height:100px; border:2px solid #4dff7d; border-radius:50%; color:#c2ffd0; font:800 24px Consolas,monospace; direction:ltr; box-shadow:0 0 25px rgba(77,255,125,.09); }
      #cyberChallengeLab .tc-result h3 { margin:0 0 5px; color:#effff2; font-size:24px; }
      #cyberChallengeLab .tc-result p { color:#a8ceb2; font-size:14px; line-height:2; }
      #cyberChallengeLab .tc-review { display:grid; gap:9px; margin-top:18px; }
      #cyberChallengeLab .tc-review-item { padding:13px; border:1px solid rgba(75,255,127,.15); border-radius:6px; background:rgba(2,12,5,.68); }
      #cyberChallengeLab .tc-review-item strong { display:block; color:#e4ffeb; font-size:13px; line-height:1.8; }
      #cyberChallengeLab .tc-review-item span { display:block; margin-top:5px; color:#a8ceb2; font-size:12px; line-height:1.9; }
      #cyberChallengeLab .tc-review-item .tc-review-status { color:#72ff96; }
      #cyberChallengeLab .tc-review-item.is-missed .tc-review-status { color:#ffb1b1; }
      #cyberChallengeLab .tc-result-actions { display:flex; flex-wrap:wrap; gap:10px; margin-top:19px; }
      #cyberChallengeLab .tc-notice { margin:17px 0 0; padding-top:13px; border-top:1px solid rgba(75,255,127,.14); color:#72977c; font-size:11px; line-height:1.9; }
      @media(max-width:820px) { #cyberChallengeLab .tc-controls { grid-template-columns:1fr 1fr; } #cyberChallengeLab .tc-controls .tc-primary { grid-column:1 / -1; width:100%; } #cyberChallengeLab .tc-stats { grid-template-columns:repeat(2,minmax(0,1fr)); } }
      @media(max-width:600px) { #cyberChallengeLab { margin-top:18px; padding:15px; } #cyberChallengeLab .tc-controls { grid-template-columns:1fr; padding:12px; } #cyberChallengeLab .tc-controls .tc-primary { grid-column:auto; } #cyberChallengeLab .tc-options { grid-template-columns:1fr; } #cyberChallengeLab .tc-stat { padding:11px; } #cyberChallengeLab .tc-result-score { grid-template-columns:1fr; justify-items:start; } #cyberChallengeLab .tc-score-number { width:82px; height:82px; font-size:21px; } #cyberChallengeLab .tc-scenario-actions { align-items:stretch; flex-direction:column; } #cyberChallengeLab .tc-scenario-actions button { width:100%; } }
      @media(prefers-reduced-motion:reduce) { #cyberChallengeLab *,#cyberChallengeLab *::before,#cyberChallengeLab *::after { transition:none !important; animation:none !important; } }
    `;
    document.head.appendChild(labStyle);

    const scenarios = [
      // PHISHING & SCAMS — five scenarios
      {id:"phish-urgent-mail",category:"phishing",difficulty:"beginner",title:"رسالة تطلب تحديث كلمة المرور فورًا",scene:"وصلت رسالة باسم خدمة تستخدمها، وتقول إن حسابك سيُغلق خلال عشر دقائق. يوجد زر لتسجيل الدخول ورابط عنوانه مختلف قليلًا عن الموقع الرسمي.",question:"ما التصرف الأكثر أمانًا؟",options:[
        {text:"فتح الرابط بسرعة قبل إغلاق الحساب",correct:false,feedback:"الاستعجال والتهديد من أساليب الضغط الشائعة في التصيّد، وفتح الرابط قد يقود إلى صفحة مزيفة."},
        {text:"فتح التطبيق أو الموقع الرسمي بنفسك والتحقق من التنبيهات",correct:true,feedback:"صحيح. استخدم قناة مستقلة موثوقة بدل الرابط الوارد في الرسالة، وافحص التنبيهات من داخل الحساب."},
        {text:"الرد على المرسل وطلب إثبات هويته",correct:false,feedback:"الرد لا يثبت هوية المرسل؛ قد يرد المحتال برسالة أخرى مقنعة."},
        {text:"إرسال رمز التحقق للمرسل حتى يوقف الإغلاق",correct:false,feedback:"لا تشارك رموز التحقق مطلقًا. قد تسمح هذه الرموز بتسجيل الدخول إلى حسابك."}],action:"افتح الخدمة من تطبيقها أو اكتب عنوانها المعروف بنفسك، ثم أبلغ عن الرسالة واحذفها إذا تأكد الاشتباه."},
      {id:"phish-fake-domain",category:"phishing",difficulty:"intermediate",title:"صفحة دخول تشبه الموقع الأصلي",scene:"رابط وصل عبر محادثة يفتح صفحة تحمل شعارًا مألوفًا. عنوان الصفحة يحتوي على كلمة إضافية ولا يطابق النطاق الرسمي.",question:"أي علامة ينبغي فحصها أولًا؟",options:[
        {text:"جودة الشعار وألوان الصفحة",correct:false,feedback:"يمكن نسخ الشعار والألوان بسهولة؛ شكل الصفحة وحده لا يثبت أنها أصلية."},
        {text:"عدد المتابعين لحساب الشخص الذي أرسل الرابط",correct:false,feedback:"عدد المتابعين لا يؤكد أن الرابط آمن أو أن الحساب لم يتعرض للسيطرة."},
        {text:"اسم النطاق الكامل قبل إدخال أي بيانات",correct:true,feedback:"صحيح. افحص اسم النطاق بدقة، وتجنب تسجيل الدخول من روابط لم تتوقعها."},
        {text:"وجود زر تسجيل دخول كبير وواضح",correct:false,feedback:"التصميم المقنع لا يضمن شرعية الصفحة؛ قد تستخدم صفحات التصيّد عناصر مألوفة."}],action:"أغلق الصفحة، وانتقل للموقع الرسمي يدويًا. إذا أدخلت كلمة المرور بالفعل، غيّرها من الموقع الرسمي وافحص الجلسات النشطة."},
      {id:"phish-qr-code",category:"phishing",difficulty:"intermediate",title:"رمز QR على ملصق مجهول",scene:"وجدت ملصقًا في مكان عام يقول إن مسح الرمز يمنحك جائزة. بعد المسح ظهر رابط مختصر يطلب تسجيل الدخول وإدخال بيانات البطاقة.",question:"كيف تتعامل مع الرمز؟",options:[
        {text:"إدخال البيانات لأن الصفحة فتحت على الهاتف",correct:false,feedback:"فتح الصفحة لا يعني أنها موثوقة؛ يمكن لرمز QR أن يقود إلى رابط ضار أو مزيف."},
        {text:"عدم إدخال أي بيانات والتحقق من العرض عبر القناة الرسمية",correct:true,feedback:"صحيح. تعامل مع رمز QR مثل أي رابط مجهول، وتحقق من الجهة والعرض من مصدر مستقل."},
        {text:"السماح لكل أذونات الموقع لتأكيد الجائزة",correct:false,feedback:"لا تمنح صلاحيات غير لازمة لمجرد أن صفحة تعدك بجائزة."},
        {text:"مشاركة الرمز مع الأصدقاء ليختبروه",correct:false,feedback:"قد تعرّض الآخرين للخطر أيضًا. لا تنشر الرابط قبل التحقق منه."}],action:"تحقق من العرض عبر الموقع أو الحساب الرسمي للجهة، ولا تدخل معلومات دفع في صفحة غير متأكد منها."},
      {id:"phish-fake-support",category:"phishing",difficulty:"beginner",title:"دعم فني يطلب رمز التحقق",scene:"اتصل شخص يدّعي أنه من الدعم الفني، وقال إنه يساعدك على منع اختراق. طلب منك قراءة رمز وصل إلى هاتفك.",question:"ما القرار الصحيح؟",options:[
        {text:"إعطاؤه الرمز لأنه يعرف اسمك",correct:false,feedback:"معرفة الاسم ليست دليل هوية. رمز التحقق مخصص لإثبات دخولك ولا ينبغي مشاركته."},
        {text:"إعطاؤه الرمز إذا وعدك بعدم حفظه",correct:false,feedback:"الوعد لا يمنع استخدام الرمز فورًا للاستيلاء على الحساب."},
        {text:"إنهاء الاتصال والتواصل مع الدعم من التطبيق الرسمي",correct:true,feedback:"صحيح. اتصل بالجهة عبر رقم أو قناة رسمية مستقلة، ولا تكمل خطوات طلبها متصل غير متحقق منه."},
        {text:"إرسال صورة شاشة للرسالة التي تحتوي الرمز",correct:false,feedback:"الصورة قد تكشف الرمز نفسه. لا تشارك رموز الدخول أو الاسترداد."}],action:"لا تشارك الرمز. إن كنت قد شاركته، افتح إعدادات الحساب الرسمي، غيّر بيانات الدخول، وأنهِ الجلسات غير المعروفة."},
      {id:"phish-fake-invoice",category:"phishing",difficulty:"advanced",title:"فاتورة مرفقة من مورّد غير متوقع",scene:"وصل بريد بعنوان 'فاتورة متأخرة' ومرفق مضغوط. المرسل يشبه اسم مورّد معروف لكنه يستخدم نطاقًا مختلفًا، ويطلب فتح الملف سريعًا.",question:"ما أفضل خطوة قبل فتح المرفق؟",options:[
        {text:"فتح الأرشيف لمعرفة محتواه",correct:false,feedback:"قد يحتوي الأرشيف على ملفات ضارة؛ لا تفتحه لمجرد الفضول."},
        {text:"التحقق من الفاتورة عبر جهة الاتصال المعروفة للمورّد",correct:true,feedback:"صحيح. تحقق من خلال قناة معروفة مسبقًا، وأبلغ فريق الدعم أو الأمن إذا كان هذا بريد عمل."},
        {text:"إيقاف برنامج الحماية لتسهيل فتحه",correct:false,feedback:"تعطيل الحماية يزيد المخاطر ولا يساعد على إثبات موثوقية المرفق."},
        {text:"إعادة توجيه المرفق لكل الزملاء للسؤال عنه",correct:false,feedback:"قد ينشر المرفق المشبوه إلى مستخدمين آخرين. أرسل بلاغًا وفق الإجراءات ولا تعِد توزيع الملف."}],action:"تحقق من المرسل والفاتورة عبر قناة مستقلة، ولا تشغّل المرفق. اتبع إجراءات الإبلاغ في مؤسستك."},

      // ACCOUNTS & IDENTITY — five scenarios
      {id:"account-mfa-code",category:"accounts",difficulty:"beginner",title:"رمز مصادقة لم تطلبه",scene:"ظهر على هاتفك رمز تسجيل دخول لحسابك، لكنك لا تحاول الدخول الآن. بعده اتصل بك شخص يطلب الرمز لإلغاء المحاولة.",question:"ما التفسير والتصرف الأنسب؟",options:[
        {text:"هناك محاولة دخول محتملة؛ لا تشارك الرمز وافحص أمان الحساب",correct:true,feedback:"صحيح. قد يكون شخص يحاول الدخول. لا تشارك الرمز، وافحص النشاط وغيّر كلمة المرور إذا وجدت ما يدعو للشك."},
        {text:"إعطاء الرمز حتى لا يقفل النظام الحساب",correct:false,feedback:"هذا قد يكمل محاولة دخول غير مصرح بها بدل إيقافها."},
        {text:"نشر الرمز في مجموعة الدعم",correct:false,feedback:"رموز المصادقة أسرار مؤقتة، ولا ينبغي نشرها في محادثات أو مجموعات."},
        {text:"تجاهل كل التنبيهات المستقبلية",correct:false,feedback:"تجاهل التنبيهات المتكررة قد يخفي محاولات حقيقية؛ افحصها عبر التطبيق الرسمي."}],action:"لا تشارك الرمز، غيّر كلمة المرور من المصدر الرسمي عند الاشتباه، وراجع الجلسات وفعّل MFA."},
      {id:"account-login-alert",category:"accounts",difficulty:"intermediate",title:"تسجيل دخول من جهاز لا تعرفه",scene:"أرسل بريدك تنبيهًا بتسجيل دخول ناجح من جهاز وموقع لا تتعرف عليهما. أنت لا تستخدم VPN ولم تسجّل الدخول في هذا الوقت.",question:"ما أول إجراء عملي؟",options:[
        {text:"الضغط على رابط التنبيه فورًا دون فحصه",correct:false,feedback:"حتى تنبيهات الأمان يمكن تقليدها. افتح التطبيق أو الموقع الرسمي بنفسك."},
        {text:"فحص النشاط والجلسات من التطبيق الرسمي، ثم تأمين الحساب",correct:true,feedback:"صحيح. تحقق من الحدث عبر القناة الرسمية، وأنهِ الجلسات غير المعروفة وغيّر كلمة المرور عند تأكد الاشتباه."},
        {text:"إرسال كلمة المرور للدعم ليتحقق منها",correct:false,feedback:"الدعم الموثوق لا يحتاج إلى معرفة كلمة مرورك."},
        {text:"حذف البريد دون أي تحقق",correct:false,feedback:"قد يفوّت هذا تنبيهًا حقيقيًا. تحقّق بصورة مستقلة بدل تجاهله."}],action:"راجع الأجهزة والجلسات، ألغِ الوصول غير المعروف، وتحقق من البريد ورقم الهاتف ووسائل استرداد الحساب."},
      {id:"account-password-reuse",category:"accounts",difficulty:"beginner",title:"كلمة مرور واحدة لكل المواقع",scene:"تستخدم كلمة المرور نفسها للبريد والألعاب والمتجر الإلكتروني. قرأت أن أحد المواقع التي تستخدمها تعرض لتسريب بيانات.",question:"كيف تقلل انتقال أثر التسريب إلى حساباتك الأخرى؟",options:[
        {text:"استخدام كلمة المرور نفسها مع إضافة علامة تعجب",correct:false,feedback:"تعديل بسيط لا يضمن استقلال الحسابات، خصوصًا إذا كانت الكلمة الأصلية معروفة."},
        {text:"تغيير كلمة مرور البريد وحدها وترك البقية",correct:false,feedback:"البريد مهم جدًا، لكن الحسابات الأخرى التي تستخدم الكلمة نفسها تظل معرضة."},
        {text:"إنشاء كلمة فريدة لكل حساب مع مدير كلمات مرور موثوق",correct:true,feedback:"صحيح. كلمات المرور الفريدة تحد من انتقال أثر تسريب خدمة إلى الحسابات الأخرى."},
        {text:"إرسال كل كلمات المرور إلى نفسك برسالة",correct:false,feedback:"الرسائل ليست مكانًا مناسبًا لتخزين كلمات المرور الحساسة."}],action:"ابدأ بالبريد والحسابات المالية والحسابات الأساسية، ثم استخدم كلمات فريدة ومصادقة متعددة العوامل."},
      {id:"account-recovery",category:"accounts",difficulty:"advanced",title:"تغيّرت وسيلة استرداد الحساب",scene:"لاحظت أن بريد الاسترداد أو رقم الهاتف في حساب مهم قد تغيّر دون علمك. ما زلت قادرًا على فتح الحساب حاليًا.",question:"ما الأولوية؟",options:[
        {text:"تحديث وسيلة الاسترداد إلى وسيلة تملكها وتأمين الجلسات فورًا",correct:true,feedback:"صحيح. استعادة السيطرة على وسائل الاسترداد والجلسات تقلل فرصة فقدان الحساب بالكامل."},
        {text:"انتظار عدة أيام لمعرفة ما سيحدث",correct:false,feedback:"قد يستخدم المهاجم وسيلة الاسترداد للسيطرة على الحساب لاحقًا."},
        {text:"إرسال رمز الاسترداد للشخص الذي غيّر الوسيلة",correct:false,feedback:"لا تشارك رموز الاسترداد مع أي شخص؛ استخدم خطوات الخدمة الرسمية."},
        {text:"حذف كل الرسائل التي وصلتك من الخدمة",correct:false,feedback:"قد تحتوي الرسائل على تنبيهات مهمة تساعدك على فهم التغيير والتحقق منه."}],action:"غيّر كلمة المرور، استعد وسائل الاسترداد، أنهِ الجلسات غير المعروفة وراجع قواعد إعادة التوجيه والتطبيقات المرتبطة."},
      {id:"account-password-manager",category:"accounts",difficulty:"intermediate",title:"كيف تدير عشرات كلمات المرور؟",scene:"لديك حسابات كثيرة ويصعب تذكر كلمة فريدة لكل حساب. تفكر في حفظها في ملف نصي على سطح المكتب.",question:"ما الخيار الأكثر أمانًا عادة؟",options:[
        {text:"ملف نصي غير مشفر على سطح المكتب",correct:false,feedback:"أي شخص يصل إلى الملف قد يقرأ جميع كلمات المرور دفعة واحدة."},
        {text:"استخدام كلمة واحدة في كل مكان لتسهيل التذكر",correct:false,feedback:"إعادة الاستخدام تزيد الأثر المحتمل لأي تسريب."},
        {text:"مدير كلمات مرور موثوق مع كلمة رئيسية قوية وMFA عند توفره",correct:true,feedback:"صحيح. مدير كلمات المرور يساعد في توليد وحفظ كلمات فريدة؛ احمِ الحساب الرئيسي جيدًا."},
        {text:"صور شاشة لكل كلمة مرور في معرض الصور",correct:false,feedback:"الصور قد تتزامن أو تُنسخ احتياطيًا أو تُكشف بسهولة."}],action:"اختر مديرًا موثوقًا، احمِه بكلمة رئيسية قوية، واحفظ رموز الاسترداد في مكان آمن منفصل."},

      // DEVICES & FILES — five scenarios
      {id:"device-unknown-installer",category:"devices",difficulty:"beginner",title:"برنامج مجاني من موقع مجهول",scene:"وجدت برنامجًا مدفوعًا مجانًا على موقع غير معروف، ويطلب إيقاف برنامج الحماية قبل التثبيت.",question:"ما التصرف الأكثر أمانًا؟",options:[
        {text:"تعطيل الحماية ثم تثبيت البرنامج",correct:false,feedback:"طلب تعطيل الحماية مؤشر خطر؛ قد يحاول الملف تجاوز آليات الحماية."},
        {text:"تنزيل البرنامج من الموقع الرسمي أو متجر موثوق",correct:true,feedback:"صحيح. المصدر الرسمي والتوقيع والتحديثات تقلل المخاطر، ولا تعطل الحماية لتشغيل ملف مجهول."},
        {text:"تشغيله بصلاحية المدير حتى يثبت بسهولة",correct:false,feedback:"صلاحيات المدير توسّع الضرر المحتمل إذا كان الملف خبيثًا."},
        {text:"تغيير اسم الملف فقط ثم تشغيله",correct:false,feedback:"تغيير الاسم لا يغير سلامة الملف أو مصدره."}],action:"احذف الملف المشبوه، وافحص الجهاز إذا شغّلته سابقًا، واستخدم مصادر تنزيل موثوقة."},
      {id:"device-fake-antivirus",category:"devices",difficulty:"intermediate",title:"نافذة منبثقة تقول إن جهازك مصاب",scene:"أثناء التصفح تظهر نافذة تحذير حمراء تقول إن جهازك مصاب وتطلب تنزيل أداة فحص من رابط فوري.",question:"ماذا تفعل؟",options:[
        {text:"تنزيل الأداة لأنها تستخدم لونًا تحذيريًا",correct:false,feedback:"الألوان والرسائل المخيفة يمكن أن تكون وسيلة ضغط لبيع أداة أو نشر برمجية ضارة."},
        {text:"الاتصال بالرقم الظاهر في النافذة",correct:false,feedback:"أرقام الدعم الواردة في النوافذ المنبثقة قد تقود إلى محتالين."},
        {text:"إغلاق التبويب أو المتصفح وفحص الجهاز بأداة موثوقة مثبتة مسبقًا",correct:true,feedback:"صحيح. لا تستخدم أداة يوصي بها تحذير غير متوقع؛ افحص من خلال برنامج موثوق."},
        {text:"منح الصفحة إذن الإشعارات لتوقف التحذير",correct:false,feedback:"الإذن قد يسمح بمزيد من الإشعارات المزعجة، ولا يعالج المشكلة."}],action:"أغلق الصفحة دون النقر على عناصرها، واحذف إشعارات المواقع غير الموثوقة، ثم افحص الجهاز بأداة موثوقة."},
      {id:"device-app-permissions",category:"devices",difficulty:"intermediate",title:"تطبيق مصباح يطلب الوصول إلى جهات الاتصال",scene:"تطبيق بسيط لتشغيل مصباح الهاتف يطلب الوصول إلى جهات الاتصال والميكروفون والموقع الدقيق دون توضيح سبب.",question:"ما المبدأ الذي تستخدمه لتقييم الصلاحيات؟",options:[
        {text:"الموافقة على كل الصلاحيات حتى يعمل التطبيق",correct:false,feedback:"الصلاحيات الواسعة قد تكشف بيانات لا يحتاجها التطبيق."},
        {text:"منح الحد الأدنى الضروري فقط ورفض ما لا يتناسب مع الوظيفة",correct:true,feedback:"صحيح. مبدأ أقل صلاحية يقلل جمع البيانات والتعرض للمخاطر."},
        {text:"منح الصلاحيات إذا كان التطبيق مجانيًا",correct:false,feedback:"مجانية التطبيق ليست سببًا يبرر الوصول إلى بياناتك."},
        {text:"السماح بكل شيء ثم نسيان الإعدادات",correct:false,feedback:"ينبغي مراجعة الصلاحيات دوريًا، خصوصًا للتطبيقات التي لا تحتاجها كثيرًا."}],action:"راجع الصلاحيات من إعدادات النظام، واحذف التطبيق إذا لم تكن وظيفته أو جهة تطويره موثوقة."},
      {id:"device-lost-phone",category:"devices",difficulty:"beginner",title:"فقدت هاتفك وفيه حسابات مفتوحة",scene:"فقدت هاتفًا يحتوي على بريدك وحساباتك. الجهاز عليه قفل شاشة، لكنك لا تعرف أين أصبح.",question:"أي مجموعة خطوات هي الأنسب؟",options:[
        {text:"انتظار عودة الهاتف دون تغيير أي شيء",correct:false,feedback:"التأخر قد يترك الجلسات والبيانات معرضة للخطر."},
        {text:"استخدام خدمة العثور الرسمية لقفله أو مسحه، وتأمين الحسابات المهمة",correct:true,feedback:"صحيح. استخدم أدوات الشركة الرسمية، وراجع جلسات الحسابات واطلب من شركة الاتصالات إيقاف الشريحة عند الحاجة."},
        {text:"نشر كلمة مرور الحساب في وسائل التواصل لطلب المساعدة",correct:false,feedback:"لا تنشر أي بيانات دخول علنًا؛ هذا قد يزيد احتمال الاستيلاء على الحساب."},
        {text:"تسجيل الدخول من رابط يرسله شخص يدّعي أنه وجد الهاتف",correct:false,feedback:"قد تكون رسالة تصيد تستغل قلقك. استخدم تطبيقات ومواقع رسمية فقط."}],action:"استخدم أدوات القفل أو المسح الرسمية، غيّر بيانات الدخول عند الاشتباه، وأوقف الشريحة إذا لزم الأمر."},
      {id:"device-usb-drive",category:"devices",difficulty:"advanced",title:"ذاكرة USB وجدتها في موقف",scene:"عثرت على ذاكرة USB مجهولة وعليها عبارة 'ملفات الرواتب'. تريد معرفة صاحبها بفتح الملفات على حاسوبك الشخصي.",question:"ما التصرف المسؤول؟",options:[
        {text:"توصيلها مباشرة لاستكشاف الملفات",correct:false,feedback:"الوسائط المجهولة قد تحتوي ملفات ضارة أو تستغل مشكلات في النظام."},
        {text:"تسليمها إلى الجهة المختصة أو فريق تقنية المعلومات دون توصيلها",correct:true,feedback:"صحيح. لا توصل وسيطًا مجهولًا بجهازك؛ اتبع إجراءات المؤسسة أو سلّمه للجهة المسؤولة."},
        {text:"فتحها إذا كان حجمها صغيرًا",correct:false,feedback:"الحجم لا يدل على سلامة المحتوى."},
        {text:"نسخ الملفات إلى هاتفك بدل الكمبيوتر",correct:false,feedback:"الهاتف ليس مضمون الحماية من الملفات أو الروابط الضارة."}],action:"اترك الوسيط غير موصول واتبع الإجراء الأمني المحلي للتعامل مع الأجهزة المجهولة."},

      // NETWORKS & CONNECTIVITY — five scenarios
      {id:"network-public-payment",category:"network",difficulty:"beginner",title:"دفع إلكتروني عبر Wi-Fi عام",scene:"أنت في مقهى واتصلت بشبكة Wi-Fi عامة غير محمية بكلمة مرور، وتريد إجراء عملية شراء مهمة.",question:"ما القرار الأكثر أمانًا؟",options:[
        {text:"تأجيل العملية أو استخدام بيانات الهاتف وشبكة موثوقة",correct:true,feedback:"صحيح. للعمليات الحساسة، استخدم اتصالًا موثوقًا قدر الإمكان، وتأكد من الموقع والمعلومات قبل المتابعة."},
        {text:"استخدام الشبكة لأن اسمها يحتوي اسم المقهى",correct:false,feedback:"قد ينشئ شخص آخر شبكة باسم مشابه؛ الاسم وحده لا يثبت أنها رسمية."},
        {text:"إيقاف قفل الشاشة ثم إكمال الدفع",correct:false,feedback:"قفل الشاشة يحمي الجهاز عند تركه؛ إيقافه لا يزيد أمان الاتصال."},
        {text:"إدخال بيانات البطاقة في أي صفحة مفتوحة",correct:false,feedback:"تحقق من النطاق وموثوقية التاجر قبل إدخال بيانات الدفع."}],action:"استخدم بيانات الهاتف أو شبكة موثوقة للمعاملات الحساسة، وتجنب شبكات عامة تطلب بياناتك دون سبب واضح."},
      {id:"network-router-default",category:"network",difficulty:"intermediate",title:"إعدادات الراوتر ما زالت افتراضية",scene:"لاحظت أن كلمة مرور إدارة الراوتر لم تتغير منذ شرائه، وما زالت مكتوبة على ملصق الجهاز. اسم الشبكة وكلمة مرور Wi-Fi ضعيفان.",question:"من أين تبدأ؟",options:[
        {text:"تغيير اسم الشبكة فقط",correct:false,feedback:"تغيير الاسم وحده لا يحمي حساب الإدارة أو الشبكة بكلمة قوية."},
        {text:"تغيير كلمة مرور الإدارة وWi-Fi، وتفعيل تشفير حديث وتحديث الراوتر",correct:true,feedback:"صحيح. ابدأ بالإعدادات الافتراضية، واستخدم تشفيرًا حديثًا متاحًا وتحديثات من الشركة."},
        {text:"إخفاء اسم الشبكة وترك بقية الإعدادات",correct:false,feedback:"إخفاء الاسم ليس بديلًا عن كلمة مرور قوية وإعدادات تشفير صحيحة."},
        {text:"كتابة كلمة مرور الإدارة على مجموعة العائلة",correct:false,feedback:"شارك بيانات الإدارة فقط مع من يحتاجها، وبطريقة آمنة؛ الأفضل عدم تداولها في مجموعات."}],action:"ادخل إلى واجهة الإدارة الرسمية للراوتر، حدّثه، وغيّر كلمات المرور الافتراضية مع مراجعة الأجهزة المتصلة."},
      {id:"network-certificate-warning",category:"network",difficulty:"advanced",title:"تحذير شهادة أمان في المتصفح",scene:"تظهر رسالة أن شهادة الموقع غير صالحة أو أن الاتصال قد لا يكون خاصًا، مع أنك تتصفح موقعًا ماليًا.",question:"كيف تتصرف؟",options:[
        {text:"تجاوز التحذير لأن الموقع معروف",correct:false,feedback:"حتى المواقع المعروفة لا ينبغي فتحها بتجاوز تحذير شهادة غير مفهوم، خاصة في المعاملات الحساسة."},
        {text:"متابعة تسجيل الدخول ثم تغيير كلمة المرور لاحقًا",correct:false,feedback:"قد يكشف هذا البيانات إذا كان الاتصال أو النطاق غير موثوق."},
        {text:"إيقاف العملية والتحقق من عنوان الموقع والوقت والاتصال، ثم الرجوع للدعم الرسمي",correct:true,feedback:"صحيح. لا تتجاوز تحذير الشهادة في موقع حساس؛ تحقق من الأسباب من مصدر موثوق."},
        {text:"إدخال البيانات في صفحة أخرى منبثقة",correct:false,feedback:"الصفحات المنبثقة ليست حلًا آمنًا وقد تكون جزءًا من الخطر نفسه."}],action:"لا تدخل بيانات حساسة حتى يزول التحذير ويُفهم سببه؛ استخدم التطبيق أو الدعم الرسمي للمؤسسة."},
      {id:"network-unknown-device",category:"network",difficulty:"intermediate",title:"جهاز غير معروف متصل بالشبكة",scene:"يعرض تطبيق إدارة الراوتر جهازًا متصلًا لا تعرف اسمه. لا تستطيع التأكد من الجهاز من الاسم وحده.",question:"ما الخطوة التالية المناسبة؟",options:[
        {text:"افتراض أنه مهاجم وحذف كل إعدادات الراوتر فورًا",correct:false,feedback:"قد تكون أسماء الأجهزة غير واضحة أو عشوائية. تحقق قبل اتخاذ خطوة كبيرة."},
        {text:"مقارنة وقت الاتصال والأجهزة المنزلية، ثم تغيير كلمة مرور Wi-Fi إذا بقي الشك",correct:true,feedback:"صحيح. تحقق من الأجهزة التي تملكها أولًا، ثم أمّن الشبكة إذا بقي جهاز غير معروف."},
        {text:"نشر عنوان الجهاز في الإنترنت للبحث عن صاحبه",correct:false,feedback:"قد يكشف ذلك معلومات عن شبكتك ولا يثبت هوية مالك الجهاز."},
        {text:"تركه دائمًا لأنه متصل بالشبكة فقط",correct:false,feedback:"ينبغي مراجعة الأجهزة غير المعروفة بدل تجاهلها."}],action:"راجع الأجهزة المتصلة، حدّث كلمة المرور والتشفير إذا لزم، ثم أعد توصيل أجهزتك الموثوقة فقط."},
      {id:"network-dns-change",category:"network",difficulty:"advanced",title:"تغيّر إعداد DNS دون علمك",scene:"لاحظت أن الجهاز أو الراوتر يستخدم خادم DNS لم تقم باختياره. بعض المواقع تفتح بصفحات غريبة، ولا تعرف سبب التغيير.",question:"ما الإجراء الأكثر أمانًا؟",options:[
        {text:"إدخال بياناتك في الصفحة الغريبة لمعرفة ما يحدث",correct:false,feedback:"لا تدخل بيانات في صفحات غير متوقعة أثناء وجود مشكلة في الاتصال."},
        {text:"التحقق من إعدادات الجهاز والراوتر وإعادتها إلى إعداد موثوق بمساعدة الدعم عند الحاجة",correct:true,feedback:"صحيح. تحقق من سبب التغيير من إعدادات النظام والراوتر، وحدّث بيانات الإدارة إذا شككت باختراقها."},
        {text:"تعطيل تحديثات النظام لتثبيت الوضع الحالي",correct:false,feedback:"إيقاف التحديثات لا يعالج إعدادًا مشبوهًا وقد يزيد المخاطر."},
        {text:"إرسال كلمة مرور الراوتر إلى الشخص الذي نصحك عبر محادثة",correct:false,feedback:"لا تشارك بيانات الإدارة مع جهة غير متحقق منها."}],action:"افحص إعدادات DNS والراوتر من واجهته الرسمية، وغيّر بيانات الإدارة الافتراضية إذا لم تكن قد فعلت ذلك."},

      // PRIVACY & AI — five scenarios
      {id:"privacy-deepfake-voice",category:"privacy",difficulty:"beginner",title:"صوت قريب يطلب تحويلًا عاجلًا",scene:"وصلتك مكالمة بصوت يشبه قريبًا لك، يطلب تحويل مال فورًا ويقول إن هاتفه الأصلي لا يعمل ولا وقت للتحقق.",question:"كيف تتحقق قبل تنفيذ طلب حساس؟",options:[
        {text:"التحويل فورًا لأن الصوت مألوف",correct:false,feedback:"يمكن تقليد الأصوات أو استغلال التسجيلات؛ الألفة ليست تحققًا كافيًا."},
        {text:"إنهاء المكالمة والاتصال به على رقم تعرفه مسبقًا أو التحقق عبر شخص موثوق",correct:true,feedback:"صحيح. تحقق عبر قناة مستقلة، واتفق مع الأسرة على كلمة أو إجراء تحقق للطلبات الطارئة."},
        {text:"طلب إرسال رسالة صوتية أخرى من الرقم نفسه فقط",correct:false,feedback:"قد تكون القناة نفسها مخترقة؛ رسالة إضافية لا تكفي للتحقق المستقل."},
        {text:"إرسال بياناتك البنكية للتأكد من هوية المتصل",correct:false,feedback:"لا تشارك بيانات مالية أو رموز تحقق مع المتصل."}],action:"تحقق من الطلب عبر رقم محفوظ مسبقًا أو وسيلة مستقلة، ولا تحوّل المال تحت ضغط الاستعجال."},
      {id:"privacy-oversharing",category:"privacy",difficulty:"beginner",title:"منشور يكشف تفاصيل أكثر من اللازم",scene:"تنوي نشر صورة تذكرة سفر وموقعك الحالي وتاريخ عودتك، وتظهر في الصورة وثيقة فيها رقم حجزك.",question:"كيف تقلل المخاطر دون التخلي عن مشاركة الصور؟",options:[
        {text:"نشر كل التفاصيل لأن الحساب خاص",correct:false,feedback:"الحسابات الخاصة قد تُصوّر أو يُعاد نشر محتواها؛ إعداد الخصوصية لا يضمن السرية التامة."},
        {text:"إخفاء أرقام الحجز والبيانات الحساسة وتأخير نشر الموقع عند الحاجة",correct:true,feedback:"صحيح. راجع الخلفية والتفاصيل الظاهرة، وشارك أقل قدر لازم من البيانات."},
        {text:"إضافة رقم الهوية حتى يعرف الأصدقاء أن الرحلة تخصك",correct:false,feedback:"لا تنشر أرقام الهوية أو الحجز؛ هذه معلومات يمكن إساءة استخدامها."},
        {text:"السماح لكل تطبيق بالوصول لموقعك طوال الوقت",correct:false,feedback:"امنح الموقع للتطبيقات التي تحتاجه فقط، وراجع الأذونات دوريًا."}],action:"افحص الصورة قبل نشرها، واحذف أو غطِّ الأرقام والرموز والمعلومات التي تحدد مكانك أو خططك."},
      {id:"privacy-cloud-link",category:"privacy",difficulty:"intermediate",title:"ملف سحابي مفتوح للجميع",scene:"رفعت ملفًا فيه معلومات شخصية إلى خدمة سحابية، ثم اكتشفت أن خيار المشاركة مضبوط على 'كل من لديه الرابط'.",question:"ما الخطوة المناسبة الآن؟",options:[
        {text:"ترك الرابط لأن الوصول إليه يحتاج معرفة الرابط",correct:false,feedback:"الرابط القابل للمشاركة قد يُعاد إرساله أو يظهر في سجل أو رسالة؛ ليس مثل تقييد الوصول بحسابات محددة."},
        {text:"إيقاف المشاركة العامة ومراجعة الأشخاص الذين لديهم وصول",correct:true,feedback:"صحيح. ألغِ الوصول غير الضروري وراجع سجل المشاركة والتنزيلات إذا كانت الخدمة توفرها."},
        {text:"إرسال الرابط إلى مجموعة أكبر للتحذير",correct:false,feedback:"هذا يزيد انتشار الرابط بدل الحد من الوصول."},
        {text:"تغيير اسم الملف فقط",correct:false,feedback:"اسم الملف لا يغيّر صلاحيات الوصول."}],action:"اضبط المشاركة على أشخاص محددين، واحذف الأذونات العامة، ثم راجع ما إذا كانت هناك حاجة لإبلاغ المتأثرين."},
      {id:"privacy-impersonation",category:"privacy",difficulty:"intermediate",title:"حساب جديد ينتحل شخصية صديقك",scene:"أرسل لك حساب يحمل صورة واسم صديقك طلب متابعة، ثم طلب معلومات شخصية وصورة لبطاقتك بحجة تحديث بياناته.",question:"كيف تتعامل مع الحساب؟",options:[
        {text:"إرسال الوثيقة لأنه يعرف صور صديقك",correct:false,feedback:"الصور والأسماء العامة يمكن نسخها؛ لا ترسل وثائق خاصة لحساب غير متحقق منه."},
        {text:"التحقق من صديقك عبر وسيلة اتصال معروفة والإبلاغ عن الحساب إذا كان منتحلًا",correct:true,feedback:"صحيح. استخدم قناة تعرفها مسبقًا، ولا تفتح روابط أو ترسل بيانات حساسة للحساب المشكوك فيه."},
        {text:"إرسال رمز التحقق حتى يثبت أنه صديقك",correct:false,feedback:"رموز التحقق ليست وسيلة للتحقق من هوية الأصدقاء؛ لا تشاركها."},
        {text:"إعادة نشر الحساب علنًا مع كل البيانات الخاصة",correct:false,feedback:"لا تكشف بياناتك أو بيانات صديقك؛ استخدم أدوات الإبلاغ في المنصة."}],action:"تحقق عبر قناة مستقلة، وأبلغ المنصة، ونبّه صاحب الحساب الحقيقي إذا تأكد الانتحال."},
      {id:"privacy-ai-data",category:"privacy",difficulty:"advanced",title:"رفع ملف عمل كامل إلى أداة ذكاء اصطناعي",scene:"تريد تلخيص ملف يحتوي أسماء عملاء وأرقام هواتف ومعلومات داخلية. الأداة عامة ولم تراجع سياسة استخدامها بعد.",question:"ما النهج الأكثر مسؤولية؟",options:[
        {text:"رفع الملف كاملًا لأن الأداة سريعة",correct:false,feedback:"قد يؤدي رفع البيانات الحساسة إلى كشفها أو معالجتها خارج الضوابط المعتمدة."},
        {text:"مراجعة سياسة الجهة والأداة، وتقليل البيانات أو إخفاء الهوية، واستخدام أداة معتمدة",correct:true,feedback:"صحيح. استخدم أقل قدر من المعلومات، واتبع قواعد المؤسسة والخصوصية قبل مشاركة البيانات."},
        {text:"تغيير اسم الملف فقط ثم رفعه",correct:false,feedback:"تغيير اسم الملف لا يخفي البيانات الموجودة داخله."},
        {text:"نشر الملف للعامة وطلب تلخيصه",correct:false,feedback:"النشر العام يزيد انكشاف البيانات ولا يحل مسألة الخصوصية."}],action:"لا ترفع معلومات شخصية أو سرية إلى خدمة غير معتمدة؛ احذف المعرفات واستخدم البديل المصرح به."},

      // INCIDENT RESPONSE & APPLICATION SECURITY — five scenarios
      {id:"incident-ransomware",category:"incident",difficulty:"beginner",title:"ملفاتك لم تعد تفتح وظهرت رسالة فدية",scene:"تغيّرت أسماء ملفات عديدة وظهرت رسالة تطلب المال لفك التشفير. ما زال الجهاز متصلًا بالشبكة.",question:"ما الخطوة الأولى الأكثر أمانًا؟",options:[
        {text:"دفع الفدية فورًا لضمان استعادة الملفات",correct:false,feedback:"الدفع لا يضمن استعادة الملفات وقد يشجع المهاجمين؛ اطلب مساعدة مختصين."},
        {text:"فصل الجهاز المصاب عن الشبكة بأمان وإبلاغ الدعم المختص",correct:true,feedback:"صحيح. الاحتواء السريع يساعد على تقليل الانتشار. لا تحذف الأدلة ولا تتصل بأجهزة نسخ احتياطي دون خطة."},
        {text:"توصيل كل الأقراص الاحتياطية لنسخ الملفات منها",correct:false,feedback:"قد تنتشر الإصابة إلى الأقراص أو الأجهزة المتصلة؛ لا توصل النسخ قبل تقييم الحالة."},
        {text:"تنزيل أداة عشوائية من نافذة الإعلان",correct:false,feedback:"الأدوات المجهولة قد تزيد الضرر. اتبع خطة الاستجابة واستخدم دعمًا موثوقًا."}],action:"اعزل الجهاز المصاب عن الشبكة، وأبلغ المسؤول، واحتفظ برسالة الفدية ومعلومات الوقت، واستعد نسخة نظيفة بعد التقييم."},
      {id:"incident-exposed-key",category:"incident",difficulty:"advanced",title:"مفتاح API ظهر داخل مستودع برمجي",scene:"اكتشفت أن مفتاح API حقيقيًا ظهر في سجل مستودع برمجي مشترك، ثم حذفت السطر من آخر نسخة لكن السجل ما زال يحتويه.",question:"ما الإجراء الأول الصحيح؟",options:[
        {text:"الاكتفاء بحذف السطر من أحدث نسخة",correct:false,feedback:"قد يبقى المفتاح في سجل التعديلات والنسخ والمخابئ؛ الحذف وحده لا يلغي صلاحيته."},
        {text:"إبطال المفتاح أو تدويره فورًا، ثم مراجعة الاستخدام وإزالة السر من السجل وفق الإجراءات",correct:true,feedback:"صحيح. اعتبر المفتاح مكشوفًا؛ ألغِه، افحص سجلات الاستخدام، وانقل الأسرار إلى مخزن مناسب."},
        {text:"جعل المستودع خاصًا وترك المفتاح فعالًا",correct:false,feedback:"قد يكون المفتاح قد نُسخ بالفعل؛ تغيير الخصوصية لا يلغي المفتاح المكشوف."},
        {text:"إرسال المفتاح الجديد في المحادثة نفسها للفريق كله",correct:false,feedback:"لا تنشر الأسرار في المحادثات؛ استخدم مخزن أسرار أو قناة معتمدة."}],action:"أبطل المفتاح المكشوف، تحقق من سجلات الاستعمال، ثم استخدم متغيرات البيئة أو مخزن أسرار ولا تخزن المفاتيح في المستودع."},
      {id:"incident-sql-input",category:"incident",difficulty:"intermediate",title:"حقل بحث يركّب استعلام قاعدة البيانات",scene:"أنت تطوّر موقعًا وتلاحظ أن الكود يضمّن نص البحث مباشرة داخل عبارة SQL بدل تمريره كقيمة منفصلة.",question:"أي تحسين يخفف خطر SQL Injection؟",options:[
        {text:"الاعتماد على إخفاء زر البحث عن الزوار",correct:false,feedback:"إخفاء عنصر الواجهة ليس حماية؛ يمكن إرسال الطلب إلى الخادم بوسائل أخرى."},
        {text:"استخدام استعلامات مُعلّمة أو معاملات مُحضّرة والتحقق من المدخلات",correct:true,feedback:"صحيح. افصل قيم المستخدم عن بنية الاستعلام واستخدم واجهات قاعدة البيانات الآمنة."},
        {text:"السماح للمدير فقط بإرسال نصوص البحث دون حدود",correct:false,feedback:"حتى المدخلات الداخلية يجب التعامل معها بطريقة آمنة، كما أن الحسابات الإدارية أعلى خطورة."},
        {text:"إزالة المسافات من النص فقط",correct:false,feedback:"تنظيف بسيط كهذا لا يمنع جميع أشكال حقن SQL."}],action:"استخدم parameterized queries، وطبّق أقل صلاحيات لحساب قاعدة البيانات، واختبر التطبيق في بيئة تملكها أو مخوّل لك استخدامها."},
      {id:"incident-vulnerability-update",category:"incident",difficulty:"intermediate",title:"تحديث أمني لتطبيق مهم",scene:"أعلن مطور برنامج تستخدمه عن تحديث يعالج ثغرة أمنية معروفة. أنت تؤجل التحديث لأن البرنامج يعمل حاليًا.",question:"ما أفضل إجراء عام؟",options:[
        {text:"تجاهل التحديث ما دام البرنامج لا يظهر مشكلة",correct:false,feedback:"الثغرات قد لا تظهر للمستخدم، لكنها قد تتيح هجومًا عند استغلالها."},
        {text:"التحقق من الإعلان الرسمي وتطبيق التحديث وفق خطة مناسبة بأقرب وقت",correct:true,feedback:"صحيح. تحقق من المصدر الرسمي، واختبر التحديثات المهمة وفق بيئتك دون تأخير غير مبرر."},
        {text:"تنزيل ملف تحديث من رابط في تعليق مجهول",correct:false,feedback:"قد يكون الرابط مزيفًا؛ نزّل التحديث من مصدر المطور الرسمي."},
        {text:"تعطيل جدار الحماية حتى يكتمل التحديث",correct:false,feedback:"تعطيل وسائل الحماية دون حاجة يزيد التعرض ولا يعد جزءًا مطلوبًا من تحديث سليم."}],action:"تحقق من التحديث عبر المصدر الرسمي، خذ نسخة احتياطية عند الحاجة، وطبّق التحديث وفق إجراءات النظام."},
      {id:"incident-backup-restore",category:"incident",difficulty:"advanced",title:"نسخ احتياطي موجود لكنه لم يُختبر",scene:"لديك نسخة احتياطية من ملفاتك المهمة، لكنك لم تجرّب استعادتها قط. اليوم تحتاج ملفًا قديمًا بشكل عاجل.",question:"كيف تعرف أن خطة النسخ الاحتياطي مفيدة فعلًا؟",options:[
        {text:"افتراض أن النسخة صالحة لمجرد وجودها",correct:false,feedback:"قد تكون النسخة تالفة أو ناقصة أو غير قابلة للاستعادة؛ وجودها وحده لا يكفي."},
        {text:"اختبار استعادة عيّنة في بيئة آمنة والتحقق من سلامة الملفات",correct:true,feedback:"صحيح. اختبر الاستعادة دوريًا وتأكد من أن النسخ منفصلة ومحميّة ويمكن الوصول إليها عند الحاجة."},
        {text:"وضع النسخة الوحيدة على الجهاز نفسه فقط",correct:false,feedback:"قد تتأثر النسخة مع الجهاز نفسه بسبب عطل أو برمجية فدية."},
        {text:"حذف النسخ القديمة دون سياسة أو مراجعة",correct:false,feedback:"الحذف العشوائي قد يلغي النسخ التي تحتاجها؛ اتبع سياسة احتفاظ وراجع الاستعادة."}],action:"اختبر الاستعادة دوريًا، واحتفظ بنسخة منفصلة ومحمية، ووثّق خطوات استعادة البيانات."}
    ];

    // EXPANSION PACK — 35 additional scenarios (65 total).
    // Each record: id, category, difficulty, title, scene, question,
    // correct answer, [three distractors], explanation, practical action.
    const extraScenarios = [
      ["phish-qr-payment","phishing","intermediate","رمز QR لدفع رسوم","وصلتك رسالة تطلب دفع رسوم توصيل عبر رمز QR ورابط مختصر، مع تحذير بأن الطلب سينتهي خلال دقائق.","ما الخطوة الأكثر أمانًا؟","التحقق من الطلب داخل التطبيق أو الموقع الرسمي قبل الدفع",["الدفع فورًا لتجنب انتهاء الطلب","إدخال بيانات البطاقة في الرابط المختصر","إرسال رمز البنك للمرسل"],"الضغط الزمني والروابط المختصرة لا يثبتان أن الطلب حقيقي. تحقق من داخل الخدمة التي تعرفها.","لا تدفع عبر الرابط الوارد؛ افتح تطبيق الشركة بنفسك وتأكد من وجود الطلب."],
      ["phish-job-offer","phishing","beginner","عرض عمل يطلب رسوم تسجيل","حساب ينشر وظائف يَعِدك بقبول فوري، لكنه يطلب رسومًا وصورة هويتك قبل مقابلة أو عقد رسمي.","كيف تقيّم العرض؟","التحقق من الشركة عبر قنواتها الرسمية وعدم دفع رسوم أو إرسال وثائق حساسة مبكرًا",["دفع الرسوم لأن الوظيفة مضمونة","إرسال الهوية ثم سؤالهم عن التفاصيل","مشاركة بيانات البنك لإثبات الجدية"],"الوعود المضمونة وطلب المال أو الوثائق مبكرًا إشارات تستحق التحقق، وليست دليلًا قاطعًا وحدها.","ابحث عن الوظيفة على الموقع الرسمي وتواصل مع جهة التوظيف عبر بيانات مستقلة."],
      ["phish-attachment","phishing","intermediate","مرفق غير متوقع","وصل ملف باسم فاتورة من عنوان لا تعرفه، والرسالة تضغط عليك لفتحه وتمكين المحتوى.","ما التصرف الأنسب؟","التحقق من المرسل عبر قناة مستقلة وعدم تمكين المحتوى قبل التأكد",["فتح الملف لأن اسمه فاتورة","تعطيل مضاد الفيروسات إذا منع فتحه","إعادة توجيه الملف للزملاء لمعرفة رأيهم"],"المرفقات غير المتوقعة قد تحتوي على محتوى ضار. لا تتجاوز تحذيرات الحماية.","أبلغ عن الرسالة، وافحص المرفق بإجراءات مؤسستك دون فتحه على جهازك الأساسي."],
      ["phish-social-giveaway","phishing","beginner","مسابقة تطلب كلمة المرور","حساب يعلن عن جائزة كبيرة ويطلب تسجيل الدخول بكلمة مرور حسابك عبر نموذج خارجي لاستلامها.","ما الذي ينبغي فعله؟","عدم إدخال كلمة المرور والتحقق من المسابقة عبر الحساب الرسمي",["إدخال كلمة المرور ثم تغييرها بعد الفوز","استخدام كلمة المرور نفسها لأن النموذج مؤقت","إرسال رمز التحقق بدل كلمة المرور"],"المسابقات الشرعية لا تحتاج عادةً إلى كلمة مرور حسابك عبر نموذج مجهول.","أغلق النموذج وأبلغ عن الحساب إذا تبيّن أنه ينتحل جهة معروفة."],
      ["phish-business-email","phishing","advanced","تغيير بيانات التحويل","وصل بريد يبدو من مديرك يطلب تحويل دفعة إلى حساب جديد، ويطلب إبقاء الأمر سرًا حتى نهاية اليوم.","كيف تتحقق من الطلب؟","تأكيد التغيير عبر إجراء معروف وقناة اتصال مستقلة قبل أي تحويل",["الرد على البريد نفسه فقط","التحويل لأن اسم المدير ظاهر","إرسال بيانات الدخول للتأكد من الحساب"],"طلبات الدفع العاجلة أو السرية قد تكون احتيالًا بالبريد التجاري؛ تحقق خارج سلسلة الرسائل.","اتبع سياسة الموافقات المالية واتصل برقم معروف مسبقًا لتأكيد بيانات المستفيد."],
      ["accounts-mfa-fatigue","accounts","advanced","إشعارات دخول متكررة","تصل إلى هاتفك طلبات موافقة لتسجيل الدخول لم تبدأها أنت، وتتكرر حتى تصبح مزعجة.","ما الإجراء الأفضل؟","رفض الطلبات وعدم الموافقة، ثم تغيير كلمة المرور والتحقق من نشاط الحساب",["الموافقة لإيقاف الإشعارات","إرسال لقطة الشاشة للمتصل الذي يدعي الدعم","تعطيل المصادقة متعددة العوامل نهائيًا"],"قد تكون الطلبات المتكررة محاولة لدفعك للموافقة بالخطأ؛ لا توافق على دخول لم تبدأه.","ارفض الطلبات، غيّر كلمة المرور من الموقع الرسمي، وأنهِ الجلسات المشبوهة وأبلغ الدعم."],
      ["accounts-password-reuse","accounts","beginner","كلمة مرور واحدة لكل المواقع","تستخدم كلمة مرور واحدة في البريد والألعاب والتسوق لأنها سهلة التذكر.","ما التغيير الأهم؟","استخدام كلمة مرور فريدة لكل حساب مع مدير كلمات مرور موثوق",["إضافة رقم واحد في نهاية الكلمة نفسها بكل موقع","تغيير لون المتصفح","كتابة كل كلمات المرور في ملف نصي غير محمي"],"تكرار كلمة المرور يسمح بأن يؤدي تسرب موقع واحد إلى تعريض حسابات أخرى للخطر.","ابدأ بالبريد والحسابات المالية، واستخدم كلمات فريدة وطويلة ومصادقة متعددة العوامل."],
      ["accounts-recovery-email","accounts","intermediate","بريد الاسترداد قديم","اكتشفت أن بريد الاسترداد لحسابك يعود إلى عنوان لم تعد تملكه.","ما الأولوية؟","تحديث خيارات الاسترداد إلى وسيلة تملكها وتأمينها",["تركه لأن كلمة المرور قوية","نشر عنوان البريد القديم لطلب المساعدة","تعطيل كل وسائل الاسترداد دون بديل"],"وسائل الاسترداد جزء أساسي من أمان الحساب وقد تسمح باستعادته لشخص آخر.","حدّث البريد ورقم الهاتف، واحفظ رموز الاسترداد في مكان آمن."],
      ["accounts-session-open","accounts","intermediate","جلسة مفتوحة على جهاز عام","سجلت الدخول إلى بريدك على جهاز في مكتبة، ثم غادرت وتذكرت أنك لم تسجل الخروج.","ماذا تفعل؟","استخدم جهازك لإلغاء الجلسة وتغيير كلمة المرور إذا تعذر التأكد من الخروج",["الانتظار حتى تنتهي الجلسة وحدها","إرسال كلمة المرور إلى موظف المكتبة","تجاهل الأمر لأن الجهاز عام"],"يمكنك غالبًا مراجعة الجلسات النشطة وإغلاقها من إعدادات الحساب.","ألغِ الجلسة من صفحة الأمان، ولا تحفظ كلمات المرور على الأجهزة العامة."],
      ["accounts-sim-swap","accounts","advanced","فقدان مفاجئ لخدمة الهاتف","توقفت شريحة هاتفك فجأة، ثم وصلتك تنبيهات عن محاولات دخول لحسابات تستخدم رقمك للاسترداد.","ما التصرف العاجل؟","الاتصال بمشغل الاتصالات عبر رقم رسمي وتأمين الحسابات من جهاز موثوق",["مشاركة رموز الاسترداد مع أي متصل","انتظار يومين دون فحص الحسابات","نشر رقمك الكامل على مواقع التواصل"],"فقدان الخدمة مع تنبيهات دخول يستحق التعامل معه كحادث محتمل، دون افتراض السبب قبل التحقق.","تواصل مع شركة الاتصالات رسميًا، واستخدم وسائل استرداد بديلة، وراجع جلسات الحسابات المهمة."],
      ["devices-fake-update","devices","beginner","نافذة تحديث مفاجئة","أثناء التصفح تظهر نافذة تقول إن المتصفح قديم وتطلب تنزيل ملف من موقع غير معروف.","ما القرار الآمن؟","إغلاق النافذة وتحديث المتصفح من إعداداته أو موقعه الرسمي",["تنزيل الملف لأن الرسالة عاجلة","إيقاف الحماية لتثبيت الملف","إعطاء النافذة صلاحيات المدير"],"الإعلانات قد تقلّد رسائل التحديث؛ استخدم آلية التحديث المدمجة أو المصدر الرسمي.","لا تثبّت الملف من النافذة، وافحص الجهاز إذا كنت قد شغّلته بالفعل."],
      ["devices-usb-found","devices","intermediate","ذاكرة USB مجهولة","وجدت ذاكرة USB في الجامعة وعليها ملصق يقول إنها تحتوي على ملفات مهمة.","ما التصرف الأنسب؟","عدم توصيلها بجهازك وتسليمها لمسؤول تقنية المعلومات",["فتحها لمعرفة صاحبها","توصيلها بجهاز العمل فقط","نسخ الملفات قبل فحصها"],"وسائط التخزين المجهولة قد تحتوي على ملفات ضارة أو تستغل الجهاز بمجرد توصيلها.","سلّمها للمسؤول المختص واتبع سياسة التعامل مع الوسائط المجهولة."],
      ["devices-app-permissions","devices","beginner","تطبيق مصباح يطلب جهات الاتصال","تطبيق بسيط لتشغيل المصباح يطلب الوصول إلى جهات الاتصال والميكروفون والموقع.","كيف تتصرف؟","رفض الأذونات غير اللازمة واختيار تطبيق موثوق",["السماح بكل شيء لتسريع التثبيت","منح الأذونات لأن التطبيق مجاني","تعطيل قفل الهاتف بدلًا من ذلك"],"ينبغي أن تتناسب الأذونات مع وظيفة التطبيق؛ الأذونات الزائدة تزيد جمع البيانات بلا حاجة واضحة.","راجع الأذونات من إعدادات النظام واحذف التطبيق إذا لم يكن موثوقًا أو ضروريًا."],
      ["devices-lost-phone","devices","intermediate","هاتف مفقود","فقدت هاتفك وفيه بريدك وصورك وتطبيقات مالية، ولا تعرف إن كان مقفلًا.","ما الخطوة الأولى المناسبة؟","استخدام خدمة العثور الرسمية لقفله أو مسحه وتأمين الحسابات المهمة",["إرسال كلمة المرور إلى من يعثر عليه","ترك الحسابات مفتوحة حتى يعود الهاتف","نشر رموز الاسترداد على حسابك"],"التصرف السريع يقلل الوصول غير المصرح به، مع الحفاظ على وسائل استرداد الحسابات.","اقفل الجهاز عن بُعد إن أمكن، واتصل بالمشغل عند الحاجة، وراجع جلسات الحسابات."],
      ["devices-macro-document","devices","advanced","ملف يطلب تمكين وحدات الماكرو","أرسل لك مستند عمل غير متوقع يطلب تمكين وحدات الماكرو كي تظهر محتوياته.","ما التصرف الأكثر أمانًا؟","التحقق من المرسل والحاجة الفعلية عبر قناة مستقلة قبل التمكين",["تمكينها لأن المستند يبدو رسميًا","تعطيل مضاد الفيروسات","إرسال الملف إلى جميع الزملاء"],"تمكين المحتوى النشط من ملف غير موثوق قد ينفذ تعليمات ضارة.","لا تمكّن المحتوى حتى يؤكد المرسل والجهة المختصة أن الملف متوقع وآمن."],
      ["devices-encryption-backup","devices","intermediate","حاسوب يحوي بيانات حساسة","تسافر بحاسوب محمول عليه ملفات شخصية ومشاريع، وقد تضطر لتركه دون مراقبة.","ما الذي يقلل أثر فقدانه؟","تفعيل تشفير القرص وقفل قوي ونسخ احتياطي محمي",["إخفاء الملفات داخل مجلد باسم عادي فقط","إزالة كلمة مرور الدخول لتسهيل الاستعادة","حفظ النسخة الاحتياطية على الجهاز نفسه فقط"],"التشفير والقفل والنسخ الاحتياطي المحمي تقلل مخاطر الوصول وفقدان البيانات.","فعّل التشفير المتاح، واستخدم قفلًا قويًا، وتأكد من أن النسخة الاحتياطية منفصلة وآمنة."],
      ["network-public-wifi","network","beginner","شبكة Wi-Fi عامة","تحتاج الدخول إلى حساب مهم في مقهى، والشبكة العامة لا تعرف من يديرها.","ما الخيار الأفضل؟","استخدام اتصال موثوق أو بيانات الهاتف وتجنب الشبكات غير الموثوقة للمهام الحساسة",["تعطيل قفل الشاشة","إيقاف التحقق متعدد العوامل","استخدام أي شبكة تحمل اسم المقهى دون تحقق"],"الشبكات العامة قد تكون مزيفة أو غير آمنة؛ HTTPS لا يجعل كل المخاطر مستحيلة.","استخدم بيانات الهاتف أو شبكة موثوقة، وتأكد من اسم الشبكة من الموظفين عند الحاجة."],
      ["network-router-admin","network","intermediate","كلمة مرور الراوتر الافتراضية","ما زال حساب إدارة الراوتر يستخدم بيانات الدخول المطبوعة افتراضيًا، ولم تُراجع إعداداته منذ سنوات.","ما الإجراء المناسب؟","تغيير بيانات الإدارة وتحديث البرنامج الثابت ومراجعة إعدادات الأمان",["نشر بيانات الدخول لأفراد المنزل جميعًا","إخفاء اسم الشبكة فقط","ترك الإعدادات كما هي لأن الإنترنت يعمل"],"بيانات الإدارة الافتراضية معروفة وقد تسهّل تغيير إعدادات الشبكة دون إذن.","ادخل إلى واجهة الإدارة الرسمية وغيّر بيانات الدخول وحدّث الراوتر وفق تعليمات الشركة."],
      ["network-hotspot-evil-twin","network","advanced","نقطة اتصال باسم مشابه","تظهر شبكتان باسم متشابه جدًا في محطة عامة، وإحداهما مفتوحة دون كلمة مرور.","كيف تقلل احتمال الاتصال بالشبكة المزيفة؟","تأكد من الاسم مع الجهة المسؤولة وتجنب إدخال بيانات حساسة على شبكة مجهولة",["اختيار الشبكة الأقوى إشارة دائمًا","تعطيل VPN أو الحماية قبل الاتصال","تسجيل الدخول بكل الحسابات لاختبار الشبكة"],"قوة الإشارة واسم الشبكة لا يكفيان لإثبات هويتها؛ قد تُنشأ نقطة اتصال مقلدة.","تحقق من الاسم من مصدر موثوق واستخدم اتصالًا بديلًا للمهام الحساسة."],
      ["network-iot-default","network","intermediate","كاميرا منزلية بكلمة مرور افتراضية","ركبت كاميرا ذكية وما زالت تستخدم كلمة مرور الشركة المصنعة، ولم تحدّث برنامجها منذ الشراء.","ما التحسين الأول؟","تغيير كلمة المرور الافتراضية وتحديث الجهاز وتعطيل الوصول غير الضروري",["نشر عنوان الكاميرا للعامة","ترك الحساب الافتراضي لأن الجهاز جديد","إعطاء التطبيق كل أذونات الهاتف"],"الأجهزة المتصلة بالإنترنت تحتاج إعدادًا آمنًا وتحديثات مثل الحواسيب والهواتف.","غيّر بيانات الدخول، حدّث الجهاز، وراجع إعدادات الوصول عن بُعد والخصوصية."],
      ["network-bluetooth","network","beginner","Bluetooth مفتوح دائمًا","تستخدم سماعات لاسلكية، لكن هاتفك يبقى قابلًا للاكتشاف في الأماكن العامة طوال الوقت.","ما الممارسة الأفضل؟","إيقاف الاكتشاف والاتصالات غير اللازمة ومراجعة الأجهزة المقترنة",["قبول كل طلب اقتران","استخدام PIN منشور على الإنترنت","تعطيل تحديث الهاتف"],"تقليل قابلية الاكتشاف ورفض طلبات الاقتران غير المتوقعة يقلل التعرض غير الضروري.","أوقف Bluetooth عندما لا تحتاجه، واحذف الأجهزة القديمة التي لم تعد تستخدمها."],
      ["network-remote-access","network","advanced","طلب وصول عن بُعد غير متوقع","وصلتك رسالة تطلب تثبيت برنامج تحكم عن بُعد لمساعدة شخص لا تعرفه في حل مشكلة حسابك.","ما القرار الصحيح؟","عدم تثبيت الأداة أو منح الوصول إلا عبر دعم موثوق بدأت التواصل معه بنفسك",["تثبيتها لأن المتصل يبدو خبيرًا","إعطاء رمز الجلسة لأي شخص يدّعي الدعم","ترك الجهاز مفتوحًا أثناء المكالمة"],"أدوات التحكم عن بعد تمنح وصولًا واسعًا؛ المحتال قد يستخدمها لعرض البيانات أو التحكم بالجهاز.","أنه التواصل وتواصل مع الدعم عبر الموقع الرسمي، وأزل أي أداة غير معتمدة."],
      ["privacy-location-metadata","privacy","intermediate","صورة تكشف موقع المنزل","التقطت صورة داخل المنزل وتريد نشرها، وقد تحتوي الصورة على معلومات موقع أو تفاصيل تكشف عنوانك.","ما الخطوة المفيدة قبل النشر؟","مراجعة البيانات الوصفية والخلفية وإزالة المعلومات التي تكشف الموقع عند الحاجة",["نشر الصورة بدقة أعلى لتوضيح التفاصيل","إضافة عنوان المنزل إلى الوصف","افتراض أن كل منصة تحذف البيانات تلقائيًا"],"قد تكشف الصور تفاصيل أكثر من المشهد الظاهر، ويختلف تعامل المنصات مع البيانات الوصفية.","راجع إعدادات الكاميرا والمنصة وافحص الخلفية قبل مشاركة الصور."],
      ["privacy-app-tracking","privacy","beginner","تطبيق يطلب تتبعًا دائمًا","تطبيق تسوق يطلب السماح بتتبع نشاطك عبر التطبيقات والمواقع حتى عندما لا تستخدمه.","كيف تتخذ قرارًا واعيًا؟","راجع الغرض وسياسة الخصوصية وارفض التتبع غير الضروري",["الموافقة لأن التطبيق مشهور","منح كل التطبيقات التتبع نفسه","إدخال بيانات إضافية لإلغاء النافذة"],"الشهرة لا تعني أن كل إذن ضروري؛ اختر الحد الأدنى الذي يناسب حاجتك.","راجع الأذونات وإعدادات الخصوصية دوريًا، وغيّرها من إعدادات الجهاز."],
      ["privacy-public-document","privacy","intermediate","مستند يحتوي بيانات مخفية","قبل إرسال ملف إلى عميل، تكتشف أنه يحتوي على تعليقات داخلية وسجل تغييرات وأسماء مؤلفين.","ما الأفضل؟","فحص البيانات الوصفية والتعليقات وسجل التغييرات وإزالة ما لا ينبغي مشاركته",["تغيير اسم الملف فقط","إرسال الملف ثم طلب تجاهل التعليقات","تحويله إلى PDF دون مراجعة المحتوى"],"قد تبقى معلومات داخلية في التعليقات والبيانات الوصفية حتى لو لم تظهر في العرض العادي.","استخدم أدوات الفحص والإزالة في البرنامج وراجع النسخة النهائية قبل إرسالها."],
      ["privacy-ai-hallucination","privacy","advanced","إجابة ذكاء اصطناعي تبدو واثقة","أداة ذكاء اصطناعي تعطيك تعليمات أمنية وتذكر مصدرًا لا تستطيع العثور عليه.","كيف تستخدم النتيجة بمسؤولية؟","التحقق من الادعاءات والمصادر الموثوقة قبل تطبيق التعليمات",["تنفيذ الأوامر فورًا لأنها مكتوبة بثقة","إدخال أسرار المشروع ليحسن الإجابة","افتراض أن ذكر اسم مصدر يعني أنه موجود"],"قد تنتج أنظمة الذكاء الاصطناعي معلومات غير دقيقة أو مراجع غير صحيحة؛ الثقة في الصياغة ليست دليلًا.","راجع المصادر الرسمية واختبر الخطوات في بيئة آمنة قبل استخدامها على نظام حقيقي."],
      ["privacy-data-retention","privacy","intermediate","تطبيق يحتفظ ببيانات أكثر من الحاجة","تطبيق قديم ما زال يحتفظ بنسخ من مستنداتك وبيانات موقعك رغم أنك لم تعد تستخدمه.","ما النهج الأفضل؟","مراجعة إعدادات الاحتفاظ وحذف البيانات غير اللازمة وفق الخيارات والسياسات المتاحة",["ترك البيانات إلى الأبد لأن التخزين رخيص","نشر نسخة من البيانات للاحتفاظ بها","إعطاء التطبيق أذونات إضافية"],"تقليل البيانات المحتفظ بها يقلل ما قد ينكشف عند التسرب، مع مراعاة متطلبات الاحتفاظ القانونية أو العملية.","راجع إعدادات الحساب واطلب حذف البيانات غير اللازمة من القنوات الرسمية عند توفر ذلك."],
      ["privacy-screen-sharing","privacy","beginner","مشاركة شاشة أثناء اجتماع","تشارك شاشتك لشرح مشكلة، وتظهر إشعارات ورسائل خاصة في زاوية الشاشة.","كيف تمنع التسرب العرضي؟","إغلاق الإشعارات والتطبيقات الخاصة ومشاركة نافذة محددة بدل الشاشة كلها",["عرض كل النوافذ لتوفير الوقت","قراءة الرسائل الخاصة بصوت عالٍ","إرسال كلمة مرورك للمشاركين"],"المشاركة المحددة والتحضير المسبق يقللان ظهور معلومات لا تخص الاجتماع.","فعّل وضع عدم الإزعاج واختبر الشاشة قبل المشاركة."],
      ["incident-suspicious-login","incident","beginner","تنبيه دخول من مكان غير مألوف","تلقيت إشعارًا عن تسجيل دخول لم تقم به إلى حساب بريدك.","ما الذي ينبغي فعله؟","افتح صفحة الأمان الرسمية وراجع الجلسات ثم أمّن الحساب",["الضغط على رابط في الرسالة دون فحصه","تجاهل التنبيه لأنه قد يكون خطأ دائمًا","إرسال رمز التحقق للمرسل"],"قد يكون التنبيه صحيحًا أو مزيفًا؛ تحقق من داخل الخدمة الرسمية بدل رابط الرسالة.","أنه الجلسات غير المعروفة وغيّر كلمة المرور إذا تأكدت محاولة غير مصرح بها، وفعّل MFA."],
      ["incident-device-infected","incident","intermediate","برنامج مجهول بدأ بعد تنزيله","نزّلت ملفًا من موقع غير معروف، وبعد تشغيله أصبح الجهاز بطيئًا وظهرت نوافذ غريبة.","ما التصرف الأول المعقول؟","افصل الجهاز عن الشبكة عند الاشتباه واطلب فحصًا بأداة موثوقة أو دعم مختص",["تنزيل أدوات عشوائية إضافية","إدخال كلمات مرورك لاختبارها","تجاهل الأعراض وتوصيل أقراص النسخ الاحتياطي"],"الأعراض لا تثبت وحدها نوع الإصابة، لكن تجنب زيادة الضرر واحصل على فحص موثوق.","لا تستخدم الجهاز للمهام الحساسة حتى يتم تقييمه، وغيّر كلمات المرور من جهاز موثوق إذا لزم."],
      ["incident-data-leak","incident","advanced","أرسلت ملفًا للشخص الخطأ","أرسلت بريدًا فيه بيانات عمل إلى مستلم غير مقصود، واكتشفت الخطأ بعد دقائق.","ما الإجراء المناسب؟","إبلاغ المسؤول أو فريق الخصوصية سريعًا واتباع إجراءات الاحتواء",["حذف الرسالة من صندوقك والسكوت","طلب كلمة مرور المستلم","نشر تفاصيل الملف على وسائل التواصل"],"الإبلاغ المبكر يساعد على تحديد الأثر والالتزامات وخيارات الاحتواء؛ لا تخفِ الحادث.","أبلغ عبر القناة الرسمية، واذكر نوع البيانات والوقت والمستلمين دون إعادة نشر الملف."],
      ["incident-logs-evidence","incident","advanced","سجلات قد تساعد في التحقيق","لاحظت نشاطًا غير طبيعي على خادم تملكه، وتفكر في حذف السجلات لتوفير مساحة قبل أن يفحصها أحد.","ما الممارسة الأنسب؟","حفظ السجلات ذات الصلة بشكل آمن وتوثيق الوقت وإبلاغ المسؤول المختص",["حذف كل السجلات فورًا","تعديل السجلات لتبدو طبيعية","نشر السجلات العامة بما فيها الأسرار"],"السجلات قد تكون مهمة لفهم ما حدث؛ يجب حفظها وفق السياسة مع حماية المعلومات الحساسة.","اتبع خطة الاستجابة وحافظ على الأدلة وسلسلة التعامل معها دون تعديل غير ضروري."],
      ["incident-access-least-privilege","incident","intermediate","كل المطورين يملكون صلاحية المدير","مشروع صغير يمنح جميع أعضاء الفريق صلاحيات إدارية كاملة حتى لا تتعطل أعمالهم.","ما التحسين الأمني الأفضل؟","منح كل شخص أقل صلاحية يحتاجها ومراجعتها دوريًا",["إعطاء الجميع كلمة مرور المدير المشتركة","إخفاء صفحة الإدارة من القائمة فقط","إلغاء السجلات لتقليل التنبيهات"],"تقليل الصلاحيات يحد من أثر الخطأ أو اختراق حساب، مع الحفاظ على قدرة كل شخص على أداء عمله.","قسّم الأدوار، استخدم حسابات فردية، وراجع الصلاحيات عند تغير مسؤوليات الفريق."],
      ["incident-web-input-validation","incident","advanced","نموذج يقبل مدخلات غير متوقعة","تطوّر نموذجًا على موقعك، وتلاحظ أنه يقبل بيانات غير منطقية ويرسلها مباشرة إلى قاعدة البيانات.","ما مجموعة الإجراءات المناسبة؟","التحقق من المدخلات على الخادم واستخدام استعلامات معلّمة واختبارات آمنة",["الاعتماد على التحقق في المتصفح فقط","إخفاء حقل النموذج باستخدام CSS","منع المسافات فقط واعتبار المشكلة محلولة"],"التحقق في المتصفح يحسن تجربة المستخدم لكنه لا يحمي الخادم وحده؛ يجب التحقق من جهة الخادم.","طبّق تحققًا على الخادم واستعلامات معلّمة واختبر فقط بيئة تملكها أو لديك إذن لاختبارها."],
      ["incident-backup-ransomware","incident","intermediate","نسخة احتياطية متصلة دائمًا","تحتفظ بنسختك الاحتياطية على قرص متصل بالحاسوب طوال الوقت.","كيف تجعل النسخة أكثر قدرة على الصمود؟","الاحتفاظ بنسخ منفصلة أو غير متصلة ومحمية واختبار الاستعادة",["توصيل مزيد من الأقراص بالجهاز نفسه","مشاركة النسخة برابط عام","تعطيل كلمة مرور النسخة الاحتياطية"],"قد تصل بعض الحوادث إلى النسخ المتصلة؛ الفصل والحماية واختبار الاستعادة عناصر مهمة.","طبّق خطة نسخ متعددة، واحمِ الوصول إليها، واختبر استعادة عينة دوريًا."]
    ];

    extraScenarios.forEach((entry) => {
      const [id, category, difficulty, title, scene, question, correctText, wrongTexts, explanation, action] = entry;
      scenarios.push({
        id, category, difficulty, title, scene, question,
        options: [
          {text: correctText, correct: true, feedback: explanation},
          ...wrongTexts.map((text, index) => ({
            text,
            correct: false,
            feedback: [
              "هذا الاختيار يتجاوز خطوة التحقق وقد يزيد الخطر بدل تقليله.",
              "هذا الإجراء لا يثبت موثوقية المصدر ولا يحمي البيانات من الوصول غير المصرح به.",
              "لا تشارك كلمات المرور أو رموز التحقق أو المعلومات الحساسة مع جهة غير متحقق منها."
            ][index]
          }))
        ],
        action
      });
    });

    const CATEGORY_LABELS = {
      phishing:"التصيّد والاحتيال",
      accounts:"الحسابات والهوية",
      devices:"الأجهزة والملفات",
      network:"الشبكات والاتصال",
      privacy:"الخصوصية والذكاء الاصطناعي",
      incident:"الحوادث وأمن التطبيقات"
    };
    const DIFFICULTY_LABELS = {beginner:"مبتدئ", intermediate:"متوسط", advanced:"متقدم"};
    const LAB_STORAGE_KEY = "techpath.cyberChallengeLab.v1";
    const defaultStats = () => ({sessions:0, answered:0, correct:0, best:0, recent:[]});
    let stats = defaultStats();
    try {
      const stored = JSON.parse(localStorage.getItem(LAB_STORAGE_KEY) || "null");
      if (stored && typeof stored === "object") {
        stats = {
          sessions: Number.isFinite(stored.sessions) ? stored.sessions : 0,
          answered: Number.isFinite(stored.answered) ? stored.answered : 0,
          correct: Number.isFinite(stored.correct) ? stored.correct : 0,
          best: Number.isFinite(stored.best) ? stored.best : 0,
          recent: Array.isArray(stored.recent) ? stored.recent.filter((id) => typeof id === "string") : []
        };
      }
    } catch (_) { /* Local storage may be unavailable; the lab still works in memory. */ }

    const lab = document.createElement("section");
    lab.id = "cyberChallengeLab";
    lab.setAttribute("aria-labelledby", "cyberChallengeTitle");
    lab.innerHTML = `
      <header class="tc-header">
        <p class="tc-kicker">[ PRACTICAL DEFENSIVE SIMULATOR / 65 SCENARIOS ]</p>
        <h2 class="tc-title" id="cyberChallengeTitle">مختبر <span>التحديات العملية</span></h2>
        <p class="tc-lead">هنا ما رح تكتفي بقراءة المعلومة؛ رح تواجه موقفًا يشبه ما قد يحدث في الحياة الرقمية، وتختار التصرف الأنسب. بعد كل إجابة ستعرف السبب والخطوة العملية الصحيحة. كل السيناريوهات تدريبية ولا تتصل بأي نظام حقيقي.</p>
      </header>
      <div class="tc-stats" aria-label="إحصاءات المختبر">
        <div class="tc-stat"><span>جلسات مكتملة</span><strong id="tcStatSessions">0</strong></div>
        <div class="tc-stat"><span>نسبة الإجابات الصحيحة</span><strong id="tcStatAccuracy">—</strong></div>
        <div class="tc-stat"><span>أفضل نتيجة</span><strong id="tcStatBest">—</strong></div>
        <div class="tc-stat"><span>عدد الإجابات</span><strong id="tcStatAnswered">0</strong></div>
      </div>
      <div class="tc-controls">
        <div class="tc-field">
          <label for="tcCategory">مجال التحديات</label>
          <select id="tcCategory">
            <option value="all">كل المجالات — تحديات متنوعة</option>
            <option value="phishing">التصيّد والاحتيال</option>
            <option value="accounts">الحسابات والهوية</option>
            <option value="devices">الأجهزة والملفات</option>
            <option value="network">الشبكات والاتصال</option>
            <option value="privacy">الخصوصية والذكاء الاصطناعي</option>
            <option value="incident">الحوادث وأمن التطبيقات</option>
          </select>
        </div>
        <div class="tc-field">
          <label for="tcQuestionCount">عدد أسئلة الجلسة</label>
          <select id="tcQuestionCount">
            <option value="5">5 أسئلة — سريعة</option>
            <option value="10" selected>10 أسئلة — متوازنة</option>
            <option value="15">15 سؤالًا — موسعة</option>
            <option value="20">20 سؤالًا — مكثفة</option>
          </select>
        </div>
        <div class="tc-field">
          <label for="tcDifficulty">مستوى الصعوبة</label>
          <select id="tcDifficulty">
            <option value="all">كل المستويات</option>
            <option value="beginner">مبتدئ — الأساسيات</option>
            <option value="intermediate">متوسط — تحليل الموقف</option>
            <option value="advanced">متقدم — قرار أمني أدق</option>
          </select>
        </div>
        <button type="button" class="tc-primary" id="tcStart">ابدأ جلسة التحديات ←</button>
      </div>
      <p class="tc-controls-note" id="tcPoolNote">اختَر طول الجلسة من 5 إلى 20 تحديًا. تُسحب الأسئلة عشوائيًا مع تقليل تكرار آخر التحديات على هذا المتصفح، وتظهر مراجعة لنتيجتك بعد الانتهاء.</p>
      <div class="tc-workspace" id="tcWorkspace" aria-live="polite">
        <div class="tc-empty">
          <p class="tc-kicker">[ READY WHEN YOU ARE ]</p>
          <h3>هل تستطيع اتخاذ القرار الصحيح تحت الضغط؟</h3>
          <p>اختَر المجال والمستوى أو اتركهما كما هما لتبدأ بجلسة متنوعة. كل موقف يختبر طريقة تفكيرك، وليس حفظ تعريفات فقط.</p>
          <button type="button" class="tc-primary" id="tcStartInside">ابدأ أول تحدٍ الآن ←</button>
        </div>
      </div>
      <p class="tc-notice">نطاق المختبر دفاعي وتعليمي فقط. لا تُدخل كلمات مرور أو بيانات شخصية في التحديات؛ لا توجد حاجة لأي معلومات حقيقية، ولا ينفّذ المختبر أي فحص أو اتصال بشبكة خارجية.</p>
    `;
    cyberLearning.insertBefore(lab, libraryHeading);

    const workspace = lab.querySelector("#tcWorkspace");
    const categorySelect = lab.querySelector("#tcCategory");
    const difficultySelect = lab.querySelector("#tcDifficulty");
    const questionCountSelect = lab.querySelector("#tcQuestionCount");
    const startButton = lab.querySelector("#tcStart");
    const startInsideId = "tcStartInside";
    let session = null;

    function safeSaveStats() {
      try { localStorage.setItem(LAB_STORAGE_KEY, JSON.stringify(stats)); } catch (_) { /* Keep working without persistence. */ }
      renderStats();
    }

    function renderStats() {
      const accuracy = stats.answered ? Math.round((stats.correct / stats.answered) * 100) : null;
      lab.querySelector("#tcStatSessions").textContent = String(stats.sessions);
      lab.querySelector("#tcStatAccuracy").textContent = accuracy === null ? "—" : `${accuracy}%`;
      lab.querySelector("#tcStatBest").textContent = stats.sessions ? `${stats.best}%` : "—";
      lab.querySelector("#tcStatAnswered").textContent = String(stats.answered);
    }

    function shuffle(items) {
      const result = items.slice();
      for (let i = result.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
      }
      return result;
    }

    function createLabElement(tag, className, content) {
      const element = document.createElement(tag);
      if (className) element.className = className;
      if (content !== undefined) element.textContent = content;
      return element;
    }

    function startSession() {
      const category = categorySelect.value;
      const difficulty = difficultySelect.value;
      let pool = scenarios.filter((item) =>
        (category === "all" || item.category === category) &&
        (difficulty === "all" || item.difficulty === difficulty)
      );

      if (!pool.length) {
        workspace.replaceChildren(createLabElement("p", "tc-lead", "لا توجد تحديات مطابقة لهذه الاختيارات. اختر مجالًا أو مستوى آخر."));
        return;
      }

      const requestedCount = Math.max(5, Math.min(20, Number(questionCountSelect.value) || 10));
      const recent = new Set(stats.recent);
      const fresher = pool.filter((item) => !recent.has(item.id));
      // Avoid recent repeats whenever enough fresh questions are available.
      if (fresher.length >= Math.min(requestedCount, pool.length)) pool = fresher;
      const chosen = shuffle(pool).slice(0, Math.min(requestedCount, pool.length));
      session = {
        items: chosen.map((item) => ({...item, options: shuffle(item.options.map((option) => ({...option})))})),
        index: 0,
        score: 0,
        answers: [],
        hasAnswered: false,
        finished: false
      };

      stats.recent = chosen.map((item) => item.id).concat(stats.recent).filter((id, index, arr) => arr.indexOf(id) === index).slice(0, 12);
      safeSaveStats();
      startButton.disabled = true;
      startButton.textContent = "الجلسة قيد التقدم…";
      lab.querySelector("#tcPoolNote").textContent = `تم اختيار ${chosen.length} تحديًا من أصل ${scenarios.length} سيناريو. اقرأ كل موقف بعناية؛ وبعد الإجابة سيظهر التفسير والخطوة العملية المناسبة.`;
      renderChallenge();
    }

    function renderChallenge() {
      if (!session) return;
      const item = session.items[session.index];
      if (!item) return renderResult();
      session.hasAnswered = false;
      workspace.replaceChildren();

      const progressHead = createLabElement("div", "tc-progress-head");
      progressHead.append(
        createLabElement("span", "tc-progress-label", "CHALLENGE SESSION / DEFENSIVE MODE"),
        createLabElement("span", "tc-progress-count", `التحدي ${session.index + 1} من ${session.items.length}`)
      );
      const track = createLabElement("div", "tc-progress-track");
      const fill = createLabElement("div", "tc-progress-fill");
      fill.style.width = `${(session.index / session.items.length) * 100}%`;
      track.appendChild(fill);

      const card = createLabElement("article", "tc-card");
      const top = createLabElement("div", "tc-card-top");
      top.append(
        createLabElement("span", "tc-pill", CATEGORY_LABELS[item.category] || item.category),
        createLabElement("span", "tc-pill tc-difficulty", `المستوى: ${DIFFICULTY_LABELS[item.difficulty] || item.difficulty}`)
      );

      const body = createLabElement("div", "tc-scenario");
      body.append(
        createLabElement("h3", "", item.title),
        createLabElement("p", "tc-scenario-text", item.scene),
        createLabElement("p", "tc-question", item.question)
      );

      const optionsBox = createLabElement("div", "tc-options");
      optionsBox.setAttribute("role", "group");
      optionsBox.setAttribute("aria-label", "اختيارات التحدي");
      const feedback = createLabElement("div", "tc-feedback");
      feedback.hidden = true;
      feedback.setAttribute("role", "status");
      const next = createLabElement("button", "tc-primary", session.index === session.items.length - 1 ? "عرض النتيجة النهائية ←" : "التحدي التالي ←");
      next.type = "button";
      next.disabled = true;
      next.addEventListener("click", () => {
        if (!session?.hasAnswered) return;
        if (session.index === session.items.length - 1) {
          renderResult();
        } else {
          session.index += 1;
          renderChallenge();
        }
      });

      item.options.forEach((option, optionIndex) => {
        const button = createLabElement("button", "tc-option");
        button.type = "button";
        const letter = createLabElement("span", "tc-option-letter", String.fromCharCode(65 + optionIndex));
        letter.setAttribute("aria-hidden", "true");
        const answer = createLabElement("span", "", option.text);
        button.append(letter, answer);
        button.addEventListener("click", () => {
          if (session.hasAnswered) return;
          session.hasAnswered = true;
          const correctOption = item.options.find((candidate) => candidate.correct);
          const correct = Boolean(option.correct);
          if (correct) session.score += 1;
          session.answers.push({item, selected: option, correctOption, isCorrect: correct});
          stats.answered += 1;
          if (correct) stats.correct += 1;
          safeSaveStats();

          Array.from(optionsBox.querySelectorAll("button")).forEach((choiceButton, index) => {
            choiceButton.disabled = true;
            const choice = item.options[index];
            if (choice.correct) choiceButton.classList.add("is-correct");
            else if (choice === option) choiceButton.classList.add("is-wrong");
          });

          const title = createLabElement("h4", "", correct ? "✓ قرار صحيح" : "✕ خلينا نفهم وين الخطر");
          const selectedExplanation = createLabElement("p", "", option.feedback);
          const correctExplanation = correct ? null : createLabElement("p", "", `الخيار الأنسب: ${correctOption.text}`);
          const safeAction = createLabElement("p", "tc-safe-action", `الخطوة العملية: ${item.action}`);
          feedback.replaceChildren(title, selectedExplanation);
          if (correctExplanation) feedback.appendChild(correctExplanation);
          feedback.appendChild(safeAction);
          feedback.hidden = false;
          next.disabled = false;
          optionsBox.setAttribute("aria-label", "تمت الإجابة. راجع التفسير ثم انتقل للتالي.");
        });
        optionsBox.appendChild(button);
      });

      const actions = createLabElement("div", "tc-scenario-actions");
      actions.append(
        createLabElement("span", "tc-actions-hint", "ما في وقت محدد. فكّر في حماية الحساب والبيانات وتقليل الضرر."),
        next
      );
      body.append(optionsBox, feedback, actions);
      card.append(top, body);
      workspace.append(progressHead, track, card);
    }

    function renderResult() {
      if (!session || session.finished) return;
      session.finished = true;
      startButton.disabled = false;
      startButton.textContent = "ابدأ جلسة جديدة ↻";
      stats.sessions += 1;
      stats.best = Math.max(stats.best, Math.round((session.score / session.items.length) * 100));
      safeSaveStats();
      workspace.replaceChildren();

      const total = session.items.length;
      const percentage = Math.round((session.score / total) * 100);
      const result = createLabElement("section", "tc-result");
      result.setAttribute("aria-labelledby", "tcResultTitle");
      result.appendChild(createLabElement("p", "tc-kicker", "[ SESSION COMPLETE / REVIEW YOUR DECISIONS ]"));
      const resultTitle = createLabElement("h3", "", "انتهت جلسة التحديات");
      resultTitle.id = "tcResultTitle";
      result.appendChild(resultTitle);
      const scoreRow = createLabElement("div", "tc-result-score");
      const scoreCircle = createLabElement("div", "tc-score-number", `${session.score}/${total}`);
      scoreCircle.setAttribute("aria-label", `النتيجة ${session.score} من ${total}`);
      const scoreText = createLabElement("div", "");
      let summary = "راجع التفسيرات بهدوء، واختر جلسة أخرى لتثبيت المعلومات.";
      if (percentage === 100) summary = "ممتاز! كل قراراتك في هذه الجلسة كانت صحيحة. جرّب مستوى أصعب.";
      else if (percentage >= 80) summary = "أداء قوي. راجع المواقف التي أخطأت فيها ثم جرّب مجموعة جديدة.";
      else if (percentage >= 60) summary = "بداية جيدة. ركّز على تفسير كل قرار وتذكّر أن التحقق المستقل يقلل المخاطر.";
      scoreText.append(
        createLabElement("h3", "", `${percentage}%`),
        createLabElement("p", "", summary)
      );
      scoreRow.append(scoreCircle, scoreText);
      result.appendChild(scoreRow);
      result.appendChild(createLabElement("p", "", "مراجعة إجاباتك — افتح كل تفسير لتتذكر سبب الاختيار الآمن:"));

      const review = createLabElement("div", "tc-review");
      session.answers.forEach((answer, index) => {
        const reviewItem = createLabElement("article", "tc-review-item" + (answer.isCorrect ? "" : " is-missed"));
        reviewItem.append(
          createLabElement("strong", "", `${index + 1}. ${answer.item.title}`),
          createLabElement("span", "tc-review-status", answer.isCorrect ? "✓ إجابتك صحيحة" : "✕ الإجابة تحتاج مراجعة"),
          createLabElement("span", "", `إجابتك: ${answer.selected.text}`),
          createLabElement("span", "", `الخيار الأنسب: ${answer.correctOption.text}`),
          createLabElement("span", "", `لماذا؟ ${answer.correctOption.feedback}`)
        );
        review.appendChild(reviewItem);
      });
      result.appendChild(review);

      const actions = createLabElement("div", "tc-result-actions");
      const missedAnswers = session.answers.filter((answer) => !answer.isCorrect);
      if (missedAnswers.length) {
        const reviewMissed = createLabElement("button", "tc-secondary", `راجع أخطائي (${missedAnswers.length}) ↻`);
        reviewMissed.type = "button";
        reviewMissed.addEventListener("click", () => {
          session = {
            items: shuffle(missedAnswers.map((answer) => ({...answer.item, options: shuffle(answer.item.options.map((option) => ({...option}))) }))),
            index: 0,
            score: 0,
            answers: [],
            hasAnswered: false,
            finished: false
          };
          startButton.disabled = true;
          startButton.textContent = "مراجعة الأخطاء قيد التقدم…";
          lab.querySelector("#tcPoolNote").textContent = `مراجعة مخصصة من ${missedAnswers.length} سؤالًا أخطأت فيها؛ ركّز على سبب الإجابة الصحيحة.`;
          renderChallenge();
          lab.querySelector(".tc-controls").scrollIntoView({behavior:"smooth", block:"start"});
        });
        actions.appendChild(reviewMissed);
      }
      const again = createLabElement("button", "tc-primary", "جرّب مجموعة جديدة ←");
      again.type = "button";
      again.addEventListener("click", startSession);
      const changeSettings = createLabElement("button", "tc-secondary", "غيّر المجال أو المستوى");
      changeSettings.type = "button";
      changeSettings.addEventListener("click", () => {
        categorySelect.focus();
        lab.querySelector(".tc-controls").scrollIntoView({behavior:"smooth", block:"center"});
      });
      actions.append(again, changeSettings);
      result.appendChild(actions);
      workspace.appendChild(result);
      lab.querySelector(".tc-controls").scrollIntoView({behavior:"smooth", block:"start"});
    }

    startButton.addEventListener("click", startSession);
    lab.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (target.closest(`#${startInsideId}`)) startSession();
    });
    lab.querySelector(".tc-kicker").textContent = `[ PRACTICAL DEFENSIVE SIMULATOR / ${scenarios.length} SCENARIOS ]`;
    renderStats();
  })();

  const pathsContainer = academy.querySelector("#academyPaths");
  const lessonsContainer = academy.querySelector("#academyCourseLessons");
  const searchInput = academy.querySelector("#academyLessonSearch");
  const filterSelect = academy.querySelector("#academyLessonFilter");

  function pathProgress(path) {
    const total = path.topics.length;
    const done = path.topics.filter((id) => completed.has(id)).length;

    return {
      total,
      done,
      percent: total ? Math.round((done / total) * 100) : 0
    };
  }

  function renderPaths() {
    pathsContainer.replaceChildren();

    PATHS.forEach((path) => {
      const progress = pathProgress(path);
      const card = createElement(
        "article",
        "academy-path-card" + (path.id === activePathId ? " is-active" : "")
      );

      card.append(
        createElement("span", "academy-path-label", path.number),
        createElement("h4", "", path.title),
        createElement("p", "", path.description),
        createElement("small", "", `${progress.done} / ${progress.total} دروس مكتملة`)
      );

      const track = createElement("div", "academy-progress-track");
      const fill = createElement("div", "academy-progress-fill");
      fill.style.width = `${progress.percent}%`;
      track.appendChild(fill);

      const button = createElement(
        "button",
        "academy-select-path",
        path.id === activePathId ? "المسار المحدد ✓" : "عرض دروس المسار ←"
      );

      button.type = "button";
      button.dataset.academyPath = path.id;
      button.setAttribute("aria-pressed", String(path.id === activePathId));

      card.append(track, button);
      pathsContainer.appendChild(card);
    });
  }

  function renderCourseLessons() {
    const path = PATHS.find((item) => item.id === activePathId) || PATHS[0];
    const progress = pathProgress(path);

    academy.querySelector("#academyCourseTitle").textContent = path.title;
    academy.querySelector("#academyCourseMeta").textContent =
      `${progress.total} دروس في هذا المسار`;
    academy.querySelector("#academyCourseDescription").textContent = path.description;
    academy.querySelector("#academyCourseProgressText").textContent =
      `${progress.done} من ${progress.total} دروس مكتملة`;
    academy.querySelector("#academyCourseProgressPercent").textContent =
      `${progress.percent}%`;
    academy.querySelector("#academyCourseProgressFill").style.width =
      `${progress.percent}%`;

    const query = normalize(searchText);

    const matchingIds = path.topics.filter((id) => {
      const meta = getLessonMeta(id);
      const detail = LESSONS[id];
      const isComplete = completed.has(id);

      if (completionFilter === "complete" && !isComplete) return false;
      if (completionFilter === "incomplete" && isComplete) return false;

      const searchable = normalize(
        `${meta.title} ${meta.description} ${detail.explanation} ${id}`
      );

      return !query || searchable.includes(query);
    });

    lessonsContainer.replaceChildren();

    if (!matchingIds.length) {
      lessonsContainer.appendChild(
        createElement("div", "academy-empty", "لا توجد دروس تطابق البحث والتصفية الحالية.")
      );
      return;
    }

    matchingIds.forEach((id) => {
      const meta = getLessonMeta(id);
      const isComplete = completed.has(id);
      const card = createElement(
        "article",
        "academy-lesson-item" + (isComplete ? " is-complete" : "")
      );

      const top = createElement("div", "academy-lesson-top");
      top.append(
        createElement(
          "span",
          "academy-lesson-number",
          String(topicIds.indexOf(id) + 1).padStart(2, "0")
        )
      );

      const text = createElement("div", "");
      text.append(
        createElement("h4", "", meta.title),
        createElement("p", "", meta.description)
      );
      top.appendChild(text);

      const actions = createElement("div", "academy-lesson-actions");

      const openButton = createElement("button", "academy-open-lesson", "افتح الدرس ←");
      openButton.type = "button";
      openButton.dataset.academyOpenLesson = id;

      const label = createElement("label", "academy-done-label");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = isComplete;
      checkbox.dataset.academyComplete = id;
      checkbox.setAttribute("aria-label", `تم إكمال ${meta.title}`);

      label.append(checkbox, createElement("span", "", "أنهيت الدرس"));
      actions.append(openButton, label);
      card.append(top, actions);
      lessonsContainer.appendChild(card);
    });
  }

  function renderOverallProgress() {
    const total = topicIds.length;
    const done = topicIds.filter((id) => completed.has(id)).length;
    const percent = total ? Math.round(done / total * 100) : 0;

    academy.querySelector("#academyPathCount").textContent =
      String(PATHS.length).padStart(2, "0");
    academy.querySelector("#academyLessonCount").textContent =
      String(total).padStart(2, "0");
    academy.querySelector("#academyDoneCount").textContent =
      `${String(done).padStart(2, "0")} / ${total}`;
    academy.querySelector("#academyOverallPercent").textContent = `${percent}%`;
  }

  function renderAcademy() {
    renderPaths();
    renderCourseLessons();
    renderOverallProgress();
  }

  /* Independent lesson page. */
  const detailPage = document.createElement("section");
  detailPage.id = "cyberLessonDetailPage";
  detailPage.hidden = true;
  detailPage.setAttribute("role", "dialog");
  detailPage.setAttribute("aria-modal", "true");
  detailPage.setAttribute("aria-labelledby", "cyberDetailTitle");

  detailPage.innerHTML = `
    <div class="lesson-page-inner">
      <div class="lesson-page-top">
        <span class="lesson-page-kicker">[ TECHPATH CYBER ACADEMY / LESSON ]</span>
        <button type="button" class="lesson-back" data-lesson-back>← العودة إلى الأكاديمية</button>
      </div>

      <h1 id="cyberDetailTitle"></h1>
      <p id="cyberDetailIntro" class="lesson-page-intro"></p>

      <div class="lesson-page-meta">
        <span id="cyberDetailPath"></span>
        <span id="cyberDetailStatus"></span>
      </div>

      <section class="lesson-detail-section">
        <h2>ماذا ستتعلم؟</h2>
        <ul id="cyberDetailGoals"></ul>
      </section>

      <section class="lesson-detail-section">
        <h2>شرح الدرس</h2>
        <div id="cyberDetailExplanation"></div>
      </section>

      <section class="lesson-detail-section">
        <h2>خطوات عملية للتطبيق</h2>
        <ol id="cyberDetailPractice"></ol>
      </section>

      <section class="lesson-detail-section">
        <h2>دليل الموضوع الحالي</h2>
        <ol id="cyberDetailGuideSteps"></ol>
        <p id="cyberDetailGuideNote"></p>
      </section>

      <section class="lesson-detail-section">
        <h2>أخطاء شائعة انتبه لها</h2>
        <p id="cyberDetailWarning"></p>
      </section>

      <section class="lesson-detail-section">
        <h2>فيديو الدرس</h2>
        <div class="lesson-video-box" id="cyberDetailVideo"></div>
      </section>

      <section class="lesson-detail-section">
        <p class="lesson-quiz-caption">بعد ما تخلص الشرح والتطبيق، اختبر فهمك بامتحان من 15 سؤالًا. الأسئلة والاختيارات تتغيّر مع كل محاولة؛ اقرأ كل سؤال قبل الإجابة.</p>
        <h2>اختبر فهمك</h2>
        <div class="lesson-quiz" id="cyberDetailQuiz"></div>
      </section>

      <section class="lesson-detail-section">
        <h2>مصادر ومراجع موثوقة</h2>
        <p>هذه مراجع أولية موثوقة للتوسع. ارجع إلى النسخة الحالية من التوثيق عند دراسة التفاصيل المتقدمة.</p>
        <div id="cyberDetailSources" class="lesson-sources"></div>
      </section>

      <div class="lesson-complete-area">
        <label><input id="cyberDetailComplete" type="checkbox"> علّم هذا الدرس كمكتمل</label>
        <span id="cyberDetailCompleteStatus" class="lesson-complete-status"></span>
      </div>

      <div class="lesson-page-top" style="margin-top:22px;padding-top:15px;border-top:1px solid rgba(75,255,127,.18)">
        <span class="lesson-page-kicker">LEARN • APPLY • REVIEW</span>
        <button type="button" class="lesson-back" data-lesson-back>العودة إلى المسار ↑</button>
      </div>
    </div>
  `;

  document.body.appendChild(detailPage);

  function appendList(container, items) {
    container.replaceChildren();

    items.forEach((item) => {
      container.appendChild(createElement("li", "", item));
    });
  }

  function renderSources(id) {
    const container = detailPage.querySelector("#cyberDetailSources");
    container.replaceChildren();

    const sourceIds = new Set(LESSONS[id].sources || []);
    sourceIds.add("nist");

    if (["websecurity", "coding", "access", "vulnerability"].includes(id)) {
      sourceIds.add("owasp");
    }

    sourceIds.forEach((sourceId) => {
      const source = SOURCES[sourceId];
      if (!source) return;

      const link = createElement("a", "", source.title);
      link.href = source.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      container.appendChild(link);
    });
  }

  function renderVideo(id, title) {
    const lesson = LESSONS[id];
    const container = detailPage.querySelector("#cyberDetailVideo");

    container.replaceChildren();

    // Add an 11-character YouTube video ID to LESSONS[id].videoId to embed your own lesson.
    if (lesson.videoId && /^[A-Za-z0-9_-]{11}$/.test(lesson.videoId)) {
      const frame = document.createElement("iframe");
      frame.className = "lesson-video-frame";
      frame.src = `https://www.youtube-nocookie.com/embed/${lesson.videoId}`;
      frame.title = `فيديو تعليمي: ${title}`;
      frame.loading = "lazy";
      frame.referrerPolicy = "strict-origin-when-cross-origin";
      frame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      frame.allowFullscreen = true;
      container.appendChild(frame);
      return;
    }

    const caption = createElement(
      "p",
      "lesson-video-caption",
      "فيديو TechPath الأصلي لهذا الدرس لم يُضف بعد. إلى حين إنتاجه، يمكنك البحث عن شروحات للموضوع."
    );

    const link = createElement("a", "lesson-video-link", "ابحث عن فيديوهات هذا الدرس على YouTube ↗");
    link.href =
      "https://www.youtube.com/results?search_query=" +
      encodeURIComponent(lesson.video || `${title} cybersecurity official`);
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    container.append(caption, link);
  }

  const lastQuizQuestionIds = new Map();

  function renderQuiz(lessonId, legacyQuiz) {
    const container = detailPage.querySelector("#cyberDetailQuiz");
    container.replaceChildren();

    const lesson = LESSONS[lessonId];
    const course = COURSE_DETAIL_CONTENT[lessonId];
    if (!lesson || !course) {
      container.appendChild(createElement("p", "lesson-quiz-feedback", "تعذّر تجهيز الاختبار لهذا الدرس."));
      return;
    }

    const QUESTION_COUNT = 15;
    const misconceptions = [
      "الاعتماد على الاسم أو الشعار وحده دون تحقق مستقل.",
      "تجاهل التحديثات والتحذيرات ما دام الجهاز يعمل الآن.",
      "مشاركة كلمة المرور أو رمز التحقق لتسريع حل المشكلة.",
      "افتراض أن أداة واحدة تمنع جميع المخاطر بالكامل.",
      "اختبار نظام عام دون إذن ونطاق واضح.",
      "تأجيل النسخ الاحتياطي ومراجعة السجلات إلى ما بعد الحادث.",
      "منح جميع المستخدمين صلاحيات المدير لتسهيل العمل.",
      "اعتبار HTTPS وحده دليلًا على أن الجهة موثوقة.",
      "تنزيل البرامج من روابط عشوائية بدل المصادر الرسمية.",
      "حفظ المفاتيح والأسرار بجوار البيانات التي تحميها.",
      "اعتبار إخفاء اسم الشبكة بديلًا عن التشفير القوي.",
      "افتراض أن التصفح الخاص يجعلك مجهول الهوية بالكامل.",
      "الاعتماد على إخفاء زر في الواجهة بدل التحقق من الصلاحية على الخادم.",
      "حذف السجلات فور ظهور مشكلة قبل حفظ الأدلة اللازمة.",
      "اعتبار نجاح النسخ رسالةً كافية دون اختبار الاستعادة."
    ];

    function shuffleQuizItems(items) {
      const result = [...items];
      for (let index = result.length - 1; index > 0; index--) {
        const swapIndex = Math.floor(Math.random() * (index + 1));
        [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
      }
      return result;
    }

    function shortQuizText(value, maxLength = 155) {
      const text = String(value || "").replace(/\s+/g, " ").trim();
      if (text.length <= maxLength) return text;
      const cut = text.slice(0, maxLength);
      const lastSpace = cut.lastIndexOf(" ");
      return `${cut.slice(0, lastSpace > maxLength * 0.65 ? lastSpace : maxLength).trim()}…`;
    }

    function buildQuestionPool() {
      const pool = [];
      const allSections = [
        ...(course.sections || []),
        ...(COURSE_EXTRA_SECTIONS[lessonId] || [])
      ];
      const steps = course.steps || [];
      const lessonTitle = lesson.title;

      function addQuestion(question) {
        if (!question || !question.id || !question.q || !Array.isArray(question.options)) return;
        const options = question.options.map((option) => String(option).trim());
        if (new Set(options).size !== options.length || options.length < 3) return;
        if (!Number.isInteger(question.answer) || question.answer < 0 || question.answer >= options.length) return;
        pool.push({ ...question, options });
      }

      allSections.forEach((section, index) => {
        const heading = section[0];
        const explanation = section[1];
        const summary = shortQuizText(explanation);
        const step = steps[index % Math.max(steps.length, 1)] || lesson.practice?.[0] || "راجع إعدادات الأمان بطريقة موثوقة.";
        const badOne = misconceptions[(index + lessonId.length) % misconceptions.length];
        const badTwo = misconceptions[(index + lessonId.length + 5) % misconceptions.length];
        const badThree = misconceptions[(index + lessonId.length + 9) % misconceptions.length];

        addQuestion({
          id: `${lessonId}-section-${index}-summary`,
          q: `أي عبارة تلخّص الفكرة الأساسية في «${heading}»؟`,
          options: [summary, badOne, badTwo], answer: 0,
          explain: explanation
        });
        addQuestion({
          id: `${lessonId}-section-${index}-action`,
          q: `إذا أردت تطبيق ما تعلمته في «${heading}»، فما الخطوة الأنسب؟`,
          options: [step, badTwo, badThree], answer: 0,
          explain: `هذه خطوة عملية مرتبطة بالدرس: ${step} ${course.note || ""}`
        });
        addQuestion({
          id: `${lessonId}-section-${index}-myth`,
          q: `أي اعتقاد خاطئ يجب أن تتجنبه عند دراسة «${heading}»؟`,
          options: [badOne, step, (lesson.practice || [])[index % Math.max((lesson.practice || []).length, 1)] || "تحقق من المصدر والإعدادات قبل التطبيق."], answer: 0,
          explain: `هذا اعتقاد غير آمن. تذكّر المبدأ الصحيح: ${shortQuizText(explanation, 190)}`
        });
        addQuestion({
          id: `${lessonId}-section-${index}-scenario`,
          q: `في موقف عملي مرتبط بـ«${heading}»، ما المعلومة التي يجب أن تستند إليها؟`,
          options: [summary, badThree, badOne], answer: 0,
          explain: explanation
        });
      });

      (lesson.learn || []).forEach((learningPoint, index) => {
        const wrongOne = misconceptions[(index + lessonId.length + 2) % misconceptions.length];
        const wrongTwo = misconceptions[(index + lessonId.length + 7) % misconceptions.length];
        addQuestion({
          id: `${lessonId}-goal-${index}`,
          q: `أي نقطة من التالية تدخل ضمن أهداف درس «${lessonTitle}»؟`,
          options: [learningPoint, wrongOne, wrongTwo], answer: 0,
          explain: `${lesson.explanation} هذا الهدف يساعدك على تطبيق المعرفة بدل الاكتفاء بحفظ الاسم.`
        });
      });

      steps.forEach((step, index) => {
        addQuestion({
          id: `${lessonId}-step-${index}`,
          q: `أي إجراء عملي موصى به ضمن درس «${lessonTitle}»؟`,
          options: [step, misconceptions[(index + 4) % misconceptions.length], misconceptions[(index + 10) % misconceptions.length]], answer: 0,
          explain: `${step} ${course.note || "راجع دائمًا سياسة الجهة وتعليمات المصدر الرسمي عند التطبيق."}`
        });
      });

      (lesson.practice || []).forEach((practice, index) => {
        addQuestion({
          id: `${lessonId}-practice-${index}`,
          q: `بعد إنهاء الشرح، أي مهمة تساعدك على ممارسة «${lessonTitle}»؟`,
          options: [practice, misconceptions[(index + 6) % misconceptions.length], misconceptions[(index + 11) % misconceptions.length]], answer: 0,
          explain: `${practice} نفّذ التدريب على حساب أو جهاز تملكه أو تملك إذنًا واضحًا لاستخدامه.`
        });
      });

      if (legacyQuiz?.q && Array.isArray(legacyQuiz.options) && legacyQuiz.options.length >= 3) {
        addQuestion({
          id: `${lessonId}-original-knowledge-check`,
          q: legacyQuiz.q,
          options: legacyQuiz.options,
          answer: legacyQuiz.answer,
          explain: legacyQuiz.explain || lesson.explanation
        });
      }

      return pool;
    }

    function beginQuiz() {
      const pool = buildQuestionPool();
      if (pool.length < QUESTION_COUNT) {
        container.replaceChildren(createElement("p", "lesson-quiz-feedback", "عدد الأسئلة المتاحة لهذا الدرس غير كافٍ لبدء الاختبار."));
        return;
      }

      const previousIds = lastQuizQuestionIds.get(lessonId) || new Set();
      let choices = pool.filter((question) => !previousIds.has(question.id));
      if (choices.length < QUESTION_COUNT) choices = pool;

      const chosenQuestions = shuffleQuizItems(choices).slice(0, QUESTION_COUNT).map((question) => {
        const optionRecords = shuffleQuizItems(question.options.map((text, originalIndex) => ({
          text,
          isCorrect: originalIndex === question.answer
        })));
        return {
          ...question,
          options: optionRecords.map((option) => option.text),
          answer: optionRecords.findIndex((option) => option.isCorrect)
        };
      });

      lastQuizQuestionIds.set(lessonId, new Set(chosenQuestions.map((question) => question.id)));
      const state = {
        questions: chosenQuestions,
        currentIndex: 0,
        score: 0,
        responses: [],
        hasAnswered: false
      };
      renderCurrentQuestion(state);
    }

    function renderCurrentQuestion(state) {
      container.replaceChildren();
      state.hasAnswered = false;
      const question = state.questions[state.currentIndex];
      const progress = createElement(
        "p",
        "lesson-quiz-progress",
        `السؤال ${state.currentIndex + 1} من ${QUESTION_COUNT} • الإجابات الصحيحة حتى الآن: ${state.score}`
      );
      const questionText = createElement("p", "lesson-quiz-question", question.q);
      const answers = createElement("div", "lesson-quiz-answers");
      const feedback = createElement("p", "lesson-quiz-feedback", "اختر إجابة واحدة؛ سيظهر بعدها تفسير الإجابة.");
      const next = createElement("button", "lesson-quiz-next", state.currentIndex === QUESTION_COUNT - 1 ? "عرض النتيجة" : "السؤال التالي ←");
      next.type = "button";
      next.hidden = true;

      question.options.forEach((option, index) => {
        const button = createElement("button", "lesson-quiz-answer", option);
        button.type = "button";
        button.addEventListener("click", () => {
          if (state.hasAnswered) return;
          state.hasAnswered = true;
          const isCorrect = index === question.answer;
          if (isCorrect) state.score += 1;

          const correctAnswer = question.options[question.answer];
          state.responses[state.currentIndex] = {
            question: question.q,
            chosenAnswer: option,
            correctAnswer,
            isCorrect,
            explain: question.explain
          };

          Array.from(answers.querySelectorAll("button")).forEach((answerButton) => {
            answerButton.disabled = true;
          });
          if (isCorrect) {
            button.classList.add("is-right");
            feedback.textContent = `إجابة صحيحة. ${question.explain}`;
          } else {
            button.classList.add("is-wrong");
            answers.querySelectorAll("button")[question.answer]?.classList.add("is-right");
            feedback.textContent = `الإجابة الصحيحة: ${correctAnswer}. ${question.explain}`;
          }
          next.hidden = false;
          progress.textContent = `السؤال ${state.currentIndex + 1} من ${QUESTION_COUNT} • الإجابات الصحيحة حتى الآن: ${state.score}`;
        });
        answers.appendChild(button);
      });

      next.addEventListener("click", () => {
        if (!state.hasAnswered) return;
        if (state.currentIndex === QUESTION_COUNT - 1) {
          renderQuizResult(state);
        } else {
          state.currentIndex += 1;
          renderCurrentQuestion(state);
        }
      });

      container.append(progress, questionText, answers, feedback, next);
    }

    function renderQuizResult(state) {
      container.replaceChildren();
      const percentage = Math.round((state.score / QUESTION_COUNT) * 100);
      const resultCard = createElement("div", "lesson-quiz-result");
      resultCard.appendChild(createElement("h3", "", `نتيجتك: ${state.score} من ${QUESTION_COUNT} (${percentage}٪)`));

      let resultMessage;
      if (state.score >= 13) {
        resultMessage = "ممتاز! فهمك قوي لهذا الدرس. راجع الأخطاء إن وجدت وحافظ على التطبيق العملي.";
      } else if (state.score >= 10) {
        resultMessage = "نتيجة جيدة جدًا. راجع النقاط التي أخطأت فيها قبل الانتقال إلى درس جديد.";
      } else if (state.score >= 8) {
        resultMessage = "بداية جيدة. أعد قراءة الأجزاء المرتبطة بالأخطاء ثم جرّب اختبارًا جديدًا.";
      } else {
        resultMessage = "ارجع إلى شرح الدرس وخطواته العملية، ثم أعد الاختبار بعد أن تتأكد من فهم الأساسيات.";
      }
      resultCard.appendChild(createElement("p", "", resultMessage));
      resultCard.appendChild(createElement("p", "", "الاختبار تدريبي لمراجعة الفهم، وليس شهادة أو تقييمًا مهنيًا."));
      container.appendChild(resultCard);

      const incorrect = state.responses.filter((response) => !response.isCorrect);
      if (incorrect.length) {
        const review = createElement("div", "lesson-quiz-review");
        review.appendChild(createElement("h3", "", `راجع إجاباتك (${incorrect.length})`));
        incorrect.forEach((response, index) => {
          const details = document.createElement("details");
          const summary = createElement("summary", "", `${index + 1}. ${response.question}`);
          details.appendChild(summary);
          details.appendChild(createElement("p", "", `إجابتك: ${response.chosenAnswer}`));
          details.appendChild(createElement("p", "", `الإجابة الصحيحة: ${response.correctAnswer}`));
          details.appendChild(createElement("p", "", response.explain));
          review.appendChild(details);
        });
        container.appendChild(review);
      } else {
        container.appendChild(createElement("p", "lesson-quiz-feedback", "أجبت عن الأسئلة كلها بشكل صحيح. أحسنت!"));
      }

      const restart = createElement("button", "lesson-quiz-restart", "أعد الاختبار بأسئلة جديدة ↻");
      restart.type = "button";
      restart.addEventListener("click", beginQuiz);
      container.appendChild(restart);
    }

    const intro = createElement("p", "lesson-quiz-feedback", "سيظهر لك 15 سؤالًا واحدًا تلو الآخر، مع تفسير للإجابة ونتيجة نهائية ومراجعة للأخطاء.");
    const startButton = createElement("button", "lesson-quiz-start", "ابدأ اختبار الـ15 سؤالًا ←");
    startButton.type = "button";
    startButton.addEventListener("click", beginQuiz);
    container.append(intro, startButton);
  }

const COURSE_DETAIL_CONTENT = {
  accounts: {
    sections: [
      ["1. كيف تعمل حماية الحساب؟", "الحساب يعتمد على إثبات هويتك، ثم التحقق من صلاحياتك، ثم إدارة الجلسة التي تبقيك مسجلًا. هذه مراحل مختلفة: تسجيل الدخول بنجاح لا يعني أن كل العمليات أو البيانات متاحة لك."],
      ["2. كلمات المرور والمصادقة", "كلمة المرور الطويلة والفريدة تقلل فرص التخمين وتمنع انتقال أثر التسريب بين الخدمات. المصادقة متعددة العوامل تضيف عاملًا آخر، مثل تطبيق مصادقة أو مفتاح أمان؛ وهي أقوى من الاعتماد على كلمة المرور وحدها."],
      ["3. الجلسات والاسترداد", "قد يبقى الحساب مفتوحًا على جهاز قديم أو جلسة لا تعرفها. راجع الأجهزة المتصلة، وحدّث وسائل الاسترداد، واحفظ رموز الاسترداد في مكان آمن. البريد الأساسي مهم لأنه غالبًا يُستخدم لإعادة تعيين كلمات مرور حسابات أخرى."]
    ],
    steps: ["حدّد الحسابات التي يمكن من خلالها استرداد حسابات أخرى، وابدأ بحماية البريد الرئيسي.", "أنشئ كلمة مرور فريدة لكل خدمة باستخدام مدير كلمات مرور موثوق.", "فعّل المصادقة متعددة العوامل، واحفظ رموز الاسترداد في مكان آمن.", "راجع الجلسات والأجهزة ووسائل الاسترداد، ثم ألغِ أي جلسة لا تتعرف عليها."],
    note: "إذا شككت بسرقة الحساب، استخدم جهازًا موثوقًا للدخول إلى الموقع الرسمي، وغيّر كلمة المرور، وألغِ الجلسات المشبوهة، وراجع وسائل الاسترداد."
  },

  phishing: {
    sections: [
      ["1. كيف يعمل التصيّد؟", "ينشئ المحتال رسالة أو صفحة تبدو مألوفة ليجعلك تتخذ إجراءً يخدمه، مثل إدخال بيانات الدخول أو فتح ملف أو تحويل أموال. وقد يعتمد على البريد أو الرسائل النصية أو المكالمات أو حساب مخترق لشخص تعرفه."],
      ["2. فحص المرسل والرابط", "اسم المرسل الظاهر لا يكفي لإثبات الهوية. راجع عنوان البريد والنطاق الفعلي، وانتبه للأسماء المتشابهة والنطاقات الفرعية والروابط المختصرة. كما أن HTTPS لا يثبت أن الموقع أصلي؛ فهو يحمي الاتصال بالوجهة فقط."],
      ["3. التحقق قبل التصرف", "عندما تتعلق الرسالة بالأموال أو كلمات المرور أو إغلاق حساب، لا تستخدم الرابط أو رقم الهاتف الوارد داخلها للتحقق. افتح التطبيق الرسمي بنفسك أو اتصل بجهة تعرف رقمها مسبقًا، وأبلغ عن الرسالة عبر القنوات المتاحة."]
    ],
    steps: ["حدّد ما الذي تطلبه الرسالة منك، وهل كنت تتوقع هذا الطلب أصلًا.", "افحص عنوان المرسل والنطاق الفعلي دون الضغط على الرابط.", "تحقق من الطلب عبر قناة مستقلة ومعروفة.", "إذا أدخلت كلمة مرور في صفحة مشبوهة، غيّرها من الموقع الرسمي وألغِ الجلسات غير المعروفة."],
    note: "لا تعتمد على الأخطاء الإملائية وحدها لاكتشاف التصيّد؛ قد تكون الرسالة مكتوبة جيدًا أو مرسلة من حساب حقيقي تعرض للاختراق."
  },

  device: {
    sections: [
      ["1. التحديثات الأمنية", "قد تحتوي أنظمة التشغيل والمتصفحات والبرامج على ثغرات يعالجها المطور بإصدار جديد. تأخير التحديث يترك الجهاز معرضًا لمشكلات معروفة، لكن التحديث وحده لا يعالج كل المخاطر."],
      ["2. الصلاحيات وتقليل التعرض", "استخدم حسابًا عاديًا للمهام اليومية، وامنح صلاحيات المدير عند الحاجة فقط. احذف البرامج والإضافات غير المستخدمة، لأن كل مكوّن إضافي يحتاج تحديثًا ومراجعة."],
      ["3. القفل والحماية والمراجعة", "استخدم قفل شاشة قويًا، وفعّل التشفير المدمج عندما يتوفر، واترك أدوات الحماية الموثوقة تعمل. راجع التطبيقات المثبتة ووسائل بدء التشغيل والصلاحيات، ولا تثبّت برامج بسبب نوافذ منبثقة تدّعي أن جهازك مصاب."]
    ],
    steps: ["تحقق من إصدار النظام وفعّل التحديثات الأمنية.", "راجع البرامج المثبتة واحذف ما لا تحتاج إليه.", "تأكد من أن قفل الشاشة وأدوات الحماية تعمل.", "راجع التطبيقات التي تملك صلاحيات إدارية أو تصل إلى بيانات حساسة."],
    note: "البطء وحده لا يثبت وجود اختراق. اجمع مؤشرات إضافية، واستخدم أدوات فحص موثوقة، وتجنب أدوات التنظيف المجهولة."
  },

  wifi: {
    sections: [
      ["1. حماية إدارة الراوتر", "الراوتر يدير اتصال الأجهزة بالإنترنت، وقد تسمح إعداداته الضعيفة بتغيير إعدادات الشبكة أو الوصول إلى خدمات داخلية. غيّر بيانات دخول الإدارة الافتراضية وحدّث البرنامج الثابت من الشركة المصنعة."],
      ["2. تشفير الشبكة اللاسلكية", "استخدم WPA3 عند توفره، أو WPA2-AES إذا كان هذا ما يدعمه جهازك. اختر كلمة مرور طويلة وفريدة للشبكة، ولا تخلط بينها وبين كلمة مرور إدارة الراوتر؛ فهما يحميان شيئين مختلفين."],
      ["3. تقليل الاتصال غير الضروري", "عطّل الإدارة عن بُعد وWPS إذا لم تكن تحتاجهما، وراجع تحويل المنافذ والأجهزة المتصلة. يمكن لشبكة ضيوف أن تقلل الوصول من الأجهزة الأقل ثقة إلى الشبكة الأساسية، بحسب إمكانات الراوتر."]
    ],
    steps: ["غيّر كلمة مرور إدارة الراوتر الافتراضية.", "راجع نوع تشفير Wi-Fi واختر أقوى خيار مدعوم.", "حدّث الراوتر من إعداداته الرسمية.", "راجع الأجهزة المتصلة وأوقف الميزات التي لا تحتاج إليها."],
    note: "إخفاء اسم الشبكة ليس بديلًا عن التشفير القوي وكلمة المرور الجيدة والتحديثات."
  },

  incident: {
    sections: [
      ["1. التعرّف على الحادث وتحديد نطاقه", "ابدأ بتحديد الحساب أو الجهاز أو الخدمة المتأثرة، ووقت بداية الاشتباه، وما الأدلة المتوفرة. افصل بين الوقائع والافتراضات، وتحقق من سجلات الدخول والتغييرات ذات الصلة."],
      ["2. الاحتواء وحفظ الأدلة", "الهدف هو تقليل استمرار الضرر دون إتلاف معلومات قد يحتاج إليها التحقيق. قد تتطلب الحالة إلغاء جلسة أو تقييد حساب أو عزل جهاز وفق خطة الاستجابة؛ وثّق ما اتخذته ومن وافق عليه."],
      ["3. الإزالة والتعافي والتحسين", "عالج السبب قدر الإمكان قبل إعادة النظام إلى العمل، مثل تغيير بيانات اعتماد مسروقة أو سد ثغرة أو إزالة وصول غير مصرح به. اختبر التعافي، ثم وثّق الخط الزمني والدروس والإجراءات المطلوبة لمنع تكرار الحادث."]
    ],
    steps: ["سجّل وقت اكتشاف الحادث والنظام أو الحساب المتأثر.", "اتبع خطة الاستجابة وأبلغ المسؤول أو فريق الأمن المختص.", "قلّل الضرر وفق الخطة مع المحافظة على السجلات والأدلة اللازمة.", "تحقق من معالجة السبب قبل استعادة الخدمة، ثم وثّق ما تعلمته."],
    note: "لا تحذف السجلات أو تهيئ جهازًا مشتبهًا به بعشوائية قبل تقييم الحاجة إلى الأدلة واتباع خطة الاستجابة."
  },

  privacy: {
    sections: [
      ["1. تقليل البيانات", "كلما جمعت تطبيقاتك أو حساباتك معلومات أكثر، زادت كمية البيانات التي قد تتعرض للكشف أو الإساءة. شارك الحد الأدنى اللازم، وتجنب نشر أرقام الهواتف والعناوين والوثائق ورموز التحقق."],
      ["2. الأذونات والجمهور", "راجع من يستطيع مشاهدة منشوراتك وملفاتك، وما صلاحيات التطبيقات للكاميرا والميكروفون والموقع والصور. امنح الصلاحية عند الحاجة، وألغها عندما ينتهي الغرض منها."],
      ["3. الاحتفاظ والحذف", "راجع المعلومات التي لم تعد تحتاج إليها، وسياسات حفظ البيانات في الخدمات التي تستخدمها. الحذف من واجهة واحدة لا يضمن اختفاء جميع النسخ أو النسخ الاحتياطية؛ لذلك من المهم معرفة إعدادات الخدمة والخيارات المتاحة."]
    ],
    steps: ["راجع جمهور المنشورات وبيانات الملف الشخصي.", "افحص أذونات التطبيقات وألغِ ما لا تحتاج إليه.", "تجنب مشاركة الوثائق أو البيانات الحساسة علنًا.", "راجع وسائل الاسترداد والحسابات المرتبطة دوريًا."],
    note: "قبل رفع ملف إلى أداة عبر الإنترنت، تحقّق من سياسة البيانات ومن امتلاكك الإذن لمشاركة محتواه."
  },

  malware: {
    sections: [
      ["1. كيف تصل البرمجيات الخبيثة؟", "قد تصل عبر مثبتات مزيفة أو مرفقات أو مواقع مخترقة أو ثغرات في برنامج قديم. وقد يكون هدفها سرقة البيانات أو التجسس أو التحكم بالجهاز أو تعطيل الملفات."],
      ["2. تقليل فرص الإصابة", "نزّل البرامج من مصادر رسمية، وحدّث النظام والتطبيقات، وقلّل الصلاحيات، ولا تشغّل ملفات مجهولة أو نسخًا مقرصنة. اترك وسائل الحماية الموثوقة مفعّلة وراجع التحذيرات بدل تجاوزها تلقائيًا."],
      ["3. التعامل مع الاشتباه", "إذا ظهر مؤشر جدي على الإصابة، تجنّب استخدام الجهاز للعمليات الحساسة واتبع إرشادات فريق الدعم أو أداة الحماية الموثوقة. في جهاز عمل، أبلغ الفريق المختص حتى تُدار عملية الاحتواء والتحقيق."]
    ],
    steps: ["تحقق من مصدر البرنامج قبل تثبيته.", "حدّث النظام والبرامج الأساسية.", "لا تشغّل ملفًا مجهولًا بصلاحيات المدير.", "إذا اشتبهت بإصابة، أوقف الأنشطة الحساسة واتبع خطوات الفحص والاستجابة المعتمدة."],
    note: "وجود ملف غير معروف أو بطء في الجهاز لا يؤكد وحده وجود برمجية خبيثة؛ استخدم أدلة وفحوصًا موثوقة."
  },

  ransomware: {
    sections: [
      ["1. ماذا تفعل برامج الفدية؟", "قد تشفّر هذه البرامج الملفات أو تعطل الوصول إليها، وقد تسرق البيانات أيضًا ثم تهدد بنشرها. لهذا لا يقتصر الخطر على القدرة على فتح الملفات، بل قد يشمل سرية المعلومات واستمرارية العمل."],
      ["2. تقليل الأثر قبل الحادث", "حدّث الأنظمة وأغلق الخدمات غير اللازمة، واستخدم أقل صلاحية، واحمِ حسابات الإدارة. احتفظ بنسخ احتياطية منفصلة واختبر الاستعادة، لأن النسخة المتصلة بالحساب المخترق قد تتعرض للحذف أو التشفير."],
      ["3. الاستجابة والتعافي", "عند الاشتباه، اتبع خطة الحادث واعزل الأنظمة المتأثرة وفق الإجراء المعتمد، وأبلغ الفريق المختص. حافظ على السجلات والأدلة، وحدد نطاق التأثر قبل إعادة التشغيل أو استعادة النسخ."]
    ],
    steps: ["تأكد من وجود نسخ احتياطية منفصلة ومحمية.", "راجع حسابات الإدارة والوصول إلى الملفات المشتركة.", "اعرف قناة الإبلاغ وخطة الاستجابة قبل وقوع الحادث.", "بعد الحادث، عالج سبب الاختراق واختبر سلامة النسخ قبل الاستعادة."],
    note: "دفع الفدية لا يضمن استرجاع الملفات أو حذف النسخ المسروقة؛ اتبع إجراءات الاستجابة الرسمية واحصل على دعم مختص."
  },

  backup: {
    sections: [
      ["1. ما الذي تحتاج إلى نسخه؟", "ابدأ بتحديد الملفات والخدمات التي لا يمكن تعويضها، مثل المشاريع والمستندات والصور وبيانات العمل. حدّد مقدار البيانات المقبول فقدانها والمدة المقبولة لاستعادة الخدمة، فذلك يساعد على اختيار وتيرة النسخ."],
      ["2. فصل النسخ وحمايتها", "احتفظ بنسخ في أكثر من مكان، واجعل إحداها منفصلة عن الجهاز أو الحساب اليومي كلما أمكن. استخدم تشفيرًا وصلاحيات مناسبة حتى لا يتمكن مستخدم مخترق من حذف كل النسخ بسهولة."],
      ["3. اختبار الاستعادة", "تحقق دوريًا من أن النسخ حديثة ويمكن استعادتها فعلًا. اختبر ملفات عينة أو بيئة استعادة مناسبة، ووثّق الوقت والنتيجة والأخطاء التي تحتاج إلى إصلاح."]
    ],
    steps: ["أنشئ قائمة بالبيانات التي لا تستطيع خسارتها.", "حدد جدول نسخ يناسب معدل تغير البيانات.", "احتفظ بنسخة منفصلة ومحمية.", "جرّب استعادة ملف أو نسخة تجريبية وسجّل النتيجة."],
    note: "مزامنة الملفات ليست دائمًا بديلًا عن نسخة احتياطية مستقلة؛ فقد تنتقل التغييرات أو الحذوفات إلى الخدمة المتزامنة."
  },

  social: {
    sections: [
      ["1. أساليب الهندسة الاجتماعية", "قد ينتحل المهاجم شخصية موظف دعم أو مدير أو صديق، ويستعمل الاستعجال أو الخوف أو الفضول ليحصل على معلومات أو يدفعك إلى إجراء غير آمن. قد يكون الحساب المنتحل مقنعًا أو الحساب الحقيقي مخترقًا."],
      ["2. التحقق من الهوية والطلب", "تحقق من هوية الشخص عبر قناة مستقلة عن الرسالة التي أرسلها. عند طلب مال أو رمز تحقق أو وصول عن بُعد، لا تستثنِ إجراءات التحقق بسبب المسمى الوظيفي أو العلاقة الشخصية."],
      ["3. التعامل مع المحاولة", "لا تشارك الأسرار ولا تثبّت أدوات بطلب غير متوقع. احتفظ بالمعلومات اللازمة للإبلاغ، واستخدم أدوات المنصة أو إجراءات المؤسسة، وراجع أي حساب أو جهاز تأثر بالطلب."]
    ],
    steps: ["توقف عند الطلب المفاجئ أو المستعجل.", "تحقق عبر رقم أو حساب تعرفه مسبقًا.", "لا تشارك رموز التحقق أو بيانات الدخول.", "أبلغ عن انتحال الشخصية أو الطلب المشبوه."],
    note: "وجود صورة شخص معروف أو حساب يحمل اسمه لا يكفي لإثبات هويته."
  },

  email: {
    sections: [
      ["1. البريد حساب محوري", "قد يستخدم البريد لإعادة تعيين كلمات مرور حسابات أخرى، لذلك فإن السيطرة عليه قد تؤدي إلى السيطرة على خدمات إضافية. استخدم كلمة مرور فريدة ومصادقة متعددة العوامل."],
      ["2. راجع إعدادات الحساب", "بالإضافة إلى الرسائل الواردة، راجع الأجهزة والجلسات النشطة ووسائل الاسترداد وقواعد التحويل التلقائي. قد تُستخدم قاعدة تحويل غير معروفة لإرسال رسائلك إلى عنوان آخر دون أن تنتبه."],
      ["3. المرفقات والتحقق", "تعامل بحذر مع المرفقات والروابط غير المتوقعة، حتى لو بدا اسم المرسل مألوفًا. تحقق من طلبات الأموال أو تغيير بيانات الدفع عبر قناة مستقلة، ولا تفعّل محتوى نشطًا بناءً على طلب مرسل غير موثوق."]
    ],
    steps: ["فعّل المصادقة متعددة العوامل للبريد.", "راجع الجلسات ووسائل الاسترداد وقواعد التحويل.", "تحقق من طلبات الدفع أو التغيير بطريقة مستقلة.", "أبلغ عن الرسائل المشبوهة ولا تفتح المرفقات غير المتوقعة."],
    note: "قد يرسل محتال رسائل من حساب حقيقي مخترق؛ لذلك تحقق من الطلبات غير الاعتيادية مباشرة."
  },

  browser: {
    sections: [
      ["1. المتصفح بيئة حساسة", "يحفظ المتصفح جلسات الدخول ويعرض مواقع قد تطلب صلاحيات مثل الكاميرا والميكروفون والموقع. تحديثه وإزالة الإضافات غير الضرورية يقللان بعض المخاطر."],
      ["2. أذونات المواقع والإضافات", "راجع الأذونات لكل موقع، وامنحها عند الحاجة فقط. الإضافة قد تتمكن من قراءة أجزاء من الصفحات أو تغييرها بحسب صلاحياتها، لذا اختر إضافات موثوقة وراجعها دوريًا."],
      ["3. بيانات الدخول والتصفح الخاص", "استخدم مدير كلمات مرور موثوقًا، ولا تحفظ أسرارًا على جهاز مشترك. وضع التصفح الخاص يقلل بعض البيانات المحلية لكنه لا يجعلك مجهولًا للمواقع أو مزود الخدمة."]
    ],
    steps: ["فعّل تحديث المتصفح.", "احذف الإضافات غير المستخدمة أو غير الموثوقة.", "راجع أذونات الكاميرا والميكروفون والموقع.", "لا تتجاوز تحذيرات الشهادات لمجرد إكمال التصفح."],
    note: "وجود HTTPS لا يثبت أن الموقع موثوق؛ تحقق من النطاق والجهة قبل إدخال معلومات حساسة."
  },

  mobile: {
    sections: [
      ["1. قفل الجهاز والتشفير", "يضم الهاتف رسائل وصورًا ورموز مصادقة وبيانات دفع، وقد يساعد قفل الشاشة والتشفير في حماية البيانات عند فقدانه. فعّل العثور على الجهاز وخيارات القفل أو المسح عن بُعد عند توفرها."],
      ["2. التطبيقات والأذونات", "نزّل التطبيقات من مصادر رسمية وراجع صلاحياتها. لا تمنح تطبيقًا إذنًا إلى جهات الاتصال أو الميكروفون أو الموقع إذا لم تكن وظيفته تتطلب ذلك."],
      ["3. فقدان الهاتف أو سرقته", "استخدم خدمة رسمية لقفل الجهاز، واتصل بمزود الاتصال إذا احتجت إلى إيقاف الشريحة. راجع جلسات الحسابات المهمة وغيّر بيانات الاعتماد عند الاشتباه، واحمِ وسيلة استرداد الحساب من الاعتماد على الهاتف المفقود وحده."]
    ],
    steps: ["استخدم رمز قفل قويًا وحدّث نظام الهاتف.", "راجع التطبيقات وصلاحياتها.", "فعّل خيارات العثور على الجهاز والنسخ الاحتياطي.", "تعرّف مسبقًا إلى طريقة قفل الجهاز وإلغاء الوصول عند فقدانه."],
    note: "لا تثبّت ملفات APK أو ملفات تعريف إدارية من روابط مجهولة لمجرد أنها تعدك بجائزة أو إصلاح عاجل."
  },

  cloud: {
    sections: [
      ["1. الهوية والوصول السحابي", "تتيح الخدمات السحابية مشاركة الملفات والموارد، لكن الخطأ في الصلاحيات قد يجعل بيانات خاصة عامة. استخدم المصادقة متعددة العوامل وحدد من يستطيع العرض أو التعديل أو الإدارة."],
      ["2. روابط المشاركة والمفاتيح", "راجع روابط المشاركة القديمة والتطبيقات المرتبطة، وألغِ الوصول الذي لم تعد تحتاجه. مفاتيح API ورموز الوصول أسرار يجب حمايتها في إعدادات خادم أو مدير أسرار، لا داخل واجهة عامة."],
      ["3. التسجيل والاستعادة", "فعّل سجلات الأنشطة المتاحة وراجع التغييرات الحساسة. احتفظ بنسخ محمية من البيانات المهمة، واختبر الاستعادة، واعرف كيف تلغي رمز وصول أو جلسة عند الاشتباه."]
    ],
    steps: ["فعّل المصادقة متعددة العوامل للحساب السحابي.", "راجع صلاحيات الملفات وروابط المشاركة.", "ألغِ وصول التطبيقات والأجهزة القديمة.", "اختبر استعادة الملفات المهمة وراجع سجل الأنشطة."],
    note: "أي رابط يتيح الوصول لأي شخص قد يُعاد إرساله؛ استخدم مشاركة مقيّدة متى كانت مناسبة."
  },

  ai: {
    sections: [
      ["1. انتحال الهوية والمحتوى المولّد", "يمكن توليد نصوص وصور وأصوات تقلد أشخاصًا أو مؤسسات. لذلك لا تعتبر الصوت أو الفيديو وحده دليلًا نهائيًا على هوية المتحدث، خصوصًا عند طلب تحويل أموال أو كشف أسرار."],
      ["2. تسريب المعلومات إلى الأدوات", "قد تُرسل الملفات أو النصوص التي تدخلها إلى خدمة خارجية وفق إعداداتها وسياسة بياناتها. لا ترفع أسرار عمل أو بيانات شخصية إلى أدوات عامة دون معرفة السياسة والحصول على الإذن اللازم."],
      ["3. التحقق من النتائج", "قد ينتج النظام معلومات خاطئة أو تفاصيل مختلقة أو روابط غير صحيحة. استخدم مصادر موثوقة للتحقق من المعلومات المهمة، وراجع المحتوى قبل اتخاذ قرار أمني أو مالي أو نشره."]
    ],
    steps: ["تحقق من طلبات المال أو الأسرار عبر قناة مستقلة.", "لا تدخل بيانات سرية في أداة قبل مراجعة سياسة بياناتها.", "تحقق من المراجع والمعلومات المهمة من مصدر موثوق.", "أبلغ عن الحسابات أو المواد التي تنتحل هويتك."],
    note: "قد يكون المحتوى المصطنع مقنعًا جدًا؛ ركّز على التحقق من الهوية وصحة الطلب بدل الاعتماد على الانطباع."
  },

  downloads: {
    sections: [
      ["1. المصدر والملف", "اسم الملف وأيقونته لا يثبتان أنه آمن، وقد يحتوي الملف على امتداد مضلل. نزّل البرامج من الموقع الرسمي أو متجر موثوق وتجنب أدوات التفعيل والملفات المقرصنة المجهولة."],
      ["2. التحقق قبل التشغيل", "راجع اسم الناشر والتوقيع الرقمي عندما تكون هذه الإمكانية متاحة، واقرأ تحذيرات أدوات الحماية. لا تشغّل ملفًا بصلاحيات المدير إن لم تكن تفهم سبب الحاجة إليها."],
      ["3. فحص الملفات والتعامل معها", "استخدم أدوات حماية موثوقة، ولا ترفع مستندات خاصة إلى خدمات فحص عامة دون معرفة كيفية التعامل مع الملف. إذا كان الملف غير متوقع، تحقق من المرسل عبر قناة أخرى."]
    ],
    steps: ["نزّل من مصدر رسمي.", "تحقق من اسم الملف ونوعه والناشر إذا توفرت معلومات موثوقة.", "لا تشغّل ملفات مجهولة أو تمنحها صلاحيات مرتفعة.", "افحص الملفات المريبة بأداة موثوقة واتبع تعليمات الدعم عند الحاجة."],
    note: "الفحص الآلي يقلل المخاطر لكنه لا يضمن أن كل ملف سليم؛ تحقق أيضًا من المصدر والغرض."
  },

  publicwifi: {
    sections: [
      ["1. مخاطر الشبكات العامة", "قد تكون الشبكة مشتركة بين مستخدمين لا تعرفهم، أو قد تظهر نقطة وصول باسم يشبه اسم المكان الحقيقي. لذلك تحقق من اسم الشبكة مع الجهة المسؤولة قبل الاتصال."],
      ["2. حماية البيانات أثناء الاستخدام", "استخدم التطبيقات الرسمية وتحقق من النطاق، ولا تتجاهل تحذيرات الشهادات. HTTPS يحمي الاتصال بالخدمة عند ضبطه بصورة صحيحة، لكنه لا يثبت أن الصفحة شرعية."],
      ["3. تقليل التعاملات الحساسة", "أوقف الاتصال التلقائي بالشبكات العامة، وانسَ الشبكات القديمة التي لم تعد تحتاجها. يمكن لاتصال الهاتف أن يكون خيارًا أبسط عند إجراء معاملة حساسة إذا لم تكن واثقًا من الشبكة."]
    ],
    steps: ["تحقق من اسم الشبكة مع المكان.", "أوقف الاتصال التلقائي بالشبكات العامة.", "تجنب تسجيل الدخول من روابط غير متوقعة.", "استخدم قناة اتصال موثوقة للعمليات الحساسة."],
    note: "VPN ليس ضمانًا شاملًا؛ لا يمنع التصيّد ولا يجعل موقعًا مزيفًا موثوقًا."
  },

  network: {
    sections: [
      ["1. مكونات الاتصال", "يربط عنوان IP واجهة الشبكة بالاتصال، ويساعد DNS في تحديد الوجهة المرتبطة باسم النطاق. يمر الاتصال عبر أجهزة وخدمات متعددة، لذلك قد يكون سبب المشكلة في الجهاز أو الراوتر أو الخادم أو إعدادات الاسم."],
      ["2. المنافذ والخدمات", "المنافذ تساعد نظام التشغيل على توجيه الاتصالات إلى الخدمات المقصودة. فتح منفذ قد يكون مطلوبًا لتشغيل خدمة، لكنه يزيد التعرض إذا كانت الخدمة غير محدثة أو لا تحتاج الوصول العام."],
      ["3. المراقبة والجدار الناري", "يتبع الجدار الناري قواعد تحدد الاتصالات المسموحة. استخدم قائمة الخدمات المتوقعة وخط أساس للشبكة لمراجعة التغييرات؛ ولا تفحص إلا الأجهزة التي تملكها أو لديك تصريح واضح لاختبارها."]
    ],
    steps: ["ارسم مسار اتصال من جهازك إلى الراوتر ثم إلى خدمة ويب.", "اشرح وظيفة DNS وIP والمنافذ كلًا على حدة.", "راجع إعدادات الجدار الناري في بيئتك المملوكة.", "وثق أي تغيير غير متوقع وتحقق منه قبل الاستنتاج."],
    note: "ظهور منفذ في أداة تشخيص لا يثبت وحده وجود ثغرة؛ يجب معرفة الخدمة والسبب والسياق."
  },

  websecurity: {
    sections: [
      ["1. حدود الثقة في تطبيق الويب", "يمكن للمستخدم تعديل ما يصل إلى المتصفح وإرسال طلبات مباشرة، لذلك لا يكفي إخفاء زر أو تعطيل نموذج في الواجهة. يجب أن يتحقق الخادم من كل طلب حساس."],
      ["2. المصادقة والتفويض والجلسات", "المصادقة تحدد هوية المستخدم، أما التفويض فيحدد ما الذي يحق له فعله. تحقّق من الملكية والدور لكل مورد، واستخدم إعدادات جلسات مناسبة وألغِ الوصول بعد الخروج أو الاشتباه."],
      ["3. حماية المدخلات والبيانات", "استخدم استعلامات قاعدة بيانات مهيأة، وترميزًا مناسبًا لمخرجات المستخدم، والتحقق من المدخلات حسب سياقها. لا تعرض تفاصيل داخلية في رسائل الخطأ ولا تضع الأسرار في الشيفرة العامة."]
    ],
    steps: ["ارسم مكونات التطبيق وتدفق البيانات بينها.", "اختبر الصلاحيات بحسابات تجريبية مختلفة.", "راجع كيفية معالجة المدخلات ورسائل الخطأ.", "تحقق من إعدادات الجلسات والأسرار والاعتماديات قبل النشر."],
    note: "نفّذ الاختبارات داخل مشروعك أو ضمن نطاق مصرح به، ولا تستخدم بيانات حقيقية في اختبارات قد تعرضها للخطر."
  },

  coding: {
    sections: [
      ["1. التحقق من المدخلات", "حدد النوع والطول والنطاق المتوقع للبيانات، وطبّق التحقق على الخادم حتى لو كانت الواجهة تتحقق منها أيضًا. لا تفترض أن الطلب صادر عن واجهتك لمجرد أنه يحمل شكلًا صحيحًا."],
      ["2. فصل البيانات عن التعليمات", "استخدم استعلامات مهيأة بدل تركيب SQL بدمج نص المستخدم. وعند عرض نصوص المستخدم في المتصفح، استخدم وظائف الإطار التي ترمز النص حسب السياق وتجنب إدخال HTML غير موثوق مباشرة."],
      ["3. الأسرار والاعتماديات", "لا تخزن مفاتيح API أو كلمات مرور الخدمات داخل المستودع أو ملفات الواجهة العامة. استخدم إعدادات خادم محمية، وحدّث المكتبات وراجع تنبيهاتها واختبر حالات الخطأ والصلاحيات."]
    ],
    steps: ["راجع الأماكن التي تستقبل مدخلات المستخدم في مشروعك.", "استخدم معاملات أو استعلامات مهيأة لقواعد البيانات.", "احمِ مفاتيح الخدمة خارج الملفات العامة.", "اختبر الحالات غير الصحيحة والصلاحيات في بيئة تطوير."],
    note: "التحقق في المتصفح وحده لا يكفي؛ يمكن تجاوزه وإرسال طلبات مباشرة إلى الخادم."
  },

  logs: {
    sections: [
      ["1. ما الذي يجب تسجيله؟", "قد تشمل الأحداث المهمة تسجيل الدخول، وفشل المصادقة، وتغيير الصلاحيات، والتعديلات الإدارية، والأخطاء الحساسة. اختر أحداثًا تساعد التحقيق بدل تسجيل كل معلومة دون هدف."],
      ["2. ترتيب الأحداث وحمايتها", "الوقت المتزامن وهوية الجهاز ونوع الحدث ومعرّف الطلب تساعد على بناء خط زمني. احمِ السجلات من التعديل غير المصرح، وحدد الوصول ومدة الاحتفاظ، ولا تسجل كلمات المرور أو رموز الجلسات."],
      ["3. التنبيه والتحليل", "التنبيه إشارة للتحقق وليس إثباتًا نهائيًا. اربط الأحداث ببعضها، وقارنها بالنشاط المعتاد، ثم وثّق الأدلة والفرضيات وما يحتاج إلى تصعيد."]
    ],
    steps: ["حدد الأحداث الحساسة في نظامك.", "تأكد من تسجيل وقت الحدث وهويته ونتيجته.", "راجع قواعد التنبيه لتقليل الضجيج غير المفيد.", "اختبر أن السجلات لا تحتوي على أسرار ولا يمكن تعديلها بسهولة."],
    note: "احتفظ بالسجلات اللازمة للتحقيق وفق سياسة مناسبة، ولا تحذفها عند الاشتباه بحادث."
  },

  encryption: {
    sections: [
      ["1. التشفير أثناء النقل والتخزين", "التشفير أثناء النقل يحمي البيانات بين الأطراف عند استخدام بروتوكول مضبوط، والتشفير أثناء التخزين يحمي البيانات المخزنة عند عدم توفر المفتاح. لكل منهما إعدادات ومخاطر مختلفة."],
      ["2. التشفير مقابل التجزئة", "التشفير مصمم عادةً للسماح باسترجاع البيانات باستخدام مفتاح، بينما التجزئة تنتج قيمة تُستخدم للتحقق أو لأغراض أخرى دون استرجاع النص الأصلي بالطريقة نفسها. لذلك لا تستخدم التجزئة العادية وحدها لتخزين كلمات المرور."],
      ["3. إدارة المفاتيح", "قد يضعف تشفير قوي إذا سُرق المفتاح أو حُفظ بجانب البيانات بطريقة مكشوفة. استخدم مكتبات وبروتوكولات معروفة، وحدد من يصل للمفاتيح وكيف يتم تدويرها واستردادها."]
    ],
    steps: ["حدد البيانات التي تحتاج إلى حماية أثناء النقل أو التخزين.", "استخدم بروتوكولات ومكتبات تشفير معروفة بدل ابتكار خوارزمية.", "افصل مفاتيح التشفير عن البيانات قدر الإمكان.", "راجع صلاحيات الوصول إلى المفاتيح وخطة الاسترداد."],
    note: "التشفير لا يمنع تلقائيًا سرقة المعلومات من حساب مخترق أو جهاز مفتوح."
  },

  payments: {
    sections: [
      ["1. التحقق من المتجر", "تحقق من اسم النطاق وبيانات المتجر وسياسة الإرجاع ووسيلة التواصل قبل الدفع. علامة القفل وHTTPS لا تثبت وحدها أن البائع موثوق."],
      ["2. حماية عملية الدفع", "استخدم وسيلة دفع معروفة، وراجع مبلغ المعاملة والجهة قبل الموافقة. لا تشارك PIN أو رمز تحقق لمعاملة لم تبدأها بنفسك، ولا تحول أموالًا إلى حساب بديل بطلب وصل عبر رسالة غير متوقعة."],
      ["3. اكتشاف عملية غير معتادة", "فعّل إشعارات البنك وراجع كشوف المعاملات. إذا ظهرت عملية لا تعرفها، اتصل بالبنك من الرقم الرسمي واتبع تعليماته بشأن إيقاف البطاقة أو الاعتراض على المعاملة."]
    ],
    steps: ["تحقق من النطاق وبيانات المتجر.", "راجع المبلغ والجهة قبل تأكيد الدفع.", "لا تشارك رموز التحقق مع أي شخص.", "احتفظ بإيصال الدفع واتصل بالبنك عبر قناة رسمية عند الاشتباه."],
    note: "لا تتبع روابط استرداد الأموال أو الدعم التي تصل من مرسل مجهول؛ افتح موقع البنك أو المتجر الرسمي بنفسك."
  },

  iot: {
    sections: [
      ["1. مخاطر الأجهزة الذكية", "قد تحتوي الكاميرات والتلفزيونات وأجهزة المنزل الذكي على حسابات وخدمات شبكية وتجمع بيانات عن الاستخدام. ضعف كلمات المرور أو توقف التحديثات قد يجعلها نقطة دخول إلى الشبكة."],
      ["2. الإعدادات والدعم", "غيّر بيانات الدخول الافتراضية، وحدّث البرنامج الثابت من الشركة المصنعة، وعطّل الميزات غير المطلوبة. إذا توقف دعم الجهاز ولم يعد بالإمكان معالجة مخاطره، قلّل استخدامه الحساس وفكّر في استبداله."],
      ["3. عزل الشبكة والخصوصية", "استخدم شبكة منفصلة للأجهزة الذكية إن كان الراوتر يدعم ذلك، وراجع الوصول عن بُعد والأذونات والبيانات التي يرسلها الجهاز. العزل يقلل بعض مسارات الوصول لكنه لا يغني عن تحديث الجهاز وحماية حسابه."]
    ],
    steps: ["غيّر بيانات الدخول الافتراضية.", "حدّث البرنامج الثابت من المصدر الرسمي.", "عطّل الوصول والميزات التي لا تحتاج إليها.", "راجع صلاحيات الجهاز وشبكته والبيانات التي يشاركها."],
    note: "لا تفترض أن الجهاز آمن لمجرد أنه جديد أو متصل بالإنترنت؛ تحقق من الدعم والإعدادات والتحديثات."
  },

  identity: {
    sections: [
      ["1. ما البيانات التي تكشف هويتك؟", "قد تُستخدم صورة الوثيقة أو العنوان أو رقم الهاتف أو معلومات الحساب لاستهدافك أو انتحال هويتك. الخطر يتضاعف عندما تُجمع عدة بيانات معًا، لذلك قلل المشاركة غير الضرورية."],
      ["2. التحقق من الجهات", "قبل إرسال وثيقة أو بيانات شخصية، تحقق من هوية الجهة والغرض والقناة المستخدمة. لا تعتمد على شعار أو رسالة واردة؛ افتح الموقع الرسمي أو اتصل بوسيلة اتصال موثوقة."],
      ["3. عند إساءة الاستخدام", "احتفظ بالأدلة وأبلغ المنصة أو الجهة المعنية عبر القنوات الرسمية. إذا شمل الأمر حسابًا ماليًا أو وثائق حساسة، اتبع إجراءات الجهة المختصة وراجع التنبيهات والحسابات المرتبطة."]
    ],
    steps: ["قلل البيانات الشخصية المنشورة في الحسابات العامة.", "تحقق من الجهة قبل إرسال وثيقة.", "فعّل تنبيهات الحسابات المهمة.", "احتفظ بالأدلة وأبلغ عن الحسابات المنتحلة."],
    note: "لا ترسل وثيقة هوية كاملة إلى شخص أو موقع مجهول لمجرد أنه طلبها بسرعة."
  },

  access: {
    sections: [
      ["1. مبدأ أقل صلاحية", "امنح المستخدم أو التطبيق الحد الأدنى اللازم لإنجاز المهمة. الصلاحيات الزائدة توسع الضرر المحتمل إذا سُرق الحساب أو تعرض البرنامج للاختراق."],
      ["2. الأدوار والملكية", "يمكن استخدام أدوار مثل مستخدم ومدير لتحديد المهام، لكن يجب أن يتحقق الخادم من الدور والملكية عند كل عملية حساسة. إخفاء الأزرار أو الروابط في الواجهة ليس نظام تفويض كافيًا."],
      ["3. المراجعة وسحب الصلاحية", "راجع الحسابات والأدوار والتطبيقات المرتبطة دوريًا، وألغِ وصول من انتهت حاجته. احتفظ بسجل تغييرات مناسب ليساعد على التحقيق عند حدوث تعديل غير متوقع."]
    ],
    steps: ["اكتب الأدوار التي يحتاجها التطبيق.", "حدد أقل صلاحية لكل دور.", "اختبر وصول مستخدم إلى مورد يملكه وآخر لا يملكه.", "ألغِ الحسابات والصلاحيات القديمة وراجع سجل التغييرات."],
    note: "التحقق من الصلاحيات يجب أن يتم على الخادم؛ لا تعتمد على ما تعرضه الواجهة وحدها."
  },

  vulnerability: {
    sections: [
      ["1. جرد الأصول ومعرفة الضعف", "لا يمكنك معالجة ما لا تعرف أنه موجود. سجّل الأنظمة والخدمات والمكتبات والإصدارات، وتابع تنبيهات الشركات المصنعة ومصادر الأمان الرسمية."],
      ["2. ترتيب الأولويات", "رتّب الإصلاح بحسب خطورة الضعف وإمكانية استغلاله وأهمية الأصل ومدى تعرضه. قد تتطلب ثغرة في خدمة عامة حساسة اهتمامًا أسرع من مشكلة مشابهة في مختبر معزول."],
      ["3. الإصلاح والتحقق", "طبّق التحديث أو التغيير المناسب، واختبر أثره على الخدمة، ثم تحقق من نجاح الإصلاح. وثّق الاستثناءات المؤقتة ومسؤول المتابعة وموعد إعادة المراجعة."]
    ],
    steps: ["أنشئ قائمة للأنظمة والإصدارات المستخدمة.", "تابع تنبيهات الأمان الرسمية للبرامج المهمة.", "حدّد الأولوية بحسب الأثر والتعرض وإمكانية الاستغلال.", "اختبر الإصلاح ووثّق نتيجته."],
    note: "لا تختبر ثغرة في موقع عام دون إذن واضح ونطاق محدد؛ استخدم مختبرًا تملكه أو بيئة تدريب مصرحًا بها."
  },

  careers: {
    sections: [
      ["1. الأساسيات المشتركة", "تفيد الشبكات وأنظمة التشغيل والويب ومبادئ الهوية والصلاحيات في معظم الوظائف الأمنية. ابدأ بفهم ما يحدث داخل النظام قبل الاعتماد على الأدوات المتقدمة."],
      ["2. استكشاف المسارات", "يركز SOC وBlue Team على المراقبة والتحليل والاستجابة، ويركز أمن التطبيقات على تصميم البرامج واختبار ضوابطها، بينما تحتاج السحابة والحوكمة إلى مهارات مختلفة بحسب الدور. لكل مسار مسؤوليات ومهارات خاصة."],
      ["3. مشاريع تثبت المهارة", "أنشئ مختبرًا قانونيًا، أو حلل سجلات عينة، أو وثّق مراجعة أمنية لمشروع محلي. اشرح الهدف والبيئة والخطوات والنتائج والقيود؛ لا تدّعِ خبرة لم تمارسها ولا تنشر أسرارًا أو بيانات شخصية."]
    ],
    steps: ["تعلم أساسيات الشبكات وأنظمة التشغيل.", "اختر مسارًا تجريبيًا واحدًا وطبّق مشروعًا صغيرًا.", "وثّق خطوات العمل والنتائج بما يستطيع غيرك مراجعتها.", "حدد المهارات الناقصة وخطة تعلم واقعية للمشروع التالي."],
    note: "قوة ملف الأعمال تأتي من وضوح المشروع وفهمك له، لا من عدد الأدوات أو الادعاءات المتقدمة."
  },

  ethics: {
    sections: [
      ["1. الإذن ونطاق الاختبار", "القدرة على الوصول إلى نظام عبر الإنترنت لا تعني امتلاك الإذن لاختباره. احصل على موافقة واضحة وحدد الأنظمة المسموحة والأساليب والوقت وحدود الأثر قبل البدء."],
      ["2. تقليل الضرر", "لا تجمع بيانات أشخاص أو تنسخها دون حاجة وإذن، ولا تنفذ اختبارات قد تعطل الخدمة خارج النطاق المتفق عليه. إذا ظهر أثر غير متوقع، أوقف النشاط واتبع إجراء الإبلاغ."],
      ["3. الإبلاغ المسؤول", "وثّق الملاحظة بما يكفي ليفهمها مالك النظام دون كشفها للعامة أو مشاركة أسرار المستخدمين. استخدم القناة المعتمدة، واتبع تعليمات الجهة بشأن الإفصاح والتعامل مع الأدلة."]
    ],
    steps: ["تحقق من ملكية النظام أو احصل على إذن صريح.", "اكتب النطاق والوقت والأساليب المسموحة قبل الاختبار.", "تجنب نسخ البيانات أو تعطيل الخدمات.", "وثّق النتائج وأبلغ الجهة المالكة عبر القناة المعتمدة."],
    note: "وجود ثغرة لا يمنحك إذنًا لاختبارها أو استغلالها؛ التزم بالقانون والنطاق المصرح به."
  }
};

const COURSE_EXTRA_SECTIONS = {
  "accounts": [
    [
      "4. مصطلحات أساسية",
      "المصادقة تعني إثبات هويتك، أما التفويض فيحدد ما الذي يسمح لك الحساب بفعله. المصادقة متعددة العوامل تضيف نوعًا آخر من الإثبات، مثل تطبيق مصادقة أو مفتاح أمان. مدير كلمات المرور يساعدك على إنشاء كلمات مختلفة وتخزينها بأمان بدل حفظها جميعًا في ذهنك."
    ],
    [
      "5. مثال من الحياة اليومية",
      "تصل إليك رسالة تنبّهك إلى تسجيل دخول من جهاز لا تعرفه. لا تضغط رابطًا داخل الرسالة مباشرة؛ افتح التطبيق أو الموقع الرسمي بنفسك، وراجع نشاط الحساب، ثم أنهِ الجلسة غير المعروفة وغيّر كلمة المرور إذا ظهرت دلائل على اختراق. بعد ذلك راجع البريد ورقم الهاتف المستخدمين للاسترداد."
    ],
    [
      "6. كيف تتحقق من الحماية؟",
      "تأكد أن لكل حساب مهم كلمة مرور فريدة، وأن المصادقة الإضافية مفعّلة، وأن وسيلة الاسترداد تخصك. جرّب فهم طريقة استرداد الحساب قبل وقوع مشكلة، وخزّن رموز الاسترداد بعيدًا عن الحساب نفسه. لا ترسل كلمة المرور أو رمز تسجيل الدخول إلى أي شخص، حتى لو ادعى أنه من الدعم الفني."
    ]
  ],
  "phishing": [
    [
      "4. كلمات ومؤشرات مهمة",
      "التصيّد هو خداع يستهدف دفعك إلى كشف معلومات أو تنفيذ إجراء. انتحال الهوية يعني أن الرسالة تبدو كأنها من جهة أخرى، والنطاق هو اسم الموقع الذي تحدد من خلاله الجهة التي تتصل بها. الرابط المختصر أو اسم المرسل الظاهر قد يخفيان الوجهة الحقيقية؛ لذلك افحص العنوان كاملًا دون فتحه."
    ],
    [
      "5. مثال تطبيقي",
      "تصلك رسالة تقول إن شحنتك ستُلغى خلال دقائق ما لم تدفع رسومًا عبر رابط. الاستعجال وحده ليس دليلًا قاطعًا، لكنه سبب للتوقف. افتح موقع شركة الشحن المعروف بنفسك، واكتب رقم التتبع هناك. لا تستخدم رقم الهاتف أو الرابط المرفق إذا لم تكن متأكدًا من المصدر، وأبلغ عن الرسالة المشبوهة."
    ],
    [
      "6. كيف تتخذ القرار الصحيح؟",
      "اسأل نفسك: هل كنت أتوقع هذه الرسالة؟ هل يطابق عنوان المرسل النطاق الرسمي؟ هل يطلب مني كلمة مرور أو رمز تحقق أو دفعًا عاجلًا؟ تحقّق من الطلب عبر قناة مستقلة. الأخطاء الإملائية قد تكون مؤشرًا لكنها ليست شرطًا، ووجود HTTPS أو شعار معروف لا يثبت أن الجهة أصلية."
    ]
  ],
  "device": [
    [
      "4. افهم مبدأ أقل صلاحية",
      "صلاحية المدير تسمح بتغييرات أوسع على الجهاز، لذلك لا تحتاجها معظم المهام اليومية. استخدام حساب عادي يقلل أثر تشغيل برنامج ضار عن طريق الخطأ. طبّق المبدأ نفسه على التطبيقات: لا تمنح الوصول إلى الملفات أو الميكروفون أو الموقع إلا عندما يكون ضروريًا لوظيفتها."
    ],
    [
      "5. مثال تطبيقي",
      "تظهر نافذة منبثقة تقول إن جهازك مصاب وتطلب تنزيل أداة فورًا. لا تتبع الرابط ولا تتصل بالرقم الظاهر. أغلق النافذة، وافتح أداة الحماية المثبتة من مصدر موثوق، وتحقق من تحديث النظام. إذا كان الجهاز تابعًا للعمل، اتبع سياسة الدعم ولا تثبّت برامج من تلقاء نفسك."
    ],
    [
      "6. قائمة فحص بعد التأمين",
      "راجع تاريخ آخر تحديث للنظام والمتصفح، وقفل الشاشة، والتشفير إن كان متاحًا، وبرامج بدء التشغيل والتطبيقات المثبتة. احذف ما لا تحتاجه من مصدر الإعدادات الرسمي، واحتفظ بنسخة احتياطية. البطء أو سخونة الجهاز لا يثبتان وحدهما وجود برمجية خبيثة؛ استند إلى فحص موثوق ومؤشرات متعددة."
    ]
  ],
  "wifi": [
    [
      "4. افصل بين إعدادات الشبكة",
      "كلمة مرور Wi-Fi تسمح للأجهزة بالاتصال بالشبكة، بينما كلمة مرور الإدارة تتحكم بإعدادات الراوتر. تغيير الأولى وحده لا يحمي لوحة الإدارة إذا بقيت بياناتها الافتراضية. استخدم تشفيرًا حديثًا مثل WPA3 أو WPA2-AES بحسب دعم الجهاز، وحدّث البرنامج الثابت من الشركة المصنّعة."
    ],
    [
      "5. مثال تطبيقي",
      "عند تركيب راوتر جديد، افتح دليل الشركة أو تطبيقها الرسمي، وغيّر بيانات الإدارة الافتراضية، واضبط كلمة مرور فريدة للشبكة. راجع الأجهزة المتصلة، وعطّل الإدارة عن بُعد أو WPS إذا لم تكن تحتاجهما. إذا أنشأت شبكة للضيوف، تأكد من أن إعداداتها تقلل وصولهم إلى أجهزتك الأساسية وفق إمكانات الراوتر."
    ],
    [
      "6. اختبار الإعدادات",
      "تحقق من نوع التشفير، وتاريخ تحديث الراوتر، وبيانات إدارة الجهاز، والأجهزة المتصلة. لا تعتبر إخفاء اسم الشبكة حماية أساسية؛ فهو لا يعوّض التشفير وكلمة المرور القوية. احتفظ بتعليمات الاسترداد في مكان آمن، ولا تغيّر إعدادًا لا تفهم أثره قبل مراجعة دليل الشركة."
    ]
  ],
  "incident": [
    [
      "4. مراحل الاستجابة للحادث",
      "قد تمر الاستجابة بمراحل: الاستعداد، والكشف والتحليل، والاحتواء، والإزالة، والتعافي، ثم مراجعة ما حدث. لا تسير كل الحالات بالطريقة نفسها، وقد تتداخل المراحل. وجود خطة واضحة يحدد من يجب إبلاغه، وكيف تُحفظ الأدلة، ومن يوافق على عزل جهاز أو إعادة خدمة إلى العمل."
    ],
    [
      "5. مثال تطبيقي",
      "تلاحظ تسجيلات دخول غريبة إلى حساب عمل. سجّل الوقت والحساب والأحداث الظاهرة، وأبلغ المسؤول من قناة معتمدة. نفّذ إجراءات الاحتواء المحددة في الخطة، مثل إلغاء جلسة أو تقييد الحساب عند الحاجة. لا تحذف السجلات أو تهيئ الجهاز عشوائيًا؛ فقد تكون المعلومات مهمة لمعرفة نطاق الحادث وسببه."
    ],
    [
      "6. كيف تعرف أن التعافي آمن؟",
      "لا يكفي اختفاء التنبيه؛ يجب معالجة السبب، ومراجعة الحسابات والصلاحيات، وفحص الأنظمة المتأثرة، والتحقق من سلامة البيانات والخدمة. وثّق القرارات والوقت والنتائج، وحدد إجراءً يمنع تكرار المشكلة. في بيئة العمل، اتبع خطة المؤسسة وفريق الاستجابة بدل اتخاذ خطوات قد تضر بالأدلة."
    ]
  ],
  "privacy": [
    [
      "4. مفهوم تقليل البيانات",
      "تقليل البيانات يعني جمع المعلومات الضرورية للغرض فقط، وتحديد من يستطيع الوصول إليها ومدة الاحتفاظ بها. كل نسخة إضافية من ملف حساس قد تزيد صعوبة حمايته. قبل نشر صورة أو مستند، افحص ما يظهر فيه من عنوان أو رقم أو بيانات أشخاص آخرين، وليس النص المقصود فقط."
    ],
    [
      "5. مثال تطبيقي",
      "تطلب لعبة بسيطة إذنًا دائمًا للوصول إلى الميكروفون وجهات الاتصال والموقع. اسأل إن كانت هذه الأذونات لازمة فعلًا. امنح الحد الضروري فقط، واستخدم خيار السماح أثناء الاستخدام إن توفر، ثم ألغِ الصلاحيات التي لا تحتاج إليها من إعدادات الجهاز."
    ],
    [
      "6. مراجعة الخصوصية",
      "راجع جمهور المنشورات، ومعلومات الملف العام، وأذونات التطبيقات، والحسابات المرتبطة، وخيارات حذف البيانات. لا تفترض أن حذف منشور من واجهة واحدة يمحو كل نسخة أو نسخة احتياطية. قبل رفع ملف إلى خدمة خارجية، تحقق من موثوقيتها ومن أنك تملك الإذن لمشاركة محتواه."
    ]
  ],
  "malware": [
    [
      "4. أنواع البرمجيات الخبيثة",
      "قد يسرق برنامج تجسس المعلومات، وقد يفتح حصان طروادة بابًا لوظائف غير مرغوبة بينما يبدو كأنه برنامج عادي، وقد تنتشر دودة عبر أنظمة أو شبكات. تختلف الأهداف والسلوكيات؛ لذلك لا يكفي اسم الملف أو مظهره لمعرفة ما يفعله، ولا ينبغي تشغيل ملف مشبوه لمعرفة ذلك."
    ],
    [
      "5. مثال تطبيقي",
      "تصل رسالة غير متوقعة فيها ملف مضغوط أو مثبت برنامج. لا تفتحه لمجرد أن اسم المرسل مألوف؛ قد يكون الحساب مخترقًا. تحقق من الرسالة عبر وسيلة مستقلة، ونزّل البرامج من المواقع الرسمية، واترك أدوات الحماية تعمل. إذا فتحت ملفًا مشتبهًا به على جهاز عمل، أبلغ فريق الدعم الأمني."
    ],
    [
      "6. ما الذي تفعله عند الاشتباه؟",
      "افصل القرار عن التخمين: سجّل ما ظهر، وتجنب إدخال كلمات المرور أو إجراء معاملات حساسة من الجهاز، واتبع فحصًا موثوقًا وخطة المؤسسة. لا تحذف ملفات عشوائيًا ولا تثبّت أدوات من إعلانات منبثقة. بعض الأعراض لها أسباب عادية، لذا اعتمد على نتائج الفحص والسياق بدل عرض واحد."
    ]
  ],
  "ransomware": [
    [
      "4. لماذا النسخ الاحتياطي وحده لا يكفي؟",
      "تستهدف بعض هجمات الفدية النسخ المتصلة بالشبكة أو تستخدم بيانات مسروقة للضغط حتى بعد تشفير الملفات. لهذا تحتاج إلى نسخ محمية ومنفصلة، وصلاحيات محدودة، واختبار استعادة دوري. يجب أن تعرف أي نسخة يمكن الوثوق بها قبل إرجاع البيانات إلى بيئة تعرضت للاختراق."
    ],
    [
      "5. مثال تطبيقي",
      "إذا تغيّرت أسماء ملفات كثيرة فجأة أو ظهرت رسالة فدية، لا تتعامل مع الجهاز كأنه مشكلة عادية. اتبع خطة الاستجابة وأبلغ المختصين، واعزل الأنظمة حسب الإجراء المعتمد، وحافظ على السجلات. لا توصل نسخك الاحتياطية بالجهاز المصاب للتجربة، ولا تفترض أن دفع الفدية يضمن استعادة الملفات."
    ],
    [
      "6. خطة وقاية قابلة للتطبيق",
      "اختبر استرجاع عينة من نسخة احتياطية، واحمِ حسابات الإدارة بالمصادقة متعددة العوامل، وراجع الوصول إلى الملفات المشتركة. حدّث الأنظمة وأغلق الخدمات غير الضرورية، وحدد مسبقًا جهة الإبلاغ. بعد الحادث، تحقق من سبب الاختراق وسلامة النسخ قبل إعادة التشغيل الطبيعي."
    ]
  ],
  "backup": [
    [
      "4. النسخ والمزامنة ليسا الشيء نفسه",
      "المزامنة تنقل التغييرات بين الأجهزة أو الخدمات، لذلك قد تنتقل الحذوفات أو الملفات المشفرة أيضًا. النسخة الاحتياطية الجيدة تتيح العودة إلى نسخة سابقة سليمة، وتحفظ نسخًا يصعب على حساب يومي واحد حذفها كلها. حدد ما تحتاج إلى استعادته وكم فقدًا زمنيًا يمكنك تحمله."
    ],
    [
      "5. مثال تطبيقي",
      "لديك مشروع برمجي مهم. احفظ نسخة في مكان منفصل عن جهاز التطوير، واستخدم سجل إصدارات للكود عند ملاءمته، واحتفظ بنسخة مستقلة من الملفات والإعدادات التي يصعب إعادة بنائها. جرّب استعادة ملف إلى مجلد تجريبي، وتأكد أن النسخة تفتح وأنها ليست مجرد رابط إلى الملف الأصلي."
    ],
    [
      "6. قياس نجاح النسخ",
      "تظهر رسالة نجاح النسخ أن المهمة انتهت، لكنها لا تثبت وحدها أن كل الملفات قابلة للاسترجاع. راجع تاريخ النسخة، وحجمها، والأخطاء، وصلاحية الوصول إليها، ثم نفذ اختبار استعادة دوريًا. احتفظ بجدول واضح للنسخ ومسؤول المتابعة ومدة الاحتفاظ، واحمِ النسخ التي تحتوي بيانات حساسة."
    ]
  ],
  "social": [
    [
      "4. حيل التأثير النفسي",
      "قد يستغل المهاجم الاستعجال أو الخوف أو السلطة أو رغبتك في مساعدة شخص. قد يدعي أنه مدير أو موظف دعم أو قريب، ويطلب رمزًا أو تحويلًا أو تثبيت برنامج. هذه الحيل لا تعتمد دائمًا على التقنية؛ أحيانًا يكفي أن تتصرف قبل التفكير والتحقق."
    ],
    [
      "5. مثال تطبيقي",
      "يتصل بك شخص يقول إنه من الدعم ويحتاج رمز التحقق لإيقاف اختراق. لا تشارك الرمز؛ فهو غالبًا دليل دخول يخصك. أنهِ الاتصال وتواصل مع الجهة عبر رقم رسمي محفوظ لديك. إذا كان الطلب داخل مؤسسة، استخدم الإجراء المعتاد للتحقق من هوية الموظف بدل تجاوز الإجراءات بسبب الاستعجال."
    ],
    [
      "6. قاعدة التوقف والتحقق",
      "توقف قبل دفع المال أو إعطاء وصول عن بُعد أو مشاركة بيانات الدخول. تحقق بقناة مستقلة لا يختارها صاحب الطلب المفاجئ، ولا تعتمد على الصوت أو الصورة وحدهما لأنهما قد يُنتحلان. وثّق المحاولة وأبلغ المنصة أو المؤسسة، وغيّر بيانات الدخول إذا شاركت معلومات حساسة بالفعل."
    ]
  ],
  "email": [
    [
      "4. ماذا تراجع في إعدادات البريد؟",
      "حماية البريد لا تتوقف عند كلمة المرور. افحص الجلسات النشطة، ووسائل الاسترداد، وقواعد التحويل والتصفية، والتطبيقات المرتبطة. قد تخفي قاعدة تحويل غير متوقعة نسخًا من الرسائل أو تتيح لشخص آخر مراقبة البريد. احذف أي إعداد لا تعرفه بعد التحقق من أثره."
    ],
    [
      "5. مثال تطبيقي",
      "تصلك رسالة من مورد تطلب تغيير رقم الحساب البنكي للدفعات. حتى لو كانت صياغتها طبيعية، لا تعتمد على الرد على الرسالة نفسها. اتصل بالمورد باستخدام رقم موثوق مسجل سابقًا، وطبّق إجراء الموافقة المعتاد، واحتفظ بسجل للتحقق."
    ],
    [
      "6. التحقق من الرسائل المشبوهة",
      "افحص العنوان الكامل والروابط والمرفقات والطلب المطلوب، لكن لا تعتمد على علامة واحدة. قد تأتي الرسالة من حساب حقيقي مخترق أو من جهة تبدو متشابهة. افتح خدماتك بكتابة العنوان الرسمي بنفسك، وأبلغ عن الرسائل المشبوهة، ولا ترسل كلمات المرور أو رموز التحقق بالبريد."
    ]
  ],
  "browser": [
    [
      "4. الإضافات والأذونات",
      "الإضافة ليست مجرد زر؛ قد تحصل بحسب صلاحياتها على القدرة على قراءة صفحات أو تغيير محتواها. ثبّت أقل عدد ممكن من الإضافات، وتحقق من المطور والصلاحيات والتحديثات. أذونات الكاميرا والميكروفون والموقع يجب أن تكون مرتبطة بحاجة واضحة، ويمكن إلغاؤها عند انتهاء الحاجة."
    ],
    [
      "5. مثال تطبيقي",
      "يظهر تحذير شهادة عند فتح موقع بنك أو متجر. لا تتجاوزه لتكمل بسرعة، لأنك قد لا تكون متصلًا بالوجهة المقصودة. أغلق الصفحة وافتح التطبيق أو العنوان الرسمي بطريقة معروفة، وتحقق من إعدادات الوقت والشبكة إذا تكرر التحذير. لا تدخل بيانات حساسة قبل فهم السبب."
    ],
    [
      "6. ماذا لا يفعل التصفح الخاص؟",
      "التصفح الخاص يقلل عادةً حفظ سجل الجلسة محليًا بعد إغلاق النافذة، لكنه لا يخفي نشاطك عن كل المواقع أو جهة العمل أو مزود الاتصال، ولا يحميك من التصيّد تلقائيًا. استخدمه حسب الحاجة، مع استمرار تحديث المتصفح وفحص الأذونات والتحقق من عناوين المواقع."
    ]
  ],
  "mobile": [
    [
      "4. أذونات التطبيقات",
      "قد يطلب التطبيق الوصول إلى الصور أو الموقع أو الرسائل أو جهات الاتصال. افهم سبب الطلب، واختر أقل مستوى متاح، مثل السماح أثناء الاستخدام بدل السماح الدائم. التطبيقات التي تحصل على صلاحيات أكثر مما تحتاج تزيد أثر اختراقها أو إساءة استخدامها."
    ],
    [
      "5. مثال تطبيقي",
      "إذا فقدت هاتفك، استخدم خدمة العثور على الجهاز التابعة للنظام من جهاز موثوق، واتبع خيارات القفل أو المسح بحسب الموقف. أبلغ شركة الاتصالات أو الجهات المعنية عند الحاجة، وألغِ الجلسات المهمة وراجع حسابك الأساسي. لا تدخل كلمة مرورك في صفحات العثور على الهاتف التي تصل عبر رسائل مجهولة."
    ],
    [
      "6. حماية الهاتف يوميًا",
      "حدّث النظام والتطبيقات، واستخدم قفل شاشة قويًا، وثبّت التطبيقات من المتاجر الرسمية قدر الإمكان، وراجع الأذونات دوريًا. فعّل النسخ الاحتياطي المناسب واختبر الاستعادة. تجنب توصيل الهاتف بحواسيب غير موثوقة أو قبول ملفات واتصالات لا تتوقعها، ولا تعتمد على أداة واحدة لكل المخاطر."
    ]
  ],
  "cloud": [
    [
      "4. المسؤولية المشتركة",
      "مزود الخدمة يحمي أجزاء من البنية التحتية، لكن المستخدم أو المؤسسة تظل مسؤولة عن إعدادات كثيرة مثل الحسابات والصلاحيات وتصنيف البيانات وإعدادات المشاركة. حدود المسؤولية تختلف حسب نوع الخدمة والعقد؛ اقرأ وثائق المزود ولا تفترض أن وجود البيانات في السحابة يعني أنها آمنة تلقائيًا."
    ],
    [
      "5. مثال تطبيقي",
      "تكتشف أن مجلدًا سحابيًا يمكن لأي شخص لديه الرابط فتحه. أوقف المشاركة العامة إذا لم تكن مطلوبة، وراجع من شاهد أو عدّل الملفات بحسب السجلات المتاحة، ثم حدّد أقل مجموعة تحتاج الوصول. لا تكتفِ بتغيير الرابط إن كانت الخدمة توفر صلاحيات بالمستخدم أو المجموعة."
    ],
    [
      "6. قائمة مراجعة للخدمة السحابية",
      "راجع المصادقة الإضافية، وحسابات الإدارة، والصلاحيات، وسجلات التدقيق، والتشفير، والنسخ الاحتياطية، وروابط المشاركة العامة. اختبر استعادة البيانات وافصل وصول التطبيقات غير المستخدمة. لا تضع مفاتيح API أو كلمات المرور في مستودع كود عام أو ملف إعدادات يتم نشره للآخرين."
    ]
  ],
  "ai": [
    [
      "4. مخاطر الذكاء الاصطناعي",
      "قد ينتج النموذج معلومات تبدو مقنعة لكنها غير صحيحة، وقد تحتوي مخرجاته على كود به ثغرات أو نصوص مسيئة. كما قد تؤدي مشاركة بيانات حساسة مع خدمة خارجية إلى كشفها بحسب إعدادات الخدمة. لذلك استخدم المخرجات كمسودة تحتاج إلى تحقق، لا كحقيقة مضمونة."
    ],
    [
      "5. مثال تطبيقي",
      "يقترح مساعد ذكي أمرًا لتغيير إعدادات الخادم أو يطلب منك لصق مفتاح API لتشخيص المشكلة. لا تنفّذ أمرًا لا تفهمه ولا تشارك الأسرار. اقرأ التوثيق الرسمي، اختبر الحل في بيئة تجريبية، وافحص الكود ونتائجه قبل دمجه في مشروع حقيقي."
    ],
    [
      "6. استخدام آمن وواعٍ",
      "لا تدخل معلومات شخصية أو أسرار عمل في أداة قبل فهم سياسة البيانات وصلاحياتها. تحقق من الادعاءات المهمة عبر مصادر موثوقة، وراجع الروابط والكود يدويًا، واحتفظ بإشراف بشري على القرارات الحساسة. يمكن استخدام الذكاء الاصطناعي لتوليد أفكار أو شرح مفهوم، لكنه لا يعفيك من الفهم والاختبار."
    ]
  ],
  "downloads": [
    [
      "4. لماذا المصدر أهم من اسم الملف؟",
      "يمكن تغيير اسم الملف وأيقونته وامتداده الظاهر لخداع المستخدم، لذلك لا يثبت المظهر أن الملف آمن. نزّل البرامج من موقع الشركة أو متجر موثوق، وتجنّب النسخ المقرصنة والمرفقات غير المتوقعة. قد تُستخدم التواقيع الرقمية أو قيم التحقق للمساعدة في التأكد من المصدر وسلامة الملف عندما توفر الشركة ذلك."
    ],
    [
      "5. مثال تطبيقي",
      "يظهر إعلان يقول إن مشغل الفيديو قديم ويطلب تثبيت تحديث من موقع غير معروف. لا تتبع الإعلان. افتح التطبيق أو صفحة المطور الرسمية وابحث عن التحديث منها. افحص الملف بأداة الحماية الموثوقة، ولا تعطِ صلاحيات المدير لملف لم تتحقق من مصدره."
    ],
    [
      "6. قبل تشغيل الملف",
      "تحقق من الموقع الذي حملته منه، واسم المطور والتوقيع إن توفر، وتوافقه مع نظامك، ونتيجة الفحص الأمني. إذا لم تكن تتوقع الملف أو لا تعرف لماذا تحتاجه فلا تشغّله. لا تعطّل الحماية لتثبيت برنامج مجهول، واطلب مساعدة مختصة عند ظهور تحذير لا تفهمه."
    ]
  ],
  "publicwifi": [
    [
      "4. ما مخاطر الشبكات العامة؟",
      "قد يكون اسم الشبكة مزيفًا أو إعدادها ضعيفًا، وقد تتيح الشبكات غير الموثوقة مراقبة بعض حركة الاتصال أو محاولة توجيهك إلى صفحات مزيفة. التشفير الصحيح داخل التطبيقات يقلل بعض المخاطر، لكنه لا يجعل كل شبكة أو موقع موثوقًا ولا يحمي من التصيّد أو اختراق الجهاز."
    ],
    [
      "5. مثال تطبيقي",
      "تجد شبكتين تحملان اسم المقهى نفسه. اسأل الموظف عن اسم الشبكة الصحيح بدل التخمين. عند التعامل مع معلومات حساسة، استخدم بيانات الهاتف أو وسيلة اتصال موثوقة إن أمكن، وتجنب المعاملات المهمة من جهاز عام. لا تثبّت شهادة أو تطبيقًا بطلب من صفحة اتصال غير متوقعة."
    ],
    [
      "6. بعد الانتهاء من الشبكة العامة",
      "أوقف الاتصال التلقائي بالشبكات غير المعروفة، وانسَ الشبكة العامة عند عدم الحاجة، وحدّث النظام، واستخدم المصادقة الإضافية للحسابات المهمة. إذا ظهرت صفحة تطلب كلمة مرور الحساب نفسه لتفعيل Wi-Fi، توقف وتحقق. خدمات VPN قد تحمي جزءًا من الاتصال بحسب موفرها، لكنها لا تجعل المواقع الاحتيالية آمنة."
    ]
  ],
  "network": [
    [
      "4. مصطلحات الشبكات الأساسية",
      "عنوان IP يعرّف واجهة على الشبكة، وDNS يساعد على تحويل اسم النطاق إلى عنوان، والمنفذ يحدد خدمة داخل الجهاز، أما الجدار الناري فيطبق قواعد على الاتصالات. فهم هذه العناصر يسهّل تفسير سبب وصول خدمة أو عدم وصولها، لكنه لا يعني أن كل اتصال مسموح آمن."
    ],
    [
      "5. مثال تطبيقي",
      "إذا لم يفتح موقع، افحص اتصال الشبكة ثم اسم النطاق وإعدادات الجهاز قبل تغيير الجدار الناري عشوائيًا. في شبكة تملكها، راجع الأجهزة والخدمات المعروفة فقط. لا تفحص أنظمة الآخرين بحثًا عن منافذ دون إذن واضح؛ استخدم مختبرًا محليًا للتعلم والتجارب."
    ],
    [
      "6. تقسيم الشبكة ومراجعتها",
      "ضع الأجهزة التي تختلف في مستوى الثقة ضمن شبكات أو نطاقات منفصلة عندما تسمح البنية بذلك، وقلّل الخدمات المفتوحة. راجع قواعد الجدار الناري وسجلات الاتصالات، ووثّق سبب كل استثناء. أي قاعدة واسعة تسمح لكل الأجهزة بالوصول إلى كل الخدمات تحتاج إلى مراجعة دقيقة قبل اعتمادها."
    ]
  ],
  "websecurity": [
    [
      "4. التحقق من الهوية والصلاحية",
      "تسجيل الدخول يثبت هوية المستخدم، أما فحص الصلاحيات فيحدد إن كان مسموحًا له قراءة مورد أو تعديله. يجب على الخادم إعادة التحقق من الصلاحية عند كل طلب حساس؛ إخفاء زر في الواجهة أو تغيير رابط لا يمنع إرسال طلب مباشر."
    ],
    [
      "5. مثال تطبيقي",
      "في صفحة ملف شخصي، قد يغيّر المستخدم رقم المعرّف في الطلب ويحاول رؤية بيانات شخص آخر. على الخادم التحقق من ملكية المورد والصلاحية قبل إرسال البيانات. اختبر هذه الحالات في تطبيقك أو مختبر مصرح به، ولا تجربها على موقع حقيقي لا تملكه."
    ],
    [
      "6. أساسيات الإدخال والإخراج",
      "اعتبر كل مدخل من المستخدم غير موثوق حتى يتم التحقق منه، واستخدم استعلامات قاعدة بيانات ذات معاملات بدل تركيب الأوامر يدويًا. عند عرض نص المستخدم داخل صفحة، استخدم ترميزًا مناسبًا للسياق لتقليل مخاطر XSS. استخدم HTTPS، وإدارة جلسات سليمة، ورسائل خطأ لا تكشف أسرار النظام."
    ]
  ],
  "coding": [
    [
      "4. التحقق من المدخلات وإخراجها",
      "تحقق من نوع البيانات وطولها ونطاقها وقواعدها على الخادم، ولا تعتمد على التحقق في المتصفح وحده. عند عرض بيانات داخل HTML أو JavaScript أو استعلام، استخدم الطريقة الآمنة المناسبة لكل سياق. لا تخلط بين التحقق من الصحة وترميز الإخراج؛ لكل واحد غرض مختلف."
    ],
    [
      "5. مثال تطبيقي",
      "يحتاج مشروعك إلى مفتاح خدمة. لا تكتبه داخل ملف JavaScript يصل إلى المتصفح ولا ترفعه إلى مستودع عام. خزّنه في إعدادات بيئة الخادم أو مدير أسرار مناسب، وامنح التطبيق صلاحيات الحد الأدنى، وبدّل المفتاح إذا ظهر في سجل أو ملف منشور."
    ],
    [
      "6. اختبار الكود الأمني",
      "اختبر الحالات المتوقعة والخاطئة، والمدخلات الفارغة والطويلة وغير المعتادة، والمستخدم الذي لا يملك الصلاحية. حدّث المكتبات وتابع التنبيهات الأمنية، ولا تكشف تفاصيل حساسة في رسائل الخطأ أو السجلات. راجع التغييرات قبل النشر، واحتفظ بطريقة للتراجع إذا أدّى التحديث إلى مشكلة."
    ]
  ],
  "logs": [
    [
      "4. ما المعلومات المفيدة في السجل؟",
      "قد يفيد تسجيل وقت الحدث، ونوع العملية، والنتيجة، ومعرّفًا للطلب، وهوية الحساب أو الخدمة عند الحاجة. يجب ضبط الوقت بين الأنظمة حتى يمكن ترتيب الأحداث. لا تسجل كلمات المرور أو رموز الجلسات أو البيانات الشخصية التي لا تحتاجها للتحقيق."
    ],
    [
      "5. مثال تطبيقي",
      "ترى سلسلة من محاولات تسجيل الدخول الفاشلة ثم تسجيل دخول ناجح من سياق غير معتاد. لا تستنتج الاختراق من سجل واحد فقط؛ اربط الأحداث بالوقت والعنوان وسياق المستخدم، وقارنها بالنشاط المعتاد، ثم اتبع إجراء التصعيد المناسب. حافظ على السجلات ذات الصلة ولا تعدّلها بلا توثيق."
    ],
    [
      "6. تنبيه جيد ليس ضجيجًا",
      "التنبيه يطلب التحقق ولا يثبت وحده أن حادثًا وقع. اضبط العتبات لتقليل الإنذارات الكاذبة، وحدد من يتابعها ومتى تصعّدها. راجع صلاحيات الوصول ومدة الاحتفاظ وسلامة التخزين، واختبر أن السجل يحتوي معلومات كافية للتحقيق دون تسريب أسرار."
    ]
  ],
  "encryption": [
    [
      "4. التشفير والتجزئة والترميز",
      "التشفير يحوّل البيانات إلى شكل لا يُقرأ دون مفتاح مناسب، أما التجزئة فتحوّل المدخل إلى قيمة تستخدم للتحقق أو أغراض أخرى ولا تُعامل كوسيلة لاسترجاع النص الأصلي. الترميز، مثل Base64، ليس تشفيرًا أمنيًا. اختيار الأداة الخاطئة قد يعطي شعورًا زائفًا بالحماية."
    ],
    [
      "5. مثال تطبيقي",
      "لخدمة ويب، استخدم بروتوكول TLS مضبوطًا لحماية البيانات أثناء النقل، ومكتبات موثوقة لتشفير البيانات عند الحاجة. كلمات المرور لا تُخزن كنص عادي ولا باستخدام تجزئة سريعة وحدها؛ استخدم خوارزمية مخصصة لتخزين كلمات المرور مع إعدادات مناسبة، واتبع إرشادات المنصة."
    ],
    [
      "6. إدارة المفاتيح",
      "حدد من يستطيع استخدام المفتاح، وأين يخزن، وكيف يجري تدويره وإلغاؤه واسترداده. لا تحفظ المفتاح بجوار البيانات المشفرة في مكان متاح للحساب نفسه بلا ضوابط. اختر مكتبات معروفة وبروتوكولات حديثة، ولا تصمم خوارزمية خاصة بك لمجرد أنها تبدو أبسط."
    ]
  ],
  "payments": [
    [
      "4. التحقق قبل الدفع",
      "افحص اسم النطاق وبيانات البائع وسياسة الإرجاع ووسيلة التواصل، لكن تذكر أن صفحة HTTPS قد تخص متجرًا احتياليًا أيضًا. راجع المبلغ والعملة والجهة قبل تأكيد العملية، وتجنب حفظ بيانات البطاقة على جهاز مشترك أو في خدمة لا تثق بها."
    ],
    [
      "5. مثال تطبيقي",
      "تصلك رسالة تقول إن عملية الدفع فشلت وتطلب رمز تحقق أو تحويلًا إلى حساب بديل. لا تشارك الرمز ولا تتبع الرابط. افتح التطبيق الرسمي للبنك أو المتجر، وراجع حالة المعاملة. إذا ظهر خصم لا تعرفه، اتصل بالبنك عبر رقم رسمي موجود على البطاقة أو موقعه."
    ],
    [
      "6. بعد إتمام العملية",
      "احتفظ بالإيصال ورقم الطلب وتابع إشعارات الحساب. استخدم كلمة مرور فريدة للحسابات المالية وفعّل المصادقة الإضافية إن توفرت. لا توافق على إشعار دفع لم تبدأه بنفسك، ولا ترسل PIN أو رمز تحقق لمن يدعي أنه يستطيع إعادة المال؛ استعمل قناة دعم رسمية."
    ]
  ],
  "iot": [
    [
      "4. لماذا الجهاز الذكي جزء من الشبكة؟",
      "الكاميرا أو التلفاز أو المساعد المنزلي قد يملك حسابًا وخدمات اتصال وميكروفونًا أو كاميرا وبيانات استخدام. إذا كانت كلمة مروره الافتراضية معروفة أو توقف تحديثه، فقد يصبح نقطة دخول أو مصدرًا لتسريب الخصوصية. افحص سياسة الدعم قبل شراء جهاز حساس."
    ],
    [
      "5. مثال تطبيقي",
      "قبل ربط كاميرا منزلية، غيّر كلمة المرور الافتراضية، وفعّل التحديثات، وراجع من يملك الوصول إلى البث. عطّل الوصول عن بُعد إن لم تحتاجه، وضع الجهاز على شبكة مناسبة منفصلة إذا كان ذلك متاحًا. لا تفتح منفذًا في الراوتر فقط لأن تطبيقًا غير معروف طلب ذلك."
    ],
    [
      "6. مراجعة الأجهزة الذكية",
      "احتفظ بقائمة الأجهزة والمالك وطريقة تحديثها، واحذف الأجهزة التي لم تعد تستخدمها من الحساب والشبكة. راجع الأذونات والمشاركة السحابية والتنبيهات، وحدد ما ستفعله إذا توقف الدعم الأمني. فصل الشبكة يقلل بعض المخاطر لكنه لا يعوّض كلمة مرور فريدة والتحديثات."
    ]
  ],
  "identity": [
    [
      "4. كيف يحدث انتحال الهوية؟",
      "قد يجمع المهاجم بيانات منشورة مثل الاسم والصورة ورقم الهاتف، ثم يستخدمها لإقناع جهة أخرى أو لمحاولة استرداد حساب. عادةً يزداد الخطر عندما تتجمع معلومات متعددة، لذلك لا تنشر وثائق أو تفاصيل استرداد أو إجابات أمنية في ملفات عامة."
    ],
    [
      "5. مثال تطبيقي",
      "تطلب جهة غير متوقعة صورة هويتك بحجة توثيق حساب. قبل الإرسال، ادخل إلى الموقع الرسمي بنفسك وتحقق من أن طلب التوثيق حقيقي، وافهم الغرض وكيف ستُستخدم البيانات. لا ترسل الوثيقة إلى حساب شخصي مجهول ولا تعتمد على شعار أو رابط جاء برسالة مفاجئة."
    ],
    [
      "6. ماذا تفعل عند الاشتباه؟",
      "احفظ الرسائل وأرقام الطلبات وأوقات التواصل، ثم أبلغ المنصة أو الجهة المختصة عبر قناة رسمية. راجع الحسابات التي تستخدم البريد أو الهاتف نفسه للاسترداد، وبدّل كلمات المرور إذا ظهر اختراق. لا تنشر الوثيقة كاملة أثناء طلب المساعدة، وشارك الحد الأدنى من المعلومات اللازمة."
    ]
  ],
  "access": [
    [
      "4. المصادقة مقابل التفويض",
      "المصادقة تجيب عن سؤال «من أنت؟»، والتفويض يجيب عن سؤال «ما الذي يسمح لك بفعله؟». نجاح تسجيل الدخول لا يعني أن المستخدم يحق له الوصول إلى جميع الملفات. يجب ربط الصلاحيات بالدور والملكية والسياق، والتحقق منها على الخادم عند كل طلب حساس."
    ],
    [
      "5. مثال تطبيقي",
      "في لوحة إدارة، لا يكفي إخفاء زر الحذف عن المستخدم العادي. إذا استطاع إرسال طلب مباشر، فيجب على الخادم رفضه بسبب عدم امتلاك الصلاحية. اختبر حسابات بأدوار مختلفة في بيئة تملكها، وتأكد أن المستخدم لا يستطيع الوصول إلى ملف شخص آخر بتغيير معرّف الطلب."
    ],
    [
      "6. مراجعة الصلاحيات دوريًا",
      "أنشئ أدوارًا واضحة، وامنح كل دور أقل ما يحتاجه، ثم راجع الحسابات والتطبيقات المرتبطة ومفاتيح الوصول بانتظام. اسحب الصلاحية عند انتهاء الحاجة، واستخدم سجلات للتغييرات الحساسة. الصلاحيات الإدارية العامة ليست حلًا سهلًا؛ بل توسّع الأثر إذا تعرض الحساب للاختراق."
    ]
  ],
  "vulnerability": [
    [
      "4. الثغرة والخطر والأولوية",
      "الثغرة ضعف يمكن أن يؤثر في النظام، لكن مقدار الخطر يتوقف على الأثر واحتمال الاستغلال والتعرض وقيمة الأصل والضوابط الموجودة. درجة شدة رقمية تساعد على المقارنة، لكنها لا تكفي وحدها لتحديد أولوية الإصلاح في كل بيئة."
    ],
    [
      "5. مثال تطبيقي",
      "تصل نشرة أمنية تخص مكتبة يستخدمها مشروعك. حدد الإصدار المثبت، واقرأ النشرة الرسمية، وتحقق من وجود الإصدار المتأثر ومن طريقة الوصول إليه في تطبيقك. حدّث المكتبة إلى إصدار موصى به، واختبر الوظائف والتوافق، ثم وثّق الإصلاح ونتيجة التحقق."
    ],
    [
      "6. الاختبار القانوني والإصلاح",
      "نفّذ الفحص والاختبار على أصول تملكها أو ضمن نطاق مصرح به بوضوح. صنّف النتائج حسب الأثر والتعرض وإمكانية الاستغلال، وحدد مسؤولًا وموعدًا للإصلاح، ثم أعد التحقق بعد التحديث. وثّق الاستثناءات المؤقتة وسببها وخطة إغلاقها بدل تركها بلا متابعة."
    ]
  ],
  "careers": [
    [
      "4. تعلّم الأساس قبل الأدوات",
      "تحتاج المسارات الأمنية المختلفة إلى فهم الشبكات وأنظمة التشغيل والهوية والويب ومبادئ البرمجة. لا يلزم تعلم كل شيء دفعة واحدة؛ اختر موضوعًا واحدًا، افهم المفاهيم، ثم طبّقها في مختبر قانوني ووثّق ما تعلمته."
    ],
    [
      "5. مثال على مشروع مبتدئ",
      "أنشئ مختبرًا محليًا يسجل محاولات دخول تجريبية، ثم اكتب شرحًا لكيفية قراءة السجلات وما الذي يستدعي المراجعة. أو راجع إعدادات أمان مشروع ويب تملكه. وضّح البيئة والأدوات والنتائج والقيود، ولا تستخدم بيانات حقيقية أو تختبر أنظمة الآخرين دون إذن."
    ],
    [
      "6. بناء ملف أعمال صادق",
      "اجعل لكل مشروع هدفًا واضحًا، وخطوات يمكن إعادة تنفيذها، وصورًا أو سجلات منزوعة البيانات الحساسة، وما تعلمته وما لم تستطع التحقق منه. اذكر مستواك الحقيقي، وراجع أساسياتك قبل الانتقال إلى شهادات متقدمة. المشاريع الصغيرة المفهومة أفضل من ادعاءات لا تستطيع شرحها."
    ]
  ],
  "ethics": [
    [
      "4. الإذن والنطاق المكتوب",
      "يجب أن يحدد الإذن الأنظمة والوقت والأساليب المسموحة وحدود التأثير وقناة الإبلاغ. السماح باختبار موقع لا يعني السماح بتجربة كل خوادم الجهة أو جمع بيانات المستخدمين. إذا كان النطاق غير واضح، اطلب توضيحًا قبل البدء بدل افتراض أن الأمر مسموح."
    ],
    [
      "5. مثال تطبيقي",
      "لاحظت خطأ أمنيًا في موقع لا تملكه. لا تحاول استغلاله أو الوصول إلى بيانات لا تخصك لإثباته. ابحث عن قناة الإبلاغ الأمني الرسمية، وقدّم وصفًا محدودًا لما رأيته دون نشر أسرار، واتبع سياسة الجهة بشأن التحقق والتواصل والإفصاح."
    ],
    [
      "6. تقليل الضرر وحماية الأدلة",
      "أوقف الاختبار إذا ظهر أثر غير متوقع أو خطر على المستخدمين، ولا تنسخ بيانات أكثر مما يلزم للتوثيق المصرح به. احمِ الملفات واللقطات التي قد تحتوي معلومات شخصية، وسجّل وقت الخطوة ونتيجتها. الهدف هو مساعدة مالك النظام على الإصلاح لا إثبات القدرة على إحداث الضرر."
    ]
  ]
};

  function openLesson(id, sourceElement) {
    const lesson = LESSONS[id];
    const card = getCard(id);
    const courseDetail = COURSE_DETAIL_CONTENT[id];
    if (!lesson || !card || !courseDetail) return;

    currentLessonId = id;
    returnTarget = sourceElement || card;

    const meta = getLessonMeta(id);
    const path = PATHS.find((item) => item.id === pathForTopic.get(id));

    detailPage.querySelector("#cyberDetailTitle").textContent = meta.title;
    detailPage.querySelector("#cyberDetailIntro").textContent =
      `${lesson.explanation} هذا شرح موسّع خاص بالمسار التعليمي، مستقل عن الشرح المختصر في مكتبة التعلّم الأمني.`;
    detailPage.querySelector("#cyberDetailPath").textContent =
      path ? path.title : "درس الأمن السيبراني";
    detailPage.querySelector("#cyberDetailStatus").textContent =
      completed.has(id) ? "✓ مكتمل" : "غير مكتمل";

    appendList(detailPage.querySelector("#cyberDetailGoals"), lesson.learn || []);

    const explanationContainer = detailPage.querySelector("#cyberDetailExplanation");
    explanationContainer.replaceChildren();

    const introConcept = createElement("article", "lesson-concept");
    introConcept.append(
      createElement("h3", "", "الفكرة الأساسية ضمن المسار"),
      createElement("p", "", lesson.explanation)
    );
    explanationContainer.appendChild(introConcept);

    const expandedSections = [
      ...(courseDetail.sections || []),
      ...(COURSE_EXTRA_SECTIONS[id] || [])
    ];
    expandedSections.forEach((section) => {
      const concept = createElement("article", "lesson-concept");
      concept.append(
        createElement("h3", "", section[0]),
        createElement("p", "", section[1])
      );
      explanationContainer.appendChild(concept);
    });

    appendList(detailPage.querySelector("#cyberDetailPractice"), lesson.practice || []);
    appendList(detailPage.querySelector("#cyberDetailGuideSteps"), courseDetail.steps || []);

    const guideHeading = detailPage.querySelector("#cyberDetailGuideSteps")
      ?.closest(".lesson-detail-section")
      ?.querySelector("h2");
    if (guideHeading) guideHeading.textContent = "خطوات تطبيق ضمن المسار";

    detailPage.querySelector("#cyberDetailGuideNote").textContent =
      courseDetail.note || lesson.warning || "راجع المصدر الموثوق قبل تطبيق التغييرات على نظام حقيقي.";
    detailPage.querySelector("#cyberDetailWarning").textContent = lesson.warning || "راجع الإعدادات قبل التطبيق.";

    renderVideo(id, meta.title);
    renderQuiz(id, lesson.quiz);
    renderSources(id);

    const completeCheckbox = detailPage.querySelector("#cyberDetailComplete");
    completeCheckbox.checked = completed.has(id);
    detailPage.querySelector("#cyberDetailCompleteStatus").textContent =
      completeCheckbox.checked
        ? "تم حفظ الإنجاز في هذا المتصفح."
        : "علّم هذا الدرس كمكتمل بعد الانتهاء منه.";

    detailPage.hidden = false;
    detailPage.scrollTop = 0;
    document.body.classList.add("cyber-lesson-detail-open");
    detailPage.querySelector("[data-lesson-back]")?.focus({ preventScroll: true });
  }

  function closeLesson() {
    detailPage.hidden = true;
    document.body.classList.remove("cyber-lesson-detail-open");

    if (returnTarget?.isConnected) {
      returnTarget.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  }

  function updateProgress(id, checked) {
    if (checked) completed.add(id);
    else completed.delete(id);

    const saved = saveProgress();
    renderAcademy();

    detailPage.querySelector("#cyberDetailStatus").textContent =
      completed.has(id) ? "✓ مكتمل" : "غير مكتمل";

    detailPage.querySelector("#cyberDetailCompleteStatus").textContent =
      saved
        ? (completed.has(id) ? "تم حفظ الإنجاز في هذا المتصفح." : "تم إلغاء علامة الإنجاز.")
        : "تعذّر حفظ التقدم محليًا في هذا المتصفح.";
  }

  detailPage.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    if (target.closest("[data-lesson-back]")) {
      closeLesson();
    }
  });

  detailPage.querySelector("#cyberDetailComplete").addEventListener(
    "change",
    (event) => {
      if (!currentLessonId) return;
      updateProgress(currentLessonId, event.target.checked);
    }
  );

  academy.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const pathButton = target.closest("[data-academy-path]");

    if (pathButton) {
      activePathId = pathButton.dataset.academyPath;
      searchText = "";
      completionFilter = "all";
      searchInput.value = "";
      filterSelect.value = "all";

      renderAcademy();

      academy.querySelector(".academy-course").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      return;
    }

    const openButton = target.closest("[data-academy-open-lesson]");

    if (openButton) {
      const id = openButton.dataset.academyOpenLesson;
      openLesson(id, openButton);
    }
  });

  academy.addEventListener("change", (event) => {
    const target = event.target;

    if (
      !(target instanceof HTMLInputElement) ||
      !target.matches("[data-academy-complete]")
    ) {
      return;
    }

    updateProgress(
      target.dataset.academyComplete,
      target.checked
    );
  });

  searchInput.addEventListener("input", () => {
    searchText = searchInput.value;
    renderCourseLessons();
  });

  filterSelect.addEventListener("change", () => {
    completionFilter = filterSelect.value;
    renderCourseLessons();
  });

  // Library topic clicks are handled by the original short-guide listener only.

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !detailPage.hidden) {
      closeLesson();
    }
  });

  function renderPaths() {
    pathsContainer.replaceChildren();

    PATHS.forEach((path) => {
      const progress = getProgress(path);
      const card = createElement(
        "article",
        "academy-path-card" + (path.id === activePathId ? " is-active" : "")
      );

      card.append(
        createElement("span", "academy-path-label", path.number),
        createElement("h4", "", path.title),
        createElement("p", "", path.description),
        createElement("small", "", `${progress.done} / ${progress.total} دروس مكتملة`)
      );

      const track = createElement("div", "academy-progress-track");
      const fill = createElement("div", "academy-progress-fill");
      fill.style.width = `${progress.percent}%`;
      track.appendChild(fill);

      const button = createElement(
        "button",
        "academy-select-path",
        path.id === activePathId ? "المسار المحدد ✓" : "عرض دروس المسار ←"
      );

      button.type = "button";
      button.dataset.academyPath = path.id;

      card.append(track, button);
      pathsContainer.appendChild(card);
    });
  }

  function renderCourseLessons() {
    const path = PATHS.find((item) => item.id === activePathId) || PATHS[0];
    const progress = getProgress(path);
    const query = normalize(searchText);

    academy.querySelector("#academyCourseTitle").textContent = path.title;
    academy.querySelector("#academyCourseMeta").textContent =
      `${progress.total} دروس في هذا المسار`;
    academy.querySelector("#academyCourseDescription").textContent = path.description;
    academy.querySelector("#academyCourseProgressText").textContent =
      `${progress.done} من ${progress.total} دروس مكتملة`;
    academy.querySelector("#academyCourseProgressPercent").textContent =
      `${progress.percent}%`;
    academy.querySelector("#academyCourseProgressFill").style.width =
      `${progress.percent}%`;

    const filteredIds = path.topics.filter((id) => {
      const meta = getLessonMeta(id);
      const detail = LESSONS[id];
      const isDone = completed.has(id);

      if (completionFilter === "complete" && !isDone) return false;
      if (completionFilter === "incomplete" && isDone) return false;

      const searchableText = normalize(
        `${meta.title} ${meta.description} ${detail.explanation} ${id}`
      );

      return !query || searchableText.includes(query);
    });

    lessonsContainer.replaceChildren();

    if (!filteredIds.length) {
      lessonsContainer.appendChild(
        createElement("div", "academy-empty", "لا توجد دروس تطابق البحث والتصفية الحالية.")
      );
      return;
    }

    filteredIds.forEach((id) => {
      const meta = getLessonMeta(id);
      const isDone = completed.has(id);

      const card = createElement(
        "article",
        "academy-lesson-item" + (isDone ? " is-complete" : "")
      );

      const top = createElement("div", "academy-lesson-top");
      top.append(
        createElement(
          "span",
          "academy-lesson-number",
          String(topicIds.indexOf(id) + 1).padStart(2, "0")
        )
      );

      const text = createElement("div", "");
      text.append(
        createElement("h4", "", meta.title),
        createElement("p", "", meta.description)
      );

      top.appendChild(text);

      const actions = createElement("div", "academy-lesson-actions");

      const openButton = createElement("button", "academy-open-lesson", "افتح الدرس ←");
      openButton.type = "button";
      openButton.dataset.academyOpenLesson = id;

      const label = createElement("label", "academy-done-label");
      const checkbox = document.createElement("input");

      checkbox.type = "checkbox";
      checkbox.checked = isDone;
      checkbox.dataset.academyComplete = id;

      label.append(checkbox, createElement("span", "", "أنهيت الدرس"));
      actions.append(openButton, label);

      card.append(top, actions);
      lessonsContainer.appendChild(card);
    });
  }

  function renderOverallProgress() {
    const total = topicIds.length;
    const done = topicIds.filter((id) => completed.has(id)).length;
    const percent = total ? Math.round((done / total) * 100) : 0;

    academy.querySelector("#academyPathCount").textContent =
      String(PATHS.length).padStart(2, "0");
    academy.querySelector("#academyLessonCount").textContent =
      String(total).padStart(2, "0");
    academy.querySelector("#academyDoneCount").textContent =
      `${String(done).padStart(2, "0")} / ${total}`;
    academy.querySelector("#academyOverallPercent").textContent = `${percent}%`;
  }

  function renderAcademy() {
    renderPaths();
    renderCourseLessons();
    renderOverallProgress();
  }

  renderAcademy();
})();

/* ==========================================================
   TECHPATH LEARNING HUB — self-contained add-on
   Adds AI, Web, Coding, Creator and IT learning inside the site.
   No external libraries or API keys required.
   ========================================================== */
(() => {
  "use strict";
  const START = () => {
    if (document.getElementById("tpHubLauncher")) return;

    const areas = [
      { id: "ai", icon: "✦", title: "الذكاء الاصطناعي", subtitle: "AI & Prompt Engineering", color: "#8b5cf6", desc: "استخدم الذكاء الاصطناعي بذكاء في الدراسة والبرمجة وصناعة المحتوى.", lessons: [
        { title: "كيف تكتب Prompt قوي؟", level: "مبتدئ", time: "5 دقائق", body: "الطلب الجيد يحدد الدور، المهمة، السياق، القيود، وشكل النتيجة. بدل: اشرح البرمجة. جرّب: أنت مدرّس برمجة للمبتدئين؛ اشرح المتغيرات في JavaScript بمثالين وتمرين قصير، وبالعربية البسيطة.", task: "اكتب طلبًا يحدد الدور والمهمة والسياق وشكل الإجابة." },
        { title: "تحقق من إجابات AI", level: "مبتدئ", time: "4 دقائق", body: "قد يخطئ الذكاء الاصطناعي أو يخترع تفاصيل. قارن المعلومات بمصدر موثوق، اختبر الكود، واطلب منه ذكر الافتراضات وحدود الثقة. لا تدخل كلمات المرور أو البيانات الخاصة.", task: "اطلب إجابة مع الافتراضات وطريقة التحقق منها." },
        { title: "AI كمساعد برمجة", level: "متوسط", time: "7 دقائق", body: "أعطه رسالة الخطأ، الجزء الضروري من الكود، والنتيجة المتوقعة. اطلب شرح السبب ثم اقتراح تعديل صغير، وبعده اختبر الحالات الطبيعية والخاطئة. لا تلصق أسرار API أو بيانات العملاء.", task: "جهّز Prompt يطلب تفسير خطأ برمجي دون إعادة كتابة المشروع كله." }
      ]},
      { id: "web", icon: "⌘", title: "تطوير المواقع", subtitle: "HTML · CSS · JavaScript", color: "#06b6d4", desc: "تعلم بناء صفحات حقيقية من الهيكل إلى التصميم والتفاعل.", lessons: [
        { title: "هيكل صفحة HTML", level: "مبتدئ", time: "5 دقائق", body: "HTML يحدد معنى المحتوى: العنوان باستخدام h1، الفقرة باستخدام p، والرابط باستخدام a. استخدم عناصر واضحة، وسمِّ الصفحة بعنوان مناسب، ولا تستخدم العناصر لمجرد شكلها.", task: "أنشئ صفحة فيها عنوان وفقرة ورابطًا تجريبيًا." },
        { title: "تصميم متجاوب بـ CSS", level: "مبتدئ", time: "6 دقائق", body: "ابدأ بتصميم الهاتف أولًا، استخدم max-width للمحتوى وflex أو grid للتخطيط، وأضف media queries عند الحاجة. تأكد من وضوح النص والأزرار على الشاشات الصغيرة.", task: "اجعل بطاقة بعرض مناسب وتتحول إلى عمود واحد على الهاتف." },
        { title: "تفاعل JavaScript", level: "متوسط", time: "8 دقائق", body: "JavaScript يقرأ الأحداث ويحدّث الصفحة. اربط الحدث بزر، حدّث عنصرًا محددًا، وتجنب تكرار معالجات الأحداث عند إعادة الرسم. تحقق من وجود العنصر قبل التعامل معه.", task: "أضف زرًا يغيّر نص فقرة عند الضغط عليه." }
      ]},
      { id: "code", icon: "{ }", title: "تعلم البرمجة", subtitle: "Python · C# · C++", color: "#22c55e", desc: "أساسيات مشتركة وتمارين تساعدك تفهم المنطق قبل حفظ الأوامر.", lessons: [
        { title: "المتغيرات وأنواع البيانات", level: "مبتدئ", time: "5 دقائق", body: "المتغير اسم لقيمة تستخدمها في البرنامج. أمثلة: عدد صحيح، نص، قيمة منطقية. اختر أسماء واضحة، ولا تفترض أن النص والرقم نوع واحد.", task: "عرّف متغيرًا للاسم وآخر للعمر، ثم اطبع رسالة تجمعهما." },
        { title: "الشروط", level: "مبتدئ", time: "6 دقائق", body: "تسمح if/else باختيار مسار حسب شرط. اختبر الحدود المهمة مثل صفر، القيمة المطلوبة بالضبط، والقيم خارج النطاق.", task: "اكتب شرطًا يحدد إن كانت الدرجة ناجحة أو غير ناجحة." },
        { title: "الحلقات والدوال", level: "متوسط", time: "8 دقائق", body: "الحلقة تكرر عملية، والدالة تجمع مهمة في مكان واحد. استخدم أسماء تصف العمل، ومرر المدخلات بوضوح، وأعد نتيجة بدل تكرار الكود.", task: "اكتب دالة تستقبل رقمين وتعيد مجموعهما، ثم استدعها." }
      ]},
      { id: "creator", icon: "▶", title: "صناعة المحتوى", subtitle: "Video · Design · Social", color: "#f97316", desc: "خطط لفيديوهات واضحة، واصنع أفكارًا وعناوين وسيناريوهات قابلة للتنفيذ.", lessons: [
        { title: "بناء سيناريو فيديو قصير", level: "مبتدئ", time: "6 دقائق", body: "ابدأ بخطاف واضح خلال أول ثانيتين، ثم فكرة واحدة مفيدة، مثال سريع، ونهاية فيها خطوة أو سؤال. لا تحشو الفيديو بمعلومات كثيرة ولا تعد بنتيجة غير مضمونة.", task: "اكتب سيناريو 30 ثانية: خطاف، 3 نقاط، وخاتمة." },
        { title: "تصميم صورة مصغرة", level: "مبتدئ", time: "5 دقائق", body: "استخدم فكرة واحدة، تباينًا واضحًا، عنصرًا بصريًا رئيسيًا، وكلمات قليلة قابلة للقراءة على الهاتف. لا تستخدم صورة توحي بشيء غير موجود في المحتوى.", task: "اختر عنوانًا من 3 إلى 5 كلمات وصورة تدعمه." },
        { title: "جدول نشر قابل للاستمرار", level: "متوسط", time: "5 دقائق", body: "اختر وتيرة تستطيع الالتزام بها، جهّز عدة أفكار مسبقًا، وراجع الاحتفاظ بالمشاهدة والتفاعل بدل التركيز على المشاهدات فقط. اختبر تغييرًا واحدًا كل مرة.", task: "جهّز 3 أفكار محتوى لأسبوع واحد." }
      ]},
      { id: "it", icon: "▣", title: "تقنية المعلومات", subtitle: "PC · Networks · Troubleshooting", color: "#eab308", desc: "افهم الكمبيوتر والشبكات وشخّص المشاكل بخطوات آمنة ومنظمة.", lessons: [
        { title: "كيف يعمل الكمبيوتر؟", level: "مبتدئ", time: "5 دقائق", body: "المعالج ينفذ التعليمات، RAM مساحة عمل مؤقتة، والتخزين يحفظ الملفات. عند بطء الجهاز راقب استهلاك الذاكرة والمعالج والمساحة قبل شراء قطع جديدة.", task: "افتح مدير المهام وحدد أكثر عملية تستهلك الذاكرة." },
        { title: "أساسيات الشبكات", level: "مبتدئ", time: "7 دقائق", body: "IP يعرّف الجهاز داخل الشبكة، والراوتر يربط الشبكات، وDNS يحوّل أسماء النطاقات إلى عناوين. عند انقطاع الإنترنت اختبر الاتصال بالجهاز والراوتر ثم DNS.", task: "اشرح الفرق بين الراوتر وDNS بجملة لكل واحد." },
        { title: "تشخيص مشكلة خطوة بخطوة", level: "متوسط", time: "6 دقائق", body: "حدد المشكلة بدقة، متى بدأت، وما الذي تغير. جرّب خطوة واحدة كل مرة، سجّل النتيجة، وتجنب حذف ملفات أو تغيير إعدادات حساسة دون نسخة احتياطية.", task: "اكتب 3 أسئلة تبدأ بها تشخيص جهاز بطيء." }
      ]}
    ];

    // Expanded offline curriculum: additional explanations and practical exercises.
    const extraLessons = {
      ai: [
        {title:"هندسة السياق والتعليمات",level:"متوسط",time:"8 دقائق",body:"السياق هو المعلومات التي يحتاجها النموذج لفهم المهمة: من أنت، ما الذي تعمل عليه، ما مستوى معرفتك، وما القيود التي يجب احترامها. قسّم الطلب إلى: الدور، الهدف، الخلفية، المدخلات، القيود، شكل المخرجات، ومعيار النجاح. لا تضع معلومات سرية أو مفاتيح API أو بيانات عملاء. إذا كانت المهمة كبيرة، اطلب خطة أولًا ثم نفّذ مرحلة واحدة في كل مرة.",task:"اكتب Prompt لمشروع موقع يحدد الهدف والجمهور والصفحات والقيود ومعيار نجاح واضح."},
        {title:"تقسيم المهام الكبيرة",level:"متوسط",time:"7 دقائق",body:"لا تطلب بناء مشروع كامل دفعة واحدة. ابدأ بتحليل المتطلبات، ثم اطلب هيكل الملفات، وبعدها نفّذ ميزة واحدة واختبرها قبل الانتقال. احتفظ بنسخة من الكود الذي يعمل، واطلب من المساعد شرح الملفات التي سيعدلها قبل التعديل. هذا يقلل الأخطاء والتغييرات غير المقصودة.",task:"قسّم فكرة تطبيق مهام إلى خمس مراحل صغيرة، وحدد اختبارًا لكل مرحلة."},
        {title:"التحقق من الكود الذي يقترحه AI",level:"متوسط",time:"8 دقائق",body:"الكود المقترح قد يحتوي أخطاء أو ثغرات أو مكتبات غير مناسبة. اقرأ التغييرات، شغّل فحص الصياغة والاختبارات، جرّب مدخلات فارغة وغير متوقعة، وافحص الاعتماديات ومصدرها. لا تنفذ أوامر طرفية لا تفهمها، ولا تمنح المساعد أسرارًا أو صلاحيات غير لازمة.",task:"جهّز قائمة من خمس نقاط لمراجعة كود اقترحه مساعد ذكاء اصطناعي."}
      ],
      web: [
        {title:"دلالات HTML وإمكانية الوصول",level:"مبتدئ",time:"8 دقائق",body:"استخدم العناصر بحسب معناها: header لرأس الصفحة وnav للتنقل وmain للمحتوى الرئيسي وsection لمجموعة مترابطة وbutton لتنفيذ فعل وa للانتقال. أضف label للحقول، ونصًا بديلًا للصور المفيدة، وحافظ على ترتيب عناوين منطقي. هذا يحسن فهم الصفحة لقارئات الشاشة ومحركات البحث.",task:"أنشئ هيكل صفحة يحتوي header وnav وmain وsection وfooter مع عنوان رئيسي واحد."},
        {title:"CSS Box Model والتخطيط",level:"مبتدئ",time:"9 دقائق",body:"كل عنصر يتكون من content وpadding وborder وmargin. استخدم box-sizing:border-box لتسهيل حساب العرض. Flexbox مناسب لترتيب العناصر في اتجاه واحد، وGrid لتخطيطات الصفوف والأعمدة. تجنب تثبيت كل المقاسات بالبكسل، واستخدم max-width وminmax وclamp عند الحاجة.",task:"صمم بطاقة بحدود ومسافات داخلية، ثم ضع ثلاث بطاقات باستخدام CSS Grid."},
        {title:"JavaScript DOM والأحداث",level:"متوسط",time:"10 دقائق",body:"DOM هو تمثيل الصفحة الذي تستطيع JavaScript قراءته وتعديله. اختر العناصر بمعرّفات أو محددات واضحة، واستمع للأحداث مثل click وinput وsubmit. استخدم textContent للنص القادم من المستخدم بدل innerHTML لتجنب حقن HTML غير موثوق. افحص وجود العنصر قبل استخدامه وتعامل مع الأخطاء بوضوح.",task:"أنشئ حقلًا وزرًا يعرض النص المكتوب داخل فقرة باستخدام textContent."},
        {title:"النماذج والتحقق من المدخلات",level:"متوسط",time:"9 دقائق",body:"تحقق من المدخلات في المتصفح لتحسين تجربة المستخدم، لكن لا تعتمد على ذلك أمنيًا؛ يجب أن يعيد الخادم التحقق. افحص الحقول المطلوبة، الصيغة، الطول، والنطاق. اعرض رسالة مفهومة بجانب الحقل، ولا تمسح إدخال المستخدم عند ظهور خطأ.",task:"صمم نموذج تسجيل بسيط يتحقق من البريد وكلمة المرور ويعرض رسائل واضحة."},
        {title:"أساسيات الأداء والنشر",level:"متقدم",time:"10 دقائق",body:"قلل الصور الكبيرة، استخدم صيغ صور حديثة، حمّل الصور خارج الشاشة بتأخير، قلل JavaScript غير الضروري، واختبر الموقع على الهاتف. قبل النشر افحص الروابط والأخطاء في Console، واستخدم متغيرات بيئة للأسرار في الخادم لا في ملفات الواجهة. اختبر نسخة المعاينة قبل نشر الإنتاج.",task:"اكتب قائمة فحص من 8 عناصر تراجعها قبل نشر موقعك."}
      ],
      code: [
        {title:"الخوارزميات والتفكير المنطقي",level:"مبتدئ",time:"8 دقائق",body:"الخوارزمية سلسلة خطوات محددة لحل مشكلة. ابدأ بوصف المدخلات والمخرجات، ثم اكتب الخطوات بلغة بسيطة أو pseudocode، وبعدها حوّلها إلى كود. اختبر مثالًا صغيرًا وحالة حدية قبل تحسين الأداء. لا تبدأ بكتابة الكود قبل فهم المطلوب.",task:"اكتب خطوات خوارزمية تحدد أكبر رقم من بين ثلاثة أرقام."},
        {title:"المصفوفات والقوائم",level:"مبتدئ",time:"8 دقائق",body:"المصفوفة أو القائمة تجمع عدة قيم تحت متغير واحد، ويمكن الوصول للعناصر باستخدام الفهرس في كثير من اللغات. انتبه إلى أن بعض اللغات تبدأ الفهرسة من صفر. عند المرور على العناصر، تجنب الوصول إلى فهرس خارج حدود القائمة.",task:"أنشئ قائمة من خمس درجات، ثم احسب مجموعها ومتوسطها."},
        {title:"الدوال والنطاق",level:"متوسط",time:"9 دقائق",body:"الدالة وحدة قابلة لإعادة الاستخدام، تستقبل معاملات وقد تعيد قيمة. اجعل كل دالة مسؤولة عن مهمة واضحة، واستخدم أسماء تصف الغرض. افهم الفرق بين المتغير المحلي والعالمي، ولا تعدّل حالة مشتركة دون حاجة.",task:"اكتب دالة تتحقق إن كان الرقم زوجيًا، ثم جرّبها على 0 و7 و12."},
        {title:"معالجة الأخطاء وتصحيحها",level:"متوسط",time:"9 دقائق",body:"اقرأ رسالة الخطأ كاملة وحدد السطر والملف ونوع الخطأ. أعد إنتاج المشكلة بخطوات ثابتة، ثم افحص قيمة المتغيرات باستخدام debugger أو طباعة مؤقتة. غيّر شيئًا واحدًا في كل مرة، وبعد الإصلاح أعد تشغيل الاختبارات حتى لا تكسر وظيفة أخرى.",task:"اكتب خطوات تشخيص لخطأ يحدث عند محاولة تحويل نص إلى رقم."},
        {title:"Git وإدارة الإصدارات",level:"متوسط",time:"10 دقائق",body:"Git يسجل تغييرات المشروع ليسهل الرجوع والمراجعة والعمل على فروع. نفّذ status قبل الإضافة، واكتب commit صغيرًا يصف التغيير، وادفع إلى المستودع بعد التأكد من عدم تضمين ملفات سرية أو مجلدات بناء غير لازمة. استخدم .gitignore لحجب الملفات المحلية.",task:"أنشئ تسلسل أوامر Git لإضافة ملف وتسجيل commit ثم رفعه إلى GitHub."},
        {title:"قواعد البيانات وSQL",level:"متوسط",time:"10 دقائق",body:"قاعدة البيانات تحفظ البيانات بصورة منظمة. الجداول تتكون من صفوف وأعمدة، والمفتاح الأساسي يميز كل سجل. استخدم SELECT للقراءة وINSERT للإضافة وUPDATE للتعديل وDELETE للحذف. في التطبيقات الحقيقية استخدم الاستعلامات ذات المعاملات وتحقق من الصلاحيات ولا تركب SQL من نص المستخدم.",task:"اكتب استعلام SELECT يعرض أسماء الطلاب الذين علاماتهم أكبر من 80."}
      ],
      creator: [
        {title:"كتابة Hook دون تضليل",level:"مبتدئ",time:"7 دقائق",body:"الخطاف هو أول عبارة أو لقطة تجعل المشاهد يعرف لماذا يكمل. استخدم سؤالًا محددًا أو نتيجة قابلة للإثبات أو مشكلة مألوفة. لا تعد بسر خيالي ولا تستخدم عنوانًا لا يطابق محتوى الفيديو. اختبر أكثر من افتتاحية مع بقاء المعلومة الأساسية نفسها.",task:"اكتب ثلاث افتتاحيات مختلفة لفيديو يشرح المصادقة الثنائية."},
        {title:"كتابة سيناريو ومشاهد B-roll",level:"متوسط",time:"9 دقائق",body:"قسّم النص إلى جمل قصيرة، واربط كل جملة بلقطة أو تسجيل شاشة أو رسم توضيحي. اكتب النص المنطوق منفصلًا عن النص الظاهر على الشاشة، وحدد مواضع الانتقال والمؤثرات الصوتية. اترك مساحة للمعلومة كي تُفهم ولا تملأ كل ثانية بالمؤثرات.",task:"اكتب سيناريو من 30 ثانية وحدد لقطة مناسبة لكل جملة."},
        {title:"الصوت والإضاءة والتسجيل",level:"مبتدئ",time:"8 دقائق",body:"الصوت الواضح أهم من كاميرا باهظة. سجل في مكان هادئ، أبعد الميكروفون عن الاحتكاك، وراقب مستوى الصوت حتى لا يتشوه. استخدم مصدر ضوء أمامك أو بزاوية، وثبّت الهاتف، وسجل مقطع اختبار قبل تصوير الفيديو كاملًا.",task:"جهّز قائمة فحص من خمس نقاط قبل تسجيل فيديو جديد."},
        {title:"مونتاج وإيقاع الفيديو",level:"متوسط",time:"9 دقائق",body:"احذف التوقفات غير المقصودة، واجعل القطع يخدم الفكرة لا السرعة فقط. أضف ترجمة متزامنة ومقروءة، وحافظ على مساحة آمنة حول النص حتى لا تغطيه أزرار المنصة. استخدم الموسيقى والمواد المرئية التي تملك حق استخدامها، واضبط مستويات الصوت.",task:"خطط لنسخة 30 ثانية من فيديو أطول مع تحديد ما ستحتفظ به وما ستحذفه."},
        {title:"حقوق النشر والخصوصية",level:"متوسط",time:"8 دقائق",body:"لا تفترض أن صورة أو موسيقى متاحة على الإنترنت حرة الاستخدام. راجع الترخيص وشروط المنصة، واحتفظ بإثبات الإذن عند الحاجة. أخفِ بيانات الأشخاص والشاشات الحساسة، وخذ موافقة واضحة قبل نشر صور الآخرين أو أصواتهم.",task:"ضع سياسة قصيرة لقناتك تحدد مصادر الصور والموسيقى وكيف تحمي خصوصية الآخرين."},
        {title:"قراءة تحليلات المحتوى",level:"متوسط",time:"8 دقائق",body:"راقب الاحتفاظ بالمشاهدة ومعدل إكمال الفيديو ومصادر الوصول والتفاعل. لا تحكم من فيديو واحد؛ قارن عدة منشورات متشابهة، وغيّر عنصرًا واحدًا في كل تجربة مثل الافتتاحية أو الطول. الأرقام تصف سلوك الجمهور ولا تضمن نتائج مستقبلية.",task:"اختر ثلاثة مؤشرات تتابعها أسبوعيًا واكتب كيف ستستخدم كل مؤشر."}
      ],
      it: [
        {title:"المعالج والذاكرة والتخزين",level:"مبتدئ",time:"9 دقائق",body:"المعالج ينفذ العمليات، والذاكرة RAM تحفظ البيانات التي تحتاجها البرامج أثناء التشغيل، أما SSD أو HDD فيحفظ الملفات بعد إيقاف الجهاز. زيادة RAM لا تعالج كل أسباب البطء، وامتلاء قرص النظام قد يسبب مشاكل تحديث وأداء. راقب الاستهلاك قبل اتخاذ قرار شراء.",task:"افتح مدير المهام وسجل استخدام CPU وMemory وDisk أثناء فتح المتصفح."},
        {title:"Windows Update والتعريفات",level:"مبتدئ",time:"8 دقائق",body:"التحديثات تسد ثغرات وتحسن الاستقرار، لكن قد تحتاج وقتًا ومساحة وإعادة تشغيل. نزّل التعريفات من Windows Update أو موقع الشركة المصنعة للجهاز أو القطعة. تجنب مواقع التعريفات المجهولة وبرامج التحديث الجماعية غير الموثوقة.",task:"حدد إصدار Windows وطراز جهازك، ثم اعرف أين تجد صفحة الدعم الرسمية له."},
        {title:"إدارة البرامج وبدء التشغيل",level:"متوسط",time:"8 دقائق",body:"بعض البرامج تعمل عند بدء Windows وتستهلك موارد حتى لو لم تستخدمها. راجع قائمة Startup في Task Manager، وعطّل فقط البرامج التي تعرفها ولا تحتاج بدءها تلقائيًا. لا توقف خدمات النظام أو برامج الحماية لمجرد أنها تستهلك موارد.",task:"راجع قائمة Startup وحدد تطبيقين غير ضروريين دون تعطيل أي عنصر لا تعرفه."},
        {title:"أساسيات IP وDNS وDHCP",level:"متوسط",time:"10 دقائق",body:"عنوان IP يحدد واجهة الجهاز على الشبكة، وDNS يحوّل اسم الموقع إلى عنوان، وDHCP يوزع إعدادات الشبكة تلقائيًا غالبًا عبر الراوتر. قد يكون اتصال Wi‑Fi قائمًا بينما DNS أو مزود الإنترنت لا يعمل. اختبر كل طبقة بالتدرج بدل تغيير إعدادات عشوائية.",task:"ارسم مسارًا بسيطًا من جهازك إلى الراوتر ثم DNS ثم الموقع."},
        {title:"النسخ الاحتياطي والاستعادة",level:"متوسط",time:"8 دقائق",body:"النسخة الاحتياطية الجيدة تكون منفصلة عن الجهاز الأساسي ويمكن استعادتها. احتفظ بنسخ متعددة للملفات المهمة، واختبر فتح ملف من النسخة الاحتياطية. المزامنة السحابية وحدها ليست دائمًا نسخة احتياطية لأنها قد تزامن الحذف أو التلف.",task:"اكتب خطة نسخ احتياطي لملفاتك المهمة تحدد المكان والتكرار وطريقة اختبار الاستعادة."},
        {title:"الأمان والصيانة الوقائية",level:"متوسط",time:"9 دقائق",body:"استخدم حسابًا يوميًا بصلاحيات محدودة، وحدّث النظام والمتصفح، وفعّل جدار الحماية والحماية المدمجة، واستخدم كلمات مرور فريدة ومصادقة متعددة العوامل. تجنب الكراكات والملفات المرفقة غير المتوقعة، ولا تتبع نوافذ منبثقة تدعي إصلاح الجهاز فورًا.",task:"أنشئ قائمة صيانة شهرية من ست خطوات لجهازك."}
      ]
    };
    Object.entries(extraLessons).forEach(([id, lessons]) => {
      const area = areas.find(item => item.id === id);
      if (area) area.lessons.push(...lessons);
    });

    const style = document.createElement("style");
    style.id = "tpHubStyles";
    style.textContent = `
      #tpHubLauncher{position:fixed;z-index:99990;bottom:20px;right:20px;border:1px solid rgba(255,255,255,.22);border-radius:999px;padding:13px 17px;background:linear-gradient(135deg,#2563eb,#7c3aed);color:#fff;font:700 14px/1.2 system-ui,sans-serif;box-shadow:0 12px 34px #0005;cursor:pointer;display:flex;gap:9px;align-items:center}
      #tpHubOverlay{position:fixed;inset:0;z-index:99991;background:rgba(3,7,18,.78);backdrop-filter:blur(8px);display:none;align-items:center;justify-content:center;padding:16px;font-family:system-ui,-apple-system,'Segoe UI',sans-serif;color:#e5e7eb}
      #tpHubOverlay.tp-hub-open{display:flex}#tpHubPanel{width:min(1100px,100%);height:min(820px,94vh);overflow:hidden;border:1px solid #334155;border-radius:22px;background:#0b1220;box-shadow:0 30px 100px #0008;display:flex;flex-direction:column}
      #tpHubPanel *{box-sizing:border-box}#tpHubHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:18px 22px;border-bottom:1px solid #263244;background:linear-gradient(110deg,#101b32,#111827)}
      #tpHubHeader h2{font-size:20px;margin:0;color:#fff}#tpHubHeader p{margin:5px 0 0;color:#9ca3af;font-size:12px}#tpHubClose{border:1px solid #334155;background:#172033;color:#fff;border-radius:10px;width:38px;height:38px;font-size:22px;cursor:pointer}
      #tpHubBody{display:grid;grid-template-columns:225px minmax(0,1fr);min-height:0;flex:1}#tpHubSide{padding:14px;border-right:1px solid #263244;background:#0e1728;overflow:auto}#tpHubMain{padding:22px;overflow:auto}
      .tp-hub-nav{display:flex;width:100%;gap:10px;align-items:center;text-align:right;padding:12px;border:1px solid transparent;background:transparent;color:#cbd5e1;border-radius:12px;cursor:pointer;font:600 13px system-ui;margin-bottom:5px}.tp-hub-nav:hover,.tp-hub-nav.active{background:#17243a;border-color:#334155;color:#fff}.tp-hub-nav .tp-hub-icon{width:30px;height:30px;display:grid;place-items:center;background:#243047;border-radius:9px;flex-shrink:0}
      .tp-hub-kicker{font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#93c5fd;margin:0 0 9px}.tp-hub-title{font-size:clamp(23px,3vw,32px);line-height:1.2;color:#fff;margin:0 0 8px}.tp-hub-desc{color:#aab6c8;line-height:1.7;margin:0 0 20px;font-size:14px}.tp-hub-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.tp-hub-card{border:1px solid #29364a;background:linear-gradient(145deg,#121e31,#101827);border-radius:16px;padding:16px;min-width:0}.tp-hub-card h3{font-size:16px;color:#f8fafc;margin:0 0 8px}.tp-hub-card p{font-size:13px;line-height:1.7;color:#aab6c8;margin:0 0 13px}.tp-hub-meta{font-size:11px;color:#94a3b8;display:flex;gap:9px;flex-wrap:wrap;margin-bottom:12px}.tp-hub-btn{border:1px solid #3b82f6;background:#1d4ed8;color:white;border-radius:10px;padding:9px 12px;cursor:pointer;font:650 12px system-ui}.tp-hub-btn.secondary{background:#18243a;border-color:#334155;color:#dbeafe}.tp-hub-search{width:100%;background:#0b1220;border:1px solid #334155;color:#fff;border-radius:12px;padding:12px 14px;font:14px system-ui;margin:0 0 15px;outline:none}.tp-hub-search:focus{border-color:#60a5fa}.tp-hub-box{border:1px solid #334155;background:#101a2a;border-radius:16px;padding:18px;margin:14px 0}.tp-hub-box h3{color:#fff;margin:0 0 10px;font-size:18px}.tp-hub-box p,.tp-hub-box li{color:#cbd5e1;line-height:1.8;font-size:14px}.tp-hub-task{padding:12px 14px;border-right:3px solid #60a5fa;background:#17243a;border-radius:8px;color:#dbeafe;line-height:1.7;font-size:13px}.tp-hub-field{width:100%;min-height:110px;resize:vertical;background:#080f1b;border:1px solid #334155;border-radius:12px;padding:12px;color:#e5e7eb;font:13px/1.7 ui-monospace,monospace}.tp-hub-row{display:flex;gap:9px;flex-wrap:wrap;align-items:center}.tp-hub-muted{color:#94a3b8;font-size:12px;line-height:1.7}.tp-hub-progress{height:7px;border-radius:9px;background:#263244;overflow:hidden;margin-top:10px}.tp-hub-progress span{height:100%;display:block;background:linear-gradient(90deg,#06b6d4,#8b5cf6);width:0;transition:width .2s}.tp-hub-empty{padding:25px;text-align:center;color:#94a3b8;border:1px dashed #334155;border-radius:14px}.tp-hub-badge{display:inline-flex;border:1px solid #334155;color:#bfdbfe;background:#17243a;padding:4px 8px;border-radius:999px;font-size:11px;margin-bottom:10px}
      .tph-tool-label{display:block;color:#cbd5e1;font-size:12px;margin:12px 0 6px}.tph-tool-select{width:100%;background:#0b1220;border:1px solid #334155;color:#fff;border-radius:10px;padding:10px;font:13px system-ui}.tph-tool-result{white-space:pre-wrap;overflow-wrap:anywhere;background:#080f1b;border:1px solid #334155;border-radius:12px;padding:14px;color:#dbeafe;line-height:1.8;font:13px/1.8 system-ui;max-height:460px;overflow:auto}.tph-tool-hint{padding:10px 12px;border-right:3px solid #eab308;background:#292313;color:#fef3c7;border-radius:8px;font-size:12px;line-height:1.7;margin:10px 0}.tph-editor{min-height:260px;font:13px/1.65 ui-monospace,SFMono-Regular,Consolas,monospace;direction:ltr;text-align:left;tab-size:2}.tph-tool-two{display:grid;grid-template-columns:1fr 1fr;gap:10px}.tph-diagnosis-card{border:1px solid #334155;background:#111d30;border-radius:12px;padding:14px;margin:10px 0}.tph-diagnosis-card h4{margin:0 0 8px;color:#fff}.tph-diagnosis-card p,.tph-diagnosis-card li{color:#cbd5e1;line-height:1.75;font-size:13px}.tph-diagnosis-card ol{padding-inline-start:22px}.tph-tool-small{font-size:11px;color:#94a3b8;line-height:1.7}
      @media(max-width:680px){#tpHubOverlay{padding:0}#tpHubPanel{height:100dvh;border-radius:0;width:100%;border:0}#tpHubBody{grid-template-columns:1fr;grid-template-rows:auto minmax(0,1fr)}#tpHubSide{display:flex;gap:6px;border-right:0;border-bottom:1px solid #263244;padding:9px;overflow-x:auto} .tp-hub-nav{width:auto;white-space:nowrap;flex-shrink:0;margin:0;padding:8px}.tp-hub-nav .tp-hub-icon{width:26px;height:26px}#tpHubMain{padding:15px}.tp-hub-grid{grid-template-columns:1fr}#tpHubHeader{padding:14px 16px}#tpHubLauncher{bottom:12px;right:12px;padding:12px 14px}}
      @media(prefers-reduced-motion:reduce){.tp-hub-progress span{transition:none}}
    `;
    document.head.appendChild(style);

    const launcher = document.createElement("button");
    launcher.id = "tpHubLauncher"; launcher.type = "button";
    launcher.innerHTML = `<span aria-hidden="true">✦</span><span>مركز TechPath</span>`;
    launcher.setAttribute("aria-haspopup", "dialog"); launcher.setAttribute("aria-controls", "tpHubOverlay");

    const overlay = document.createElement("div");
    overlay.id = "tpHubOverlay"; overlay.setAttribute("role", "dialog"); overlay.setAttribute("aria-modal", "true"); overlay.setAttribute("aria-label", "مركز تعلم TechPath");
    overlay.innerHTML = `<section id="tpHubPanel"><header id="tpHubHeader"><div><h2>TechPath Learning Hub</h2><p>تعلّم، طبّق، وتابع تقدمك من مكان واحد</p></div><button id="tpHubClose" type="button" aria-label="إغلاق">×</button></header><div id="tpHubBody"><nav id="tpHubSide" aria-label="المجالات"></nav><main id="tpHubMain" tabindex="-1"></main></div></section>`;
    document.body.append(launcher, overlay);

    const nav = overlay.querySelector("#tpHubSide");
    const main = overlay.querySelector("#tpHubMain");
    let active = "home";
    let search = "";
    let activeLesson = null;
    let toolOutput = "";
    const STORAGE = "techpathLearningHub_v1";
    let saved = {};
    try { saved = JSON.parse(localStorage.getItem(STORAGE) || "{}"); } catch (_) { saved = {}; }
    if (!saved.done) saved.done = [];
    const persist = () => { try { localStorage.setItem(STORAGE, JSON.stringify(saved)); } catch (_) {} };
    const esc = (v) => String(v ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
    const totalLessons = areas.reduce((n, a) => n + a.lessons.length, 0);
    const doneCount = () => saved.done.length;
    const navItems = [{id:"home",icon:"⌂",title:"الرئيسية"}, ...areas.map(a=>({id:a.id,icon:a.icon,title:a.title})), {id:"tools",icon:"⚙",title:"أدوات عملية"}, {id:"progress",icon:"✓",title:"تقدمي"}];

    function renderNav() {
      nav.innerHTML = navItems.map(x=>`<button type="button" class="tp-hub-nav ${active===x.id?"active":""}" data-tph-nav="${esc(x.id)}"><span class="tp-hub-icon">${esc(x.icon)}</span><span>${esc(x.title)}</span></button>`).join("");
    }
    function homeView() {
      const percent = Math.round(doneCount()/totalLessons*100);
      return `<p class="tp-hub-kicker">YOUR NEXT STEP</p><h1 class="tp-hub-title">كل مهارات التقنية، بمكان واحد.</h1><p class="tp-hub-desc">ابدأ بمسار صغير، طبّق بنفسك، وعلّم الدروس التي أنهيتها. تقدمك محفوظ على هذا المتصفح.</p><div class="tp-hub-card" style="margin-bottom:18px"><div class="tp-hub-row" style="justify-content:space-between"><strong>تقدمك في المسارات</strong><span>${doneCount()} / ${totalLessons} درس</span></div><div class="tp-hub-progress"><span style="width:${percent}%"></span></div><p class="tp-hub-muted" style="margin:8px 0 0">${percent}% مكتمل · ابدأ بالمسار الأقرب لهدفك</p></div><div class="tp-hub-grid">${areas.map(a=>`<article class="tp-hub-card"><div class="tp-hub-badge">${esc(a.subtitle)}</div><h3>${esc(a.icon)} ${esc(a.title)}</h3><p>${esc(a.desc)}</p><div class="tp-hub-meta"><span>${a.lessons.length} دروس بداية</span><span>${a.lessons.filter(l=>saved.done.includes(a.id+":"+l.title)).length} مكتمل</span></div><button class="tp-hub-btn" data-tph-nav="${a.id}" type="button">ابدأ المسار ←</button></article>`).join("")}</div><div class="tp-hub-box"><h3>طريقة التعلّم المقترحة</h3><p>اقرأ الفكرة، جرّب المهمة، ثم علّم الدرس كمكتمل. المحتوى الحالي أساس تعليمي أولي، وسنوسّع كل مسار بدروس وتمارين ومشاريع لاحقًا.</p></div>`;
    }
    function areaView(area) {
      const items = area.lessons.filter(l=>(l.title+" "+l.body+" "+l.level+" "+l.task).toLowerCase().includes(search.toLowerCase()));
      return `<p class="tp-hub-kicker">LEARNING PATH</p><h1 class="tp-hub-title">${esc(area.icon)} ${esc(area.title)}</h1><p class="tp-hub-desc">${esc(area.desc)}</p><input class="tp-hub-search" id="tpHubSearch" type="search" placeholder="ابحث عن درس في هذا المسار..." value="${esc(search)}" aria-label="بحث عن درس"><div class="tp-hub-grid">${items.map((l,i)=>{const id=area.id+":"+l.title;const isDone=saved.done.includes(id);return `<article class="tp-hub-card"><div class="tp-hub-badge">${esc(l.level)} · ${esc(l.time)} ${isDone?"· ✓ مكتمل":""}</div><h3>${esc(l.title)}</h3><p>${esc(l.body.slice(0,230))}${l.body.length>230?"…":""}</p><button class="tp-hub-btn" type="button" data-tph-lesson="${esc(area.id)}" data-tph-index="${area.lessons.indexOf(l)}">${isDone?"راجع الدرس":"افتح الدرس"} ←</button></article>`;}).join("")||`<div class="tp-hub-empty">ما لقينا دروس مطابقة للبحث.</div>`}</div>`;
    }
    function lessonView(area, lesson) {
      const id = area.id+":"+lesson.title; const isDone=saved.done.includes(id);
      return `<button type="button" class="tp-hub-btn secondary" data-tph-nav="${area.id}">← العودة للمسار</button><p class="tp-hub-kicker" style="margin-top:18px">${esc(area.title)} · ${esc(lesson.level)}</p><h1 class="tp-hub-title">${esc(lesson.title)}</h1><p class="tp-hub-muted">وقت مقترح: ${esc(lesson.time)}</p><div class="tp-hub-box"><h3>الفكرة الأساسية</h3><p>${esc(lesson.body)}</p></div><div class="tp-hub-box"><h3>مهمتك التطبيقية</h3><div class="tp-hub-task">${esc(lesson.task)}</div><p class="tp-hub-muted">اكتب الحل أو الملاحظات عندك، ثم ارجع وقيّم إن كنت فهمت الفكرة.</p><textarea id="tpHubNotes" class="tp-hub-field" placeholder="اكتب ملاحظاتك أو حلك هنا...">${esc(saved.notes?.[id]||"")}</textarea><div class="tp-hub-row" style="margin-top:10px"><button class="tp-hub-btn" type="button" data-tph-save-notes="${esc(id)}">حفظ ملاحظاتي</button><button class="tp-hub-btn ${isDone?"secondary":""}" type="button" data-tph-complete="${esc(id)}">${isDone?"إلغاء إكمال الدرس":"✓ أنهيت الدرس"}</button></div></div>`;
    }
    function toolsView() {
      const languageOptions = [
        ["html","HTML",".html","preview"],["css","CSS",".css","preview"],["javascript","JavaScript",".js","preview"],["typescript","TypeScript",".ts","source"],["python","Python",".py","source"],["c","C",".c","source"],["cpp","C++",".cpp","source"],["csharp","C#",".cs","source"],["java","Java",".java","source"],["kotlin","Kotlin",".kt","source"],["swift","Swift",".swift","source"],["go","Go",".go","source"],["rust","Rust",".rs","source"],["php","PHP",".php","source"],["ruby","Ruby",".rb","source"],["sql","SQL",".sql","source"],["bash","Bash",".sh","source"],["powershell","PowerShell",".ps1","source"],["json","JSON",".json","source"],["yaml","YAML",".yml","source"],["xml","XML",".xml","source"],["markdown","Markdown",".md","source"],["r","R",".r","source"],["matlab","MATLAB",".m","source"],["dart","Dart",".dart","source"],["scala","Scala",".scala","source"],["perl","Perl",".pl","source"],["lua","Lua",".lua","source"],["haskell","Haskell",".hs","source"],["elixir","Elixir",".ex","source"],["erlang","Erlang",".erl","source"],["clojure","Clojure",".clj","source"],["ocaml","OCaml",".ml","source"],["fsharp","F#",".fs","source"],["assembly","Assembly",".asm","source"],["solidity","Solidity",".sol","source"],["verilog","Verilog",".v","source"],["vhdl","VHDL",".vhd","source"],["dockerfile","Dockerfile","Dockerfile","source"],["makefile","Makefile","Makefile","source"],["graphql","GraphQL",".graphql","source"],["regex","Regular Expressions",".txt","source"],["plain","نص عادي",".txt","source"]
      ];
      const langOpts = languageOptions.map(x=>`<option value="${x[0]}" data-ext="${x[2]}" data-mode="${x[3]}">${x[1]}</option>`).join("");
      return `<p class="tp-hub-kicker">PRACTICAL TOOLS · OFFLINE MODE</p><h1 class="tp-hub-title">أدوات عملية مطوّرة</h1><p class="tp-hub-desc">أربع أدوات تعمل داخل المتصفح دون مفتاح API أو رسوم استخدام. بعضها ينشئ مخرجات جاهزة، وبعضها يساعدك على التجربة والتشخيص خطوة بخطوة.</p>
      <div class="tp-hub-grid">
      <article class="tp-hub-card"><div class="tp-hub-badge">PROMPT WORKSHOP</div><h3>منشئ أوامر الذكاء الاصطناعي المطوّر</h3><p>حوّل فكرتك إلى طلب مفصل يحدد الدور والسياق والجمهور والقيود وشكل النتيجة ومعايير التحقق.</p><label class="tph-tool-label" for="tphPromptGoal">ما المهمة التي تريد إنجازها؟</label><textarea id="tphPromptGoal" class="tp-hub-field" placeholder="مثال: أريد بناء متجر إلكتروني بسيط باستخدام HTML وCSS وJavaScript"></textarea><div class="tph-tool-two"><div><label class="tph-tool-label" for="tphPromptRole">دور المساعد</label><select id="tphPromptRole" class="tph-tool-select"><option>مدرّس خبير</option><option>مطور برمجيات</option><option>مراجع كود</option><option>مصمم تجربة مستخدم</option><option>خبير تقنية معلومات</option><option>كاتب محتوى</option><option>مستشار مشروع</option></select></div><div><label class="tph-tool-label" for="tphPromptLevel">مستواك</label><select id="tphPromptLevel" class="tph-tool-select"><option>مبتدئ</option><option>متوسط</option><option>متقدم</option></select></div><div><label class="tph-tool-label" for="tphPromptTone">أسلوب الشرح</label><select id="tphPromptTone" class="tph-tool-select"><option>بسيط وواضح</option><option>تقني ومفصل</option><option>مختصر ومباشر</option><option>أكاديمي ومنظم</option></select></div><div><label class="tph-tool-label" for="tphPromptFormat">شكل النتيجة</label><select id="tphPromptFormat" class="tph-tool-select"><option>خطوات وأمثلة وتمرين</option><option>خطة عمل</option><option>كود مع شرح</option><option>مقارنة منظمة</option><option>قائمة فحص</option><option>سيناريو أو نص جاهز</option></select></div></div><label class="tph-tool-label" for="tphPromptContext">معلومات إضافية أو قيود (اختياري)</label><textarea id="tphPromptContext" class="tp-hub-field" placeholder="التقنيات المطلوبة، الميزانية، المدة، ما جربته..."></textarea><div class="tp-hub-row" style="margin-top:10px"><button class="tp-hub-btn" type="button" data-tph-tool="prompt">إنشاء Prompt احترافي</button></div></article>
      <article class="tp-hub-card"><div class="tp-hub-badge">VIDEO STUDIO PLANNER</div><h3>مخطط الفيديو وصانع السيناريو</h3><p>جهّز خطافًا وعنوانًا وسيناريو ومشاهد ونصًا للشاشة ووصفًا ودعوة للتفاعل.</p><label class="tph-tool-label" for="tphVideoTopic">موضوع الفيديو</label><input id="tphVideoTopic" class="tp-hub-search" placeholder="مثال: كيف تحمي حسابك من الاختراق؟"><div class="tph-tool-two"><div><label class="tph-tool-label" for="tphVideoPlatform">المنصة</label><select id="tphVideoPlatform" class="tph-tool-select"><option>TikTok / Reels / Shorts</option><option>YouTube فيديو طويل</option><option>Snapchat Spotlight</option></select></div><div><label class="tph-tool-label" for="tphVideoDuration">المدة</label><select id="tphVideoDuration" class="tph-tool-select"><option value="30">30 ثانية</option><option value="45" selected>45 ثانية</option><option value="60">60 ثانية</option><option value="90">90 ثانية</option><option value="180">3 دقائق</option></select></div></div><label class="tph-tool-label" for="tphVideoAudience">الجمهور المستهدف</label><input id="tphVideoAudience" class="tp-hub-search" placeholder="مثال: طلاب ومبتدئون"><label class="tph-tool-label" for="tphVideoGoal">هدف الفيديو</label><select id="tphVideoGoal" class="tph-tool-select"><option>تعليمي وتقديم معلومة</option><option>زيادة التفاعل</option><option>شرح منتج أو خدمة</option><option>قصة أو تجربة</option><option>توعية وتحذير</option></select><div class="tp-hub-row" style="margin-top:10px"><button class="tp-hub-btn" type="button" data-tph-tool="video">إنشاء خطة وسيناريو</button></div></article>
      <article class="tp-hub-card" style="grid-column:1/-1"><div class="tp-hub-badge">MULTI-LANGUAGE CODE WORKBENCH</div><h3>محرر الأكواد ومعاينتها</h3><p>قوالب وأمثلة لعدد كبير من اللغات، مع إمكانية نسخ الكود وتنزيله. المعاينة والتنفيذ داخل المتصفح متاحان لكود الويب فقط؛ بقية اللغات يمكن تحريرها وعرضها وتنزيلها، لكنها تحتاج مترجمًا أو بيئة تشغيل خاصة.</p><label class="tph-tool-label" for="tphCodeLanguage">اختر لغة البرمجة</label><select id="tphCodeLanguage" class="tph-tool-select">${langOpts}</select><div class="tp-hub-row" style="margin:10px 0"><button class="tp-hub-btn secondary" type="button" data-tph-code-template>تحميل مثال جاهز</button><button class="tp-hub-btn secondary" type="button" data-tph-code-clear>مسح المحرر</button><button class="tp-hub-btn secondary" type="button" data-tph-code-download>تنزيل الملف</button><button class="tp-hub-btn secondary" type="button" data-tph-code-copy>نسخ الكود</button></div><textarea id="tphCodeEditor" class="tp-hub-field tph-editor" spellcheck="false" dir="ltr" placeholder="اختر لغة ثم اكتب الكود هنا..."></textarea><div class="tp-hub-row" style="margin-top:10px"><button class="tp-hub-btn" type="button" data-tph-tool="code-preview">معاينة / تشغيل</button><span class="tp-hub-tool-small" id="tphCodeMode">HTML وCSS وJavaScript يمكن تجربتها في إطار معزول.</span></div><iframe id="tphCodePreview" title="معاينة الكود" sandbox="allow-scripts" style="display:none;width:100%;height:280px;background:white;border:1px solid #334155;border-radius:10px;margin-top:12px"></iframe><div class="tph-tool-hint">تنبيه: لا تضع كلمات مرور أو مفاتيح API أو بيانات حقيقية في المحرر. تشغيل كود غير موثوق قد يكون خطرًا حتى داخل بيئة تجريبية؛ الإطار معزول عن ملفات الموقع ولا يملك صلاحية الوصول إلى الصفحة الأم.</div></article>
      <article class="tp-hub-card" style="grid-column:1/-1"><div class="tp-hub-badge">IT HELP DESK · OFFLINE KNOWLEDGE BASE</div><h3>مساعد البحث عن مشاكل الكمبيوتر</h3><p>اكتب المشكلة بطريقتك، مثل: «اللابتوب بصير صوته عالي وبسخن» أو «النت متصل بس المواقع ما بتفتح». سيبحث في قاعدة حلول محلية عن الأعراض والكلمات القريبة ويعرض خطوات فحص آمنة.</p><label class="tph-tool-label" for="tphItSearch">اكتب وصف المشكلة كما تظهر عندك</label><input id="tphItSearch" class="tp-hub-search" type="search" placeholder="مثال: الجهاز بعلق لما افتح أكثر من برنامج"><div class="tp-hub-row"><button class="tp-hub-btn" type="button" data-tph-tool="it-search">ابحث عن حل</button><button class="tp-hub-btn secondary" type="button" data-tph-it-examples>أمثلة لمشاكل شائعة</button></div><p class="tp-hub-tool-small">يمكن البحث بالعربية أو الإنجليزية. إذا لم يجد تطابقًا واضحًا سيعرض أسئلة تساعد على تحديد السبب بدل اختراع حل.</p><div id="tphItResults" aria-live="polite"></div></article>
      </div><div id="tpHubToolResult" class="tp-hub-box" style="display:none"><div class="tp-hub-row" style="justify-content:space-between"><h3 style="margin:0">النتيجة</h3><button class="tp-hub-btn secondary" type="button" data-tph-copy-result>نسخ</button></div><textarea id="tpHubToolOutput" class="tp-hub-field" readonly style="margin-top:12px"></textarea></div><p class="tp-hub-muted">كل الأدوات تعمل محليًا دون AI أو API أو رسوم استخدام. قاعدة تشخيص IT إرشادية وليست فحصًا مباشرًا للجهاز، ولا تغطي كل الأعطال الممكنة.</p>`;
    }
    function progressView() {
      const done=saved.done||[]; const pct=Math.round(done.length/totalLessons*100);
      return `<p class="tp-hub-kicker">YOUR PROGRESS</p><h1 class="tp-hub-title">تقدمك بالتعلّم</h1><p class="tp-hub-desc">يُحفظ التقدم على هذا المتصفح فقط، وليس على حساب متزامن بين الأجهزة.</p><div class="tp-hub-card"><div class="tp-hub-row" style="justify-content:space-between"><strong>إجمالي الدروس</strong><strong>${done.length} / ${totalLessons}</strong></div><div class="tp-hub-progress"><span style="width:${pct}%"></span></div><p class="tp-hub-muted">أنهيت ${pct}% من دروس البداية.</p></div><div class="tp-hub-box"><h3>الدروس المكتملة</h3>${done.length?`<ul>${done.map(x=>`<li>${esc(x.replace(":"," — "))}</li>`).join("")}</ul>`:`<p>لسه ما أنهيت دروس. اختَر أي مسار وابدأ بأول درس.</p>`}</div><button type="button" class="tp-hub-btn secondary" data-tph-reset>إعادة ضبط التقدم</button>`;
    }
    function render() {
      renderNav();
      if (active === "home") main.innerHTML=homeView();
      else if (active === "tools") main.innerHTML=toolsView();
      else if (active === "progress") main.innerHTML=progressView();
      else { const a=areas.find(x=>x.id===active); if(!a){active="home";main.innerHTML=homeView();renderNav();return;} if(activeLesson){main.innerHTML=lessonView(a,activeLesson);}else main.innerHTML=areaView(a); }
    }
    const IT_KB = [
      {title:"بطء الكمبيوتر أو التهنيج",keys:["بطيء","بطئ","بطء","يعلق","تهنيج","hang","slow","freez","lag","ثقيل"],cause:"قد يكون السبب استهلاك المعالج أو الذاكرة أو القرص، أو تطبيقًا يعمل بالخلفية، أو حرارة مرتفعة، أو مساحة قليلة.",steps:["احفظ ملفاتك المفتوحة قبل أي خطوة.","افتح Task Manager عبر Ctrl + Shift + Esc، وافحص CPU وMemory وDisk ورتّب حسب الأعلى.","أغلق التطبيقات التي تعرفها ولا تحتاجها فقط؛ لا توقف عمليات Windows أو الحماية.","افحص مساحة قرص النظام من Settings > System > Storage.","راجع تطبيقات بدء التشغيل، وعطّل فقط التطبيقات غير الضرورية التي تعرفها.","إذا بدأ البطء بعد تحديث أو تثبيت برنامج، سجّل ذلك واختبر بعد إعادة تشغيل آمنة."],ask:"هل البطء عند تشغيل الجهاز أم بعد فتح برنامج محدد؟ وهل يظهر ارتفاع CPU أم Memory أم Disk؟"},
      {title:"ارتفاع حرارة الجهاز أو صوت المروحة",keys:["حرارة","يسخن","سخونة","مروحة","صوت عالي","fan","overheat","hot","حرارته"],cause:"قد ينتج عن حمل مرتفع أو فتحات تهوية مسدودة أو غبار أو مروحة معطلة أو بيئة ساخنة.",steps:["ضع الجهاز على سطح صلب ومستوٍ ولا تسد فتحات التهوية.","أغلق الألعاب أو البرامج الثقيلة مؤقتًا وافحص Task Manager.","أوقف الجهاز واتركه يبرد إذا ظهرت حرارة شديدة أو انطفاء متكرر.","لا تفتح مزود الطاقة ولا تلمس مكونات ساخنة؛ اطلب فنيًا لتنظيف داخلي أو فحص المروحة عند الحاجة.","إذا ظهرت رائحة احتراق أو انتفاخ بطارية، أوقف الاستخدام وافصل الشاحن إن كان ذلك آمنًا واطلب صيانة فورًا."],ask:"هل الحرارة في اللابتوب أم الكمبيوتر المكتبي؟ وهل ترتفع حتى دون تشغيل برامج؟"},
      {title:"الواي فاي لا يتصل بالشبكة",keys:["واي فاي","wifi","wi-fi","wireless","شبكة لاسلكية","ما بتصل","لا يتصل","كلمة المرور"],cause:"قد يكون Wi‑Fi مغلقًا أو وضع الطيران مفعّلًا أو كلمة المرور غير صحيحة أو مشكلة بالراوتر أو تعريف الشبكة.",steps:["تأكد من إيقاف وضع الطيران وتشغيل Wi‑Fi.","اختبر اتصال هاتف أو جهاز آخر بنفس الشبكة.","أعد الاتصال بالشبكة وتأكد من كلمة المرور دون مشاركتها مع أحد.","أعد تشغيل الراوتر بعد إبلاغ من يستخدم الشبكة.","في Windows شغّل مستكشف أخطاء الشبكة، ثم تحقق من حالة محول Wi‑Fi في Device Manager.","لا تحذف تعريف الشبكة أو تعِد ضبط الراوتر للمصنع قبل حفظ بيانات الاتصال والتأكد من صلاحيتك."],ask:"هل الشبكة لا تظهر أصلًا، أم تظهر لكن ترفض كلمة المرور، أم تتصل ثم تنقطع؟"},
      {title:"متصل بالواي فاي لكن الإنترنت لا يعمل",keys:["متصل","بدون انترنت","ما في نت","النت لا يعمل","internet","no internet","connected","المواقع ما بتفتح","dns"],cause:"الاتصال بالراوتر لا يعني بالضرورة وجود اتصال بالإنترنت؛ قد تكون المشكلة من مزود الخدمة أو DNS أو جهاز واحد.",steps:["افتح موقعًا معروفًا وجرب تطبيقًا آخر للتأكد أن المشكلة ليست بموقع واحد.","اختبر جهازًا ثانيًا على نفس الشبكة.","أعد تشغيل الراوتر وانتظر عودة الاتصال.","افحص لمبات Internet/WAN في الراوتر دون تغيير إعداداته.","إذا كانت كل الأجهزة متأثرة، تواصل مع مزود الإنترنت واذكر وقت بداية العطل.","إذا جهاز واحد فقط متأثر، افحص إعدادات Proxy وVPN وDNS دون إدخال إعدادات عشوائية."],ask:"هل الإنترنت متوقف على كل الأجهزة أم على جهازك فقط؟"},
      {title:"الكمبيوتر لا يعمل",keys:["ما بشتغل","لا يعمل","مش راضي يشتغل","لا يفتح","won't turn on","no power","power","ما بيفتح"],cause:"قد تكون المشكلة من الكهرباء أو الشاحن أو البطارية أو زر التشغيل أو مكونات الطاقة.",steps:["افحص المقبس والكابل ومفتاح الكهرباء الخارجي إن وجد.","في اللابتوب استخدم الشاحن الأصلي أو المتوافق وتحقق من مؤشر الشحن.","افصل الملحقات الخارجية غير الضرورية ثم جرّب التشغيل مرة واحدة.","لا تفتح مزود الطاقة أو البطارية الداخلية بنفسك.","إذا ظهرت رائحة أو شرارة أو حرارة غير طبيعية، افصل الكهرباء إن كان آمنًا ولا تعاود التشغيل واطلب فنيًا."],ask:"هل تظهر أي لمبة أو صوت مروحة عند الضغط على زر التشغيل؟"},
      {title:"الشاشة سوداء أو لا تعرض صورة",keys:["شاشة سوداء","black screen","لا توجد صورة","no display","الشاشة ما بتشتغل","الشاشة لا تعمل","display","monitor"],cause:"قد يكون السبب من الشاشة أو الكابل أو مصدر الإدخال أو وضع السكون أو كرت الشاشة أو بدء تشغيل النظام.",steps:["تحقق أن الشاشة تعمل وأن مصدر الإدخال HDMI/DisplayPort الصحيح محدد.","افحص توصيل الكابل من الطرفين دون شدّه، وجرب كابلًا أو منفذًا آخر إن توفر.","ارفع السطوع وألغِ وضع السكون بتحريك الفأرة أو الضغط على زر التشغيل ضغطة قصيرة.","على Windows جرّب Win + Ctrl + Shift + B لإعادة تهيئة تعريف الرسوميات.","إذا كان الجهاز يصدر صفارات أو يعرض أضواء تشخيصية، سجّل نمطها وراجع دليل الشركة."],ask:"هل الشاشة سوداء تمامًا أم تظهر رسالة No Signal؟ وهل تسمع صوت بدء Windows؟"},
      {title:"إعادة تشغيل أو إطفاء مفاجئ",keys:["يعيد التشغيل","يطفي لحاله","يفصل لحاله","restart","shutdown","reboot","يطفي فجأة","شاشة زرقاء","blue screen","bsod"],cause:"قد يرتبط بارتفاع الحرارة أو الطاقة أو تعريفات أو تحديثات أو أخطاء نظام أو ذاكرة.",steps:["سجّل وقت حدوث المشكلة وما كنت تشغله حينها.","افحص الحرارة والتهوية ومصدر الطاقة.","إذا ظهرت شاشة زرقاء، صوّر رمز الخطأ أو دوّنه.","راجع Reliability Monitor أو Event Viewer بحثًا عن أخطاء وقت الانطفاء.","لا تثبّت أدوات إصلاح مجهولة ولا تغيّر إعدادات BIOS دون معرفة.","إذا تكرر العطل أو صاحبه صوت/رائحة غير طبيعية، أوقف الاستخدام واطلب فحصًا فنيًا."],ask:"هل يحدث أثناء اللعب أو الشحن أو حتى والجهاز خامل؟ وهل تظهر شاشة زرقاء؟"},
      {title:"لا يوجد صوت",keys:["الصوت لا يعمل","ما في صوت","بدون صوت","no sound","audio","sound","سماعات","speaker"],cause:"قد يكون جهاز الإخراج الخطأ محددًا أو الصوت مكتومًا أو تعريف الصوت أو التطبيق به مشكلة.",steps:["تأكد من عدم كتم الصوت وارفع مستوى الصوت من النظام والتطبيق.","افتح إعدادات Sound واختر جهاز الإخراج الصحيح.","افصل السماعات وأعد توصيلها أو جرّب سماعة أخرى.","اختبر الصوت في تطبيق مختلف.","شغّل مستكشف أخطاء الصوت، وافحص تحديث تعريف الصوت من الشركة المصنعة."],ask:"هل لا يوجد صوت من كل الأجهزة أم من السماعات/سماعة البلوتوث فقط؟"},
      {title:"الميكروفون لا يعمل",keys:["ميكروفون","مايك","mic","microphone","لا يسمعوني","صوتي لا يصل","mic not working"],cause:"قد يكون الميكروفون غير محدد أو صلاحيات الخصوصية تمنع التطبيق أو مستوى الإدخال منخفضًا.",steps:["افتح Settings > System > Sound > Input واختر الميكروفون الصحيح.","اختبر مؤشر مستوى الإدخال وتأكد أن الجهاز غير مكتوم.","راجع Settings > Privacy & security > Microphone واسمح للتطبيق المطلوب.","اختبر الميكروفون في تطبيق آخر وأعد تشغيل التطبيق.","افحص الكابل أو اتصال Bluetooth وتعريف الصوت عند الحاجة."],ask:"هل الميكروفون لا يظهر في Windows أم يظهر لكن لا يلتقط الصوت؟"},
      {title:"لوحة المفاتيح أو الفأرة لا تستجيب",keys:["كيبورد","keyboard","ماوس","mouse","الفأرة","الماوس","لا يستجيب","مش شغال","لا يعمل"],cause:"قد يكون الاتصال أو البطارية أو منفذ USB أو إعدادات الوصول أو التعريف.",steps:["إذا كانت لاسلكية، افحص البطارية ومفتاح التشغيل والمستقبل اللاسلكي.","جرّب منفذ USB آخر وتجنب موزع USB مؤقتًا.","اختبر لوحة مفاتيح أو فأرة أخرى لتحديد إن كانت المشكلة من الجهاز نفسه.","أعد تشغيل Windows إذا كان ذلك ممكنًا واحفظ عملك أولًا.","افحص Device Manager بحثًا عن علامة تحذير، ولا تحذف تعريفات عشوائيًا."],ask:"هل الجهاز سلكي أم لاسلكي؟ وهل يتوقف كليًا أم بعض الأزرار فقط؟"},
      {title:"البطارية لا تشحن",keys:["بطارية","لا تشحن","ما بتشحن","charging","battery","plugged in","شاحن","charger"],cause:"قد تكون المشكلة من الشاحن أو المنفذ أو الحرارة أو إعدادات حماية البطارية أو تآكل البطارية.",steps:["افحص الكابل والمحول والمقبس بحثًا عن تلف ظاهر.","جرّب مقبسًا آخر وشاحنًا معتمدًا ومتوافقًا فقط.","اترك الجهاز يبرد إذا كان ساخنًا جدًا.","راجع تطبيق الشركة المصنعة فقد يكون حد الشحن مضبوطًا لحماية البطارية.","إذا كانت البطارية منتفخة أو الجهاز يصدر رائحة، أوقف الاستخدام ولا تضغط عليها واطلب صيانة."],ask:"هل تظهر علامة الشحن؟ وهل النسبة ثابتة أم تنقص أثناء توصيل الشاحن؟"},
      {title:"المساحة ممتلئة",keys:["مساحة","تخزين","ممتلئة","storage","disk full","low disk","مساحة القرص","c drive"],cause:"قد تستهلك الملفات المؤقتة أو التنزيلات أو الفيديوهات أو نسخ التحديثات مساحة القرص.",steps:["افتح Settings > System > Storage لمعرفة الفئات المستهلكة.","راجع Downloads وRecycle Bin يدويًا قبل الحذف.","انقل الملفات الشخصية الكبيرة إلى وسيط موثوق بعد التأكد من النسخة.","استخدم Storage Sense أو Disk Cleanup المدمجين.","لا تحذف مجلدات Windows أو Program Files أو ملفات لا تعرفها."],ask:"أي قرص ممتلئ، C أم قرص آخر؟ وما الفئة الأكبر في شاشة Storage؟"},
      {title:"المتصفح بطيء أو يغلق فجأة",keys:["متصفح","كروم","chrome","edge","browser","يغلق","يتعطل","crash","بطيء","صفحات"],cause:"قد تكون المشكلة من إضافة أو ذاكرة أو ملف تعريف تالف أو نسخة قديمة أو صفحة معينة.",steps:["احفظ عملك وأغلق التبويبات غير الضرورية.","حدّث المتصفح من صفحة About الرسمية.","جرّب نافذة خاصة لمعرفة إن كانت إضافة أو بيانات موقع تسبب المشكلة.","عطّل الإضافات واحدة تلو الأخرى بدل حذفها جميعًا.","إذا استمرت المشكلة، أنشئ ملف تعريف جديدًا بعد التأكد من مزامنة بياناتك المهمة."],ask:"هل المشكلة في كل المواقع أم موقع واحد؟ وأي متصفح تستخدم؟"},
      {title:"برنامج لا يفتح أو يتوقف",keys:["برنامج لا يفتح","تطبيق لا يعمل","app","software","program","application","يتوقف","not responding","ما بفتح"],cause:"قد يكون البرنامج غير متوافق أو ملفاته ناقصة أو يحتاج تحديثًا أو صلاحية أو مساحة.",steps:["دوّن اسم البرنامج ورسالة الخطأ كاملة.","أعد تشغيل الجهاز وجرب فتح البرنامج مرة واحدة.","تحقق من تحديث البرنامج ومتطلبات النظام من الموقع الرسمي.","جرّب Repair من إعدادات التطبيقات إن كان متاحًا.","لا تنزّل DLL منفردًا من مواقع عشوائية؛ أعد تثبيت البرنامج من مصدره الرسمي إذا لزم."],ask:"ما اسم البرنامج؟ وما رسالة الخطأ التي تظهر عند فتحه؟"},
      {title:"الطابعة لا تطبع",keys:["طابعة","printer","print","لا تطبع","طباعة","offline","ورق"],cause:"قد تكون الطابعة غير متصلة أو غير محددة كافتراضية أو قائمة الطباعة عالقة أو هناك ورق/حبر.",steps:["تحقق من الطاقة والورق والحبر ورسالة الشاشة.","تأكد أن الكمبيوتر والطابعة على الشبكة نفسها أو أن كابل USB متصل.","اختر الطابعة الصحيحة وألغِ وضع Use Printer Offline إن كان مفعلًا.","افتح قائمة الطباعة وألغِ المهمة العالقة بعد التأكد من أنها ليست مهمة مهمة.","حدّث التعريف من موقع الشركة المصنعة."],ask:"هل الطابعة تظهر Offline أم تقبل المهمة ولا تطبع؟"},
      {title:"USB أو قرص خارجي غير معروف",keys:["usb","فلاش","فلاشة","فلاش ميموري","قرص خارجي","external drive","not recognized","غير معروف"],cause:"قد يكون المنفذ أو الكابل أو نظام الملفات أو تعريف USB أو القرص نفسه.",steps:["جرّب منفذًا آخر مباشرة في الكمبيوتر دون موزع.","اختبر وحدة التخزين على جهاز آخر إن أمكن.","افتح Disk Management وتحقق هل يظهر القرص دون تهيئة أو Format.","إذا ظهرت رسالة تطلب Format وكان عليه ملفات مهمة، لا توافق قبل محاولة استعادة آمنة.","افحص Device Manager ورسائل الخطأ، واطلب مختصًا إذا ظهرت أصوات نقر من القرص."],ask:"هل يظهر USB في File Explorer أم في Disk Management فقط؟ وهل يحتوي ملفات مهمة؟"},
      {title:"الشاشة تومض أو دقة العرض غير صحيحة",keys:["تومض","وميض","flicker","resolution","دقة الشاشة","شاشة ترمش","display driver"],cause:"قد تكون من معدل تحديث غير مناسب أو كابل أو تعريف رسوميات أو تطبيق يتعارض مع العرض.",steps:["تحقق من الكابل والمنفذ وثبّتهما جيدًا.","افتح Settings > System > Display واختر الدقة الموصى بها.","راجع Advanced display وتأكد من معدل تحديث مدعوم.","حدّث تعريف الرسوميات من Windows Update أو الشركة المصنعة.","إذا بدأ الوميض بعد تثبيت تطبيق، اختبر إزالته أو تحديثه بعد حفظ العمل."],ask:"هل الوميض يظهر دائمًا أم عند فتح تطبيق معين؟ وهل تستخدم شاشة خارجية؟"},
      {title:"Bluetooth لا يتصل",keys:["بلوتوث","bluetooth","سماعة لاسلكية","pairing","اقتران"],cause:"قد يكون Bluetooth مغلقًا أو الجهاز غير في وضع الاقتران أو الاتصال السابق عالقًا أو التعريف يحتاج تحديثًا.",steps:["تأكد من تشغيل Bluetooth على الكمبيوتر والجهاز الآخر.","ضع الجهاز في وضع الاقتران حسب دليل الشركة.","أزل الاقتران القديم ثم أعد الاقتران إذا لم يكن هناك نقل مهم.","تأكد أن الجهاز ليس متصلًا بهاتف أو كمبيوتر آخر.","افحص مستكشف أخطاء Bluetooth والتعريف من الشركة المصنعة."],ask:"هل الجهاز لا يظهر في قائمة Bluetooth أم يظهر ويرفض الاقتران؟"},
      {title:"Windows Update يفشل",keys:["تحديث ويندوز","windows update","update failed","تحديث فاشل","تحديث لا يكتمل"],cause:"قد يكون السبب مساحة غير كافية أو اتصالًا غير مستقر أو خدمة تحديث أو تعريفًا غير متوافق.",steps:["سجّل رمز الخطأ الظاهر في Windows Update.","تأكد من اتصال الإنترنت والوقت والتاريخ الصحيحين.","وفّر مساحة كافية على قرص النظام.","أعد تشغيل الجهاز ثم شغّل مستكشف أخطاء Windows Update.","لا تحذف مجلدات النظام يدويًا أو تستخدم سكربتات إصلاح مجهولة."],ask:"ما رمز الخطأ الذي يظهر؟ وهل يتوقف عند نسبة محددة؟"},
      {title:"كاميرا الويب لا تعمل",keys:["كاميرا","webcam","camera","كاميرا لا تعمل","الصورة سوداء"],cause:"قد تكون الكاميرا محجوبة أو صلاحيات الخصوصية تمنع التطبيق أو تطبيق آخر يستخدمها أو التعريف غير سليم.",steps:["تحقق من غطاء الخصوصية أو زر تعطيل الكاميرا في الجهاز.","راجع Settings > Privacy & security > Camera واسمح للتطبيق.","أغلق تطبيقات الاجتماعات الأخرى ثم افتح تطبيق Camera للاختبار.","افحص الكاميرا في Device Manager والتحديثات الرسمية.","لا تمنح تطبيقًا غير موثوق صلاحية الكاميرا."],ask:"هل الكاميرا لا تظهر نهائيًا أم تظهر صورة سوداء؟"},
      {title:"رسالة فيروس أو نوافذ منبثقة مشبوهة",keys:["فيروس","malware","virus","popup","اعلان","إعلانات","اختراق","تحذير أمني","scam"],cause:"قد تكون إشعارات موقع مضللة أو برنامجًا غير مرغوب أو إصابة فعلية. لا يمكن تأكيد الإصابة من وصف وحده.",steps:["لا تضغط على الإعلان ولا تتصل برقم هاتف يظهر في نافذة التحذير.","لا تثبّت أداة تنظيف من النافذة المنبثقة.","أغلق التبويب أو المتصفح، ثم راجع أذونات إشعارات المواقع واحذف المواقع غير المعروفة.","شغّل فحصًا باستخدام Windows Security أو برنامج حماية موثوق ومحدّث.","إذا أدخلت كلمة مرور في صفحة مشبوهة، غيّرها من جهاز موثوق وفعّل المصادقة الثنائية."],ask:"هل التحذير داخل المتصفح فقط أم يظهر من Windows Security؟ وهل حمّلت ملفًا مؤخرًا؟"},
      {title:"الشبكة بطيئة أو التقطيع",keys:["النت بطيء","انترنت بطيء","سرعة النت","slow internet","قطع","ping","lag online","تقطيع"],cause:"قد يكون السبب ازدحام الشبكة أو ضعف الإشارة أو بعد الجهاز عن الراوتر أو مشكلة من المزود أو جهاز يستهلك الاتصال.",steps:["اختبر السرعة من موقع موثوق على جهاز واحد وبالقرب من الراوتر.","كرر الاختبار في وقت مختلف وسجل النتائج.","جرّب اتصال Ethernet إن توفر للمقارنة.","أوقف التنزيلات الكبيرة على أجهزتك بعد إعلام المستخدمين الآخرين.","إذا كانت كل الأجهزة بطيئة، تواصل مع مزود الخدمة وأرسل نتائج الاختبار."],ask:"هل البطء على Wi‑Fi فقط أم حتى عبر كابل؟ وهل كل الأجهزة متأثرة؟"},
      {title:"ملفات محذوفة أو فقدان بيانات",keys:["ملفات اختفت","حذفت ملف","استرجاع ملفات","deleted files","data recovery","ملفات مفقودة"],cause:"قد تكون الملفات في سلة المحذوفات أو حساب مستخدم آخر أو خدمة مزامنة. الكتابة على القرص قد تقلل فرص الاستعادة.",steps:["توقف عن حفظ ملفات جديدة على القرص المتأثر قدر الإمكان.","افحص Recycle Bin وسجل الإصدارات أو سلة المحذوفات السحابية.","تحقق من المجلد الصحيح وحساب المستخدم الصحيح.","لا تثبّت برنامج استعادة على نفس القرص الذي فقدت منه الملفات.","إذا كانت البيانات مهمة جدًا، أوقف استخدام القرص واستعن بمختص استعادة بيانات."],ask:"هل الملفات على SSD أم HDD؟ وهل حذفتها أم اختفت بعد تحديث أو مزامنة؟"},
      {title:"تعذر تسجيل الدخول إلى Windows",keys:["تسجيل الدخول","login","password","كلمة المرور","pin","نسيت الرقم السري","حساب ويندوز"],cause:"قد يكون تخطيط لوحة المفاتيح أو اتصال الإنترنت أو PIN أو كلمة المرور أو حساب Microsoft.",steps:["تحقق من لغة لوحة المفاتيح وCaps Lock وNum Lock.","إذا كنت تستخدم حساب Microsoft، تأكد من اتصال الإنترنت واتبع الاستعادة الرسمية للحساب.","جرّب خيارات Sign-in الأخرى التي يعرضها Windows.","لا تستخدم أدوات تجاوز كلمة المرور أو طرقًا غير رسمية.","إذا كان الجهاز تابعًا لجهة عمل أو مدرسة، تواصل مع مسؤول النظام."],ask:"هل تستخدم PIN أم كلمة مرور حساب Microsoft؟ وما نص الرسالة الظاهرة؟"}
    ];
    const normalizeIt = value => String(value||"").toLowerCase().replace(/[أإآ]/g,"ا").replace(/ة/g,"ه").replace(/ى/g,"ي").replace(/[ًٌٍَُِّْـ]/g,"").replace(/[^\p{L}\p{N}\s]/gu," ").replace(/\s+/g," ").trim();
    function setItResults(html){const box=main.querySelector("#tphItResults");if(box)box.innerHTML=html;}
    function renderItSearch(query){
      const q=normalizeIt(query);const tokens=q.split(" ").filter(t=>t.length>1);const ranked=IT_KB.map(item=>{const hay=normalizeIt([item.title,item.cause,...item.keys].join(" "));let score=0;for(const key of item.keys){const k=normalizeIt(key);if(q.includes(k))score+=k.includes(" ")?5:3;}for(const token of tokens){if(hay.includes(token))score+=1;}return {item,score};}).filter(x=>x.score>0).sort((a,b)=>b.score-a.score).slice(0,4);
      if(!ranked.length){setItResults(`<div class="tph-tool-hint">ما لقيت تطابقًا كافيًا في قاعدة المعرفة الحالية. حتى ما أعطيك حلًا عشوائيًا، جرّب وصفًا أدق: ما الجهاز أو البرنامج؟ ماذا يحدث؟ متى بدأت المشكلة؟ وهل تظهر رسالة خطأ؟</div><div class="tph-diagnosis-card"><h4>خطوات أولية آمنة</h4><ol><li>احفظ ملفاتك المهمة.</li><li>دوّن نص رسالة الخطأ كما يظهر.</li><li>حدد هل المشكلة في جهاز واحد أم أكثر.</li><li>لا تحذف ملفات أو تثبّت أدوات إصلاح مجهولة.</li></ol></div>`);return;}
      setItResults(ranked.map(({item,score},i)=>`<article class="tph-diagnosis-card"><div class="tp-hub-meta"><span>نتيجة ${i+1}</span><span>تطابق تقريبي</span></div><h4>${esc(item.title)}</h4><p><strong>أسباب محتملة:</strong> ${esc(item.cause)}</p><strong style="color:#bfdbfe;font-size:13px">خطوات الفحص والحل</strong><ol>${item.steps.map(step=>`<li>${esc(step)}</li>`).join("")}</ol><p><strong>سؤال لتحديد السبب:</strong> ${esc(item.ask)}</p></article>`).join(""));
    }

    function setToolOutput(text) {
      toolOutput=text; const result=main.querySelector("#tpHubToolResult"); const out=main.querySelector("#tpHubToolOutput");
      if(result&&out){result.style.display="block";out.value=text;result.scrollIntoView({behavior:"smooth",block:"nearest"});}
    }
    function openHub() { overlay.classList.add("tp-hub-open"); document.body.style.overflow="hidden"; render(); overlay.querySelector("#tpHubClose").focus(); }
    function closeHub() { overlay.classList.remove("tp-hub-open"); document.body.style.overflow=""; launcher.focus(); }
    launcher.addEventListener("click",openHub);
    overlay.querySelector("#tpHubClose").addEventListener("click",closeHub);
    overlay.addEventListener("click",e=>{if(e.target===overlay)closeHub();});
    document.addEventListener("keydown",e=>{if(e.key==="Escape"&&overlay.classList.contains("tp-hub-open"))closeHub();});
    overlay.addEventListener("input",e=>{if(e.target.id==="tpHubSearch"){search=e.target.value;const pos=e.target.selectionStart;render();const next=main.querySelector("#tpHubSearch");if(next){next.focus();next.setSelectionRange(pos,pos);}}});
    overlay.addEventListener("click",async e=>{
      const navBtn=e.target.closest("[data-tph-nav]");
      if(navBtn){active=navBtn.dataset.tphNav;activeLesson=null;search="";render();main.scrollTop=0;return;}
      const lessonBtn=e.target.closest("[data-tph-lesson]");
      if(lessonBtn){const a=areas.find(x=>x.id===lessonBtn.dataset.tphLesson);active=a.id;activeLesson=a.lessons[Number(lessonBtn.dataset.tphIndex)];render();main.scrollTop=0;return;}
      const complete=e.target.closest("[data-tph-complete]");
      if(complete){const id=complete.dataset.tphComplete;const i=saved.done.indexOf(id);if(i>=0)saved.done.splice(i,1);else saved.done.push(id);persist();render();return;}
      const notes=e.target.closest("[data-tph-save-notes]");
      if(notes){saved.notes=saved.notes||{};saved.notes[notes.dataset.tphSaveNotes]=main.querySelector("#tpHubNotes")?.value||"";persist();notes.textContent="تم حفظ الملاحظات ✓";setTimeout(()=>{if(notes.isConnected)notes.textContent="حفظ ملاحظاتي";},1300);return;}
      const reset=e.target.closest("[data-tph-reset]");
      if(reset){if(confirm("متأكد بدك تمسح تقدمك وملاحظاتك المحفوظة على هذا المتصفح؟")){saved={done:[],notes:{}};persist();render();}return;}
      const templateBtn=e.target.closest("[data-tph-code-template]");
      const clearBtn=e.target.closest("[data-tph-code-clear]");
      const downloadBtn=e.target.closest("[data-tph-code-download]");
      const copyCodeBtn=e.target.closest("[data-tph-code-copy]");
      const codeEditor=main.querySelector("#tphCodeEditor");
      const codeLanguage=main.querySelector("#tphCodeLanguage");
      const codeTemplates={
        html:'<!doctype html>\n<html lang="ar" dir="rtl">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>صفحتي الأولى</title>\n</head>\n<body>\n  <h1>مرحبًا في TechPath</h1>\n  <p>هذه أول صفحة لي.</p>\n  <button id="hello">اضغط هنا</button>\n</body>\n</html>',
        css:'body {\n  font-family: Arial, sans-serif;\n  background: #f1f5f9;\n  color: #0f172a;\n  padding: 2rem;\n}\n.card {\n  max-width: 420px;\n  padding: 1.5rem;\n  border-radius: 16px;\n  background: white;\n  box-shadow: 0 8px 24px #0001;\n}',
        javascript:'const button = document.querySelector("#hello");\nbutton?.addEventListener("click", () => {\n  alert("مرحبًا من JavaScript!");\n});',
        typescript:'type User = { name: string; age: number };\n\nconst greet = (user: User): string => {\n  return `مرحبًا ${user.name}`;\n};\n\nconsole.log(greet({ name: "Motasem", age: 18 }));',
        python:'def greet(name: str) -> str:\n    return f"Hello, {name}!"\n\nprint(greet("TechPath"))',
        c:'#include <stdio.h>\n\nint main(void) {\n    printf("Hello, TechPath!\\n");\n    return 0;\n}',
        cpp:'#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello, TechPath!" << endl;\n    return 0;\n}',
        csharp:'using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine("Hello, TechPath!");\n    }\n}',
        java:'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, TechPath!");\n    }\n}',
        php:'<?php\n$name = "TechPath";\necho "Hello, $name!";\n?>',
        sql:'CREATE TABLE Students (\n  Id INTEGER PRIMARY KEY,\n  Name VARCHAR(100),\n  Grade DECIMAL(5,2)\n);\n\nSELECT Name, Grade\nFROM Students\nWHERE Grade >= 80;',
        json:'{\n  "project": "TechPath",\n  "active": true,\n  "skills": ["HTML", "CSS", "JavaScript"]\n}',
        bash:'#!/usr/bin/env bash\nset -euo pipefail\necho "Hello, TechPath!"',
        powershell:'$name = "TechPath"\nWrite-Output "Hello, $name!"',
        go:'package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello, TechPath!")\n}',
        rust:'fn main() {\n    println!("Hello, TechPath!");\n}',
        ruby:'name = "TechPath"\nputs "Hello, #{name}!"',
        swift:'import Foundation\n\nlet name = "TechPath"\nprint("Hello, \\(name)!")',
        kotlin:'fun main() {\n    println("Hello, TechPath!")\n}',
        dart:'void main() {\n  print("Hello, TechPath!");\n}',
        r:'values <- c(10, 20, 30)\nmean(values)',
        matlab:'values = [10 20 30];\naverage = mean(values)\ndisp(average)',
        lua:'local name = "TechPath"\nprint("Hello, " .. name .. "!")',
        perl:'my $name = "TechPath";\nprint "Hello, $name!\\n";',
        scala:'object Main {\n  def main(args: Array[String]): Unit = {\n    println("Hello, TechPath!")\n  }\n}',
        haskell:'main :: IO ()\nmain = putStrLn "Hello, TechPath!"',
        elixir:'name = "TechPath"\nIO.puts("Hello, #{name}!")',
        erlang:'-module(main).\n-export([start/0]).\n\nstart() -> io:format("Hello, TechPath!~n").',
        clojure:'(println "Hello, TechPath!")',
        ocaml:'let () = print_endline "Hello, TechPath!"',
        fsharp:'printfn "Hello, TechPath!"',
        assembly:'section .data\n  message db "Hello, TechPath!", 10\n  length equ $ - message\n',
        solidity:'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.20;\n\ncontract HelloTechPath {\n    string public message = "Hello, TechPath!";\n}',
        verilog:'module and_gate(input wire a, input wire b, output wire y);\n  assign y = a & b;\nendmodule',
        vhdl:'library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\n\nentity and_gate is\n  Port (a, b : in STD_LOGIC; y : out STD_LOGIC);\nend and_gate;',
        graphql:'type Query {\n  hello: String!\n}',
        yaml:'project: TechPath\nstatus: active\nskills:\n  - HTML\n  - CSS\n  - JavaScript',
        xml:'<?xml version="1.0" encoding="UTF-8"?>\n<project name="TechPath">\n  <status>active</status>\n</project>',
        markdown:'# TechPath\n\nLearn, build, and share.\n\n- HTML\n- CSS\n- JavaScript',
        regex:'^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$',
        plain:'اكتب النص أو الشيفرة هنا.'
      };
      if(templateBtn&&codeEditor&&codeLanguage){codeEditor.value=codeTemplates[codeLanguage.value]||`// مثال ${codeLanguage.selectedOptions[0]?.textContent||"لغة"}\n// اكتب الكود الخاص بك هنا`;return;}
      if(clearBtn&&codeEditor){codeEditor.value="";const frame=main.querySelector("#tphCodePreview");if(frame){frame.srcdoc="";frame.style.display="none";}return;}
      if(copyCodeBtn&&codeEditor){try{await navigator.clipboard.writeText(codeEditor.value);copyCodeBtn.textContent="تم النسخ ✓";}catch(_){codeEditor.focus();codeEditor.select();document.execCommand("copy");}return;}
      if(downloadBtn&&codeEditor&&codeLanguage){const option=codeLanguage.selectedOptions[0];const ext=option?.dataset.ext||".txt";const blob=new Blob([codeEditor.value],{type:"text/plain;charset=utf-8"});const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download="techpath-code"+(ext.startsWith(".")?ext:"-"+ext);a.click();URL.revokeObjectURL(url);return;}
      const tool=e.target.closest("[data-tph-tool]");
      if(tool){
        if(tool.dataset.tphTool==="prompt"){
          const goal=main.querySelector("#tphPromptGoal")?.value.trim();if(!goal){setToolOutput("اكتب المهمة أولًا.");return;}
          const role=main.querySelector("#tphPromptRole")?.value||"مدرّس خبير";const level=main.querySelector("#tphPromptLevel")?.value||"مبتدئ";const tone=main.querySelector("#tphPromptTone")?.value||"بسيط وواضح";const format=main.querySelector("#tphPromptFormat")?.value||"خطوات وأمثلة وتمرين";const context=main.querySelector("#tphPromptContext")?.value.trim()||"لم تُضف معلومات إضافية.";
          setToolOutput(`الدور:\nأنت ${role} متخصص في المجال المرتبط بالمهمة.\n\nالمهمة الرئيسية:\n${goal}\n\nمستوى المستخدم:\n${level}\n\nالسياق والقيود:\n${context}\n\nأسلوب الإجابة:\n${tone}. اشرح المصطلحات عند ظهورها، ولا تفترض معرفة غير مذكورة.\n\nطريقة العمل:\n1. حلّل المطلوب وحدد المعلومات الناقصة.\n2. إذا كانت معلومة أساسية ناقصة، اسأل سؤالًا محددًا قبل افتراضها.\n3. قسّم الحل إلى مراحل واضحة ومرتبة.\n4. اشرح سبب كل خطوة، وليس النتيجة فقط.\n5. قدّم مثالًا عمليًا قابلًا للتجربة.\n6. اذكر الأخطاء الشائعة وكيفية اكتشافها وإصلاحها.\n7. تحقق من صحة المعلومات والكود، وميّز بين المؤكد والافتراض.\n8. لا تطلب بيانات سرية ولا تكشف مفاتيح أو كلمات مرور.\n\nشكل النتيجة المطلوب:\n${format}.\n\nفي النهاية: أعطني ملخصًا قصيرًا وخطوة عملية أبدأ بها.`);
        }
        if(tool.dataset.tphTool==="video"){
          const topic=main.querySelector("#tphVideoTopic")?.value.trim();if(!topic){setToolOutput("اكتب موضوع الفيديو أولًا.");return;}
          const platform=main.querySelector("#tphVideoPlatform")?.value||"Shorts";const duration=Number(main.querySelector("#tphVideoDuration")?.value||45);const audience=main.querySelector("#tphVideoAudience")?.value.trim()||"المهتمون بالموضوع";const goal=main.querySelector("#tphVideoGoal")?.value||"تعليمي";
          const hook=`هل تعرف أن ${topic}؟ خلّيني أوضح لك أهم نقطة بسرعة.`;
          const parts=duration<=30?[[0,3,"خطاف يجذب الانتباه"],[3,8,"وضح المشكلة ولماذا تهم المشاهد"],[8,duration-5,"قدّم نقطتين عمليتين ومثالًا"],[duration-5,duration,"خلاصة ودعوة للتفاعل"]]:[[0,3,"خطاف واضح"],[3,Math.round(duration*.2),"اعرض المشكلة والسياق"],[Math.round(duration*.2),Math.round(duration*.68),"اشرح 2–3 نقاط مع مثال"],[Math.round(duration*.68),duration-5,"لخّص أهم نتيجة"],[duration-5,duration,"دعوة للتفاعل"]];
          setToolOutput(`خطة فيديو TechPath\nالموضوع: ${topic}\nالمنصة: ${platform}\nالمدة: ${duration} ثانية\nالجمهور: ${audience}\nالهدف: ${goal}\n\n3 عناوين مقترحة:\n1. أهم ما تحتاج معرفته عن ${topic}\n2. لا تقع بهذا الخطأ: ${topic}\n3. شرح ${topic} بطريقة بسيطة\n\nالخطاف المقترح:\n${hook}\n\nالسيناريو وتقسيم المشاهد:\n${parts.map(([a,b,t],i)=>`${i+1}. ${a}–${b} ثانية | ${t}`).join("\n")}\n\nنص مقترح للتعليق الصوتي:\n${hook}\nأولًا: عرّف الفكرة بجملة بسيطة مرتبطة بـ ${topic}.\nثانيًا: اشرح أهم نقطتين أو ثلاث، واجعل لكل نقطة مثالًا قصيرًا.\nثالثًا: لخّص ما يجب أن يتذكره المشاهد.\n\nنصوص قصيرة على الشاشة:\n• ${topic}\n• النقطة الأولى\n• النقطة الثانية\n• الخلاصة\n\nدعوة للتفاعل:\nشو أكثر سؤال عندك عن ${topic}؟ اكتبه بالتعليقات.\n\nوصف مقترح:\nشرح مبسط حول ${topic} موجه إلى ${audience}. احفظ الفيديو وشاركه مع شخص قد يستفيد.\n\nوسوم مقترحة:\n#TechPath #تعلم #تقنية #${topic.replace(/\s+/g,"") }\n\nملاحظة تحريرية: هذه مسودة قالبية وليست بحثًا للتحقق من الحقائق؛ راجع المعلومات قبل النشر واستبدل الجمل العامة بمعلومة موثقة.`);
        }
        if(tool.dataset.tphTool==="code-preview"){
          const lang=codeLanguage?.value||"html";const code=codeEditor?.value||"";const frame=main.querySelector("#tphCodePreview");const mode=main.querySelector("#tphCodeMode");
          if(!code.trim()){setToolOutput("اكتب كودًا أو حمّل مثالًا أولًا.");return;}
          if(["html","css","javascript"].includes(lang)){
            let src="";if(lang==="html")src=code;else if(lang==="css")src=`<style>${code}</style><main><h2>CSS Preview</h2><p class="sample">هذا نص تجريبي لمعاينة التنسيق.</p><button>زر تجريبي</button></main>`;else src=`<main><h2>JavaScript Preview</h2><p id="sample">اضغط الزر لتجربة JavaScript.</p><button id="run">تشغيل الحدث</button></main><script>${code}\n<\/script>`;
            frame.srcdoc=`<!doctype html><html lang="ar" dir="rtl"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{font-family:Arial,sans-serif;padding:20px;line-height:1.7;color:#172033}main{max-width:850px;margin:auto}button{padding:9px 14px;cursor:pointer}.sample{padding:12px;border:1px solid #ddd}</style><body>${src}</body></html>`;frame.style.display="block";if(mode)mode.textContent="تم إرسال الكود إلى إطار تجريبي معزول.";frame.scrollIntoView({behavior:"smooth",block:"nearest"});setToolOutput(`تم تجهيز معاينة ${lang.toUpperCase()} داخل إطار معزول. إذا لم يظهر الناتج، افحص صياغة الكود وتعليمات التشغيل.`);
          } else {if(frame){frame.style.display="none";}if(mode)mode.textContent="هذه اللغة تحتاج مترجمًا أو بيئة تشغيل خاصة؛ يمكنك تحرير الكود وتنزيله.";setToolOutput(`لغة ${codeLanguage?.selectedOptions[0]?.textContent||lang} مدعومة للتحرير والقوالب والتنزيل، لكنها لا تعمل داخل المتصفح مباشرة. نزّل الملف وافتحه في بيئة مناسبة للغة مثل VS Code مع المترجم أو runtime المطلوب. لم يتم تنفيذ الكود.`);}
        }
        if(tool.dataset.tphTool==="it-search"){
          const query=main.querySelector("#tphItSearch")?.value.trim();if(!query){setItResults("اكتب وصف المشكلة أولًا، مثل: الجهاز بطيء أو الصوت لا يعمل.");return;}renderItSearch(query);
        }
        return;
      }
      if(e.target.closest("[data-tph-it-examples]")){const examples=["اللابتوب بطيء ويعلق","الجهاز يسخن والمروحة صوتها عالي","الواي فاي متصل لكن الإنترنت لا يعمل","الكمبيوتر لا يعمل ولا يفتح","الشاشة سوداء بعد التشغيل","الجهاز يعيد التشغيل لوحده","لا يوجد صوت من السماعات","الميكروفون لا يعمل","الكيبورد أو الماوس لا يستجيب","البطارية لا تشحن","المساحة ممتلئة","المتصفح يغلق فجأة","برنامج لا يفتح","الطابعة لا تطبع","USB غير معروف","الشاشة تومض أو دقتها غلط"];setItResults("جرّب البحث بإحدى هذه الصيغ:\\n• "+examples.join("\\n• "));return;}
      if(e.target.closest("[data-tph-copy-result]")){const out=main.querySelector("#tpHubToolOutput");if(out){try{await navigator.clipboard.writeText(out.value);e.target.closest("[data-tph-copy-result]").textContent="تم النسخ ✓";}catch(_){out.focus();out.select();document.execCommand("copy");}}}
    });
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", START, { once: true });
  else START();
})();