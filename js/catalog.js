const BASE = 'images/';

const surrounds = [
  {id:'vi', name:'6"×24" Vision (VI)', desc:'Modern elongated look, sleek.', tags:['Gloss'],
   img: 'images/6x24-Vision_Closed-Up_1.jpg',
   gallery:['images/6x24-Vision_1.jpg'],
   specs:[{l:'Finish',v:'Gloss'},{l:'Tile Size',v:'6"×24"'},{l:'Thickness',v:'1/4"'},{l:'Height',v:'Up to 96"'},{l:'Material',v:'Cultured Marble'},{l:'Pattern',v:'Vision'}]},
  {id:'sb', name:'3"×6" Subway (SB)', desc:'Classic subway tile, always in style.', tags:['Matte','Semi-Gloss'],
   img: 'images/3x6-Subway_Closed-Up_1.jpg',
   gallery:['images/3x6-Subway_Closed-Up_1.jpg'],
   specs:[{l:'Finish',v:'Matte / Semi-Gloss'},{l:'Tile Size',v:'3"×6"'},{l:'Thickness',v:'1/4"'},{l:'Height',v:'Up to 96"'},{l:'Material',v:'Cultured Marble'},{l:'Pattern',v:'Subway'}]},
  {id:'mg', name:'12"×24" Contemporary (MG)', desc:'Large format clean tile.', tags:['Gloss','Matte'],
   img: 'images/12x24-Contemporary_Closed-Up_1.jpg',
   gallery:['images/12x24-Contemporary_Closed-Up_1.jpg'],
   specs:[{l:'Finish',v:'Gloss / Matte'},{l:'Tile Size',v:'12"×24"'},{l:'Thickness',v:'1/4"'},{l:'Height',v:'Up to 96"'},{l:'Material',v:'Cultured Marble'},{l:'Pattern',v:'Large Format'}]},
  {id:'chevronff', name:'Chevron FFI (FF)', desc:'Bold chevron for a dramatic aesthetic.', tags:['Matte'],
   img: 'images/Chevron-FF1_Closed-Up_1.jpg',
   gallery:['images/Chevron-FF1_SW_1.jpg'],
   specs:[{l:'Finish',v:'Matte'},{l:'Pieces',v:'4'},{l:'Thickness',v:'1/4"'},{l:'Height',v:'Up to 96"'},{l:'Material',v:'Cultured Marble'},{l:'Pattern',v:'Chevron'}]},
  {id:'cg', name:'6"×24" Contemporary (CG)', desc:'Wide format, refined & contemporary.', tags:['Matte','Gloss'],
   img: 'images/6x24-Contemporary_Closed-Up_1.jpg',
   gallery:['images/6x24-Contemporary_Closed-Up_1.jpg'],
   specs:[{l:'Finish',v:'Matte / Gloss'},{l:'Tile Size',v:'6"×24"'},{l:'Thickness',v:'1/4"'},{l:'Height',v:'Up to 96"'},{l:'Material',v:'Cultured Marble'},{l:'Pattern',v:'Contemporary'}]},
  {id:'he', name:'Herringbone (HE)', desc:'Classic woven — hotel level luxury.', tags:['Matte','Semi-Gloss'],
   img: 'images/Herringbone_Closed-Up_1.jpg',
   gallery:['images/Herringbone_SW_1.jpg'],
   specs:[{l:'Finish',v:'Matte / Semi-Gloss'},{l:'Pieces',v:'4'},{l:'Thickness',v:'1/4"'},{l:'Height',v:'Up to 96"'},{l:'Material',v:'Cultured Marble'},{l:'Pattern',v:'Herringbone'}]},
  {id:'ll', name:'6"×24" Linear Listello (LL)', desc:'Thin horizontal stripe accents.', tags:['Gloss'],
   img: 'images/6x24-Linear-Listello_Closed-Up_1.jpg',
   gallery:['images/6x24-Linear-Listello_Closed-Up_1.jpg'],
   specs:[{l:'Finish',v:'Gloss'},{l:'Tile Size',v:'6"×24"'},{l:'Thickness',v:'1/4"'},{l:'Height',v:'Up to 96"'},{l:'Material',v:'Cultured Marble'},{l:'Pattern',v:'Linear Listello'}]},
  {id:'vv', name:'Vertical Vision (VV)', desc:'Elongating vertical lines, airy feel.', tags:['Matte','Gloss'],
   img: 'images/Vertical-Vision_Closed-Up_1.jpg',
   gallery:['images/Vertical-Vision_SW_1.jpg'],
   specs:[{l:'Finish',v:'Matte / Gloss'},{l:'Pieces',v:'4'},{l:'Thickness',v:'1/4"'},{l:'Height',v:'Up to 96"'},{l:'Material',v:'Cultured Marble'},{l:'Pattern',v:'Vertical Lines'}]},
  {id:'interval', name:'Interval (IA)', desc:'Staggered brick-style, timeless look.', tags:['Gloss','Matte'],
   img: 'images/Interval_Closed-Up_1.jpg',
   gallery:['images/Interval_Closed-Up_1.jpg'],
   specs:[{l:'Finish',v:'Gloss / Matte'},{l:'Pieces',v:'4'},{l:'Thickness',v:'1/4"'},{l:'Height',v:'Up to 96"'},{l:'Material',v:'Cultured Marble'},{l:'Pattern',v:'Brick Stagger'}]},
  {id:'tt', name:'4"×15" Confetti (TT)', desc:'Playful random pattern, modern vibe.', tags:['Matte'],
   img: 'images/4x15-Confetti_Closed-Up_1.jpg',
   gallery:['images/4x15-Confetti_SW_1.jpg'],
   specs:[{l:'Finish',v:'Matte'},{l:'Tile Size',v:'4"×15"'},{l:'Thickness',v:'1/4"'},{l:'Height',v:'Up to 96"'},{l:'Material',v:'Cultured Marble'},{l:'Pattern',v:'Confetti'}]},
  {id:'ba', name:'2"×14" Bamboo (BA)', desc:'Linear bamboo-inspired texture.', tags:['Semi-Gloss'],
   img: 'images/2x14-Bamboo_Closed-Up_1.jpg',
   gallery:['images/2x14-Bamboo_SW_1.jpg'],
   specs:[{l:'Finish',v:'Semi-Gloss'},{l:'Tile Size',v:'2"×14"'},{l:'Thickness',v:'5/16"'},{l:'Height',v:'Up to 96"'},{l:'Material',v:'Cultured Marble'},{l:'Pattern',v:'Bamboo'}]},
  {id:'ve', name:'10"×20" Vertical (VE)', desc:'Oversized format, bold statement.', tags:['Matte','Gloss'],
   img: 'images/10x20-Vertical_Closed-Up_1.jpg',
   gallery:['images/10x20-Vertical_SW_1.jpg'],
   specs:[{l:'Finish',v:'Matte / Gloss'},{l:'Tile Size',v:'10"×20"'},{l:'Thickness',v:'1/4"'},{l:'Height',v:'Up to 96"'},{l:'Material',v:'Cultured Marble'},{l:'Pattern',v:'Vertical'}]},
  {id:'sa', name:'Stars (SA)', desc:'Unique star pattern, eye-catching.', tags:['Gloss'],
   img: 'images/Stars_Closed-Up_1.jpg',
   gallery:['images/Stars_SW_1.jpg'],
   specs:[{l:'Finish',v:'Gloss'},{l:'Pieces',v:'4'},{l:'Thickness',v:'5/16"'},{l:'Height',v:'Up to 96"'},{l:'Material',v:'Cultured Marble'},{l:'Pattern',v:'Star'}]},
  {id:'h4', name:'Chevron H4 (H4)', desc:'Symmetrical chevron, elegant flow.', tags:['Matte','Semi-Gloss'],
   img: 'images/Chevron-H4_Closed-Up_1.jpg',
   gallery:['images/Chevron-H4_SW_1.jpg'],
   specs:[{l:'Finish',v:'Matte / Semi-Gloss'},{l:'Pieces',v:'4'},{l:'Thickness',v:'1/4"'},{l:'Height',v:'Up to 96"'},{l:'Material',v:'Cultured Marble'},{l:'Pattern',v:'Chevron H4'}]},
  {id:'cp', name:'4×12 Smooth Tile (CP)', desc:'Clean smooth surface, easy maintenance.', tags:['Matte','Gloss'],
   img: 'images/4x12-Tile_Closed-up_1.jpg',
   gallery:['images/4x12-Tile_SW_1.jpg'],
   specs:[{l:'Finish',v:'Matte / Gloss'},{l:'Tile Size',v:'4"×12"'},{l:'Thickness',v:'1/4"'},{l:'Height',v:'Up to 96"'},{l:'Material',v:'Cultured Marble'},{l:'Pattern',v:'Smooth Tile'}]},
  {id:'theory', name:'Theory (TH)', desc:'Soft horizontal lines, modern & elegant.', tags:['Matte','Gloss'],
   img: 'images/Theory_Closed-Up_1.jpg',
   gallery:['images/Theory_SW_1.jpg','images/Theory_SW_2.jpg','images/Theory_SW_3.jpg'],
   specs:[{l:'Finish',v:'Matte / Gloss'},{l:'Pieces',v:'4'},{l:'Thickness',v:'1/4 - 5/16"'},{l:'Height',v:'Up to 96"'},{l:'Material',v:'Cultured Marble'},{l:'Pattern',v:'Horizontal Lines'}]},
  {id:'te', name:'4"×8" (TE)', desc:'Compact versatile tile format.', tags:['Matte'],
   img: 'images/4x8_Closed-Up_1.jpg',
   gallery:['images/4x8_SW_3.jpg'],
   specs:[{l:'Finish',v:'Matte'},{l:'Tile Size',v:'4"×8"'},{l:'Thickness',v:'1/4"'},{l:'Height',v:'Up to 96"'},{l:'Material',v:'Cultured Marble'},{l:'Pattern',v:'Classic'}]},
  {id:'fa', name:'Fan (FA)', desc:'Art deco inspired fan pattern.', tags:['Matte','Gloss'],
   img: 'images/Fan_Closed-Up_1.jpg',
   gallery:['images/Fan_SW_1.jpg'],
   specs:[{l:'Finish',v:'Matte / Gloss'},{l:'Pieces',v:'4'},{l:'Thickness',v:'1/4"'},{l:'Height',v:'Up to 96"'},{l:'Material',v:'Cultured Marble'},{l:'Pattern',v:'Art Deco Fan'}]},
  {id:'santorini', name:'Santorini', desc:'Mediterranean-inspired warm finish.', tags:['Semi-Gloss'],
   img: 'images/Santorini_Closed-Up_1.jpg',
   gallery:['images/Santorini_SW_1.jpg'],
   specs:[{l:'Finish',v:'Semi-Gloss'},{l:'Pieces',v:'4'},{l:'Thickness',v:'1/4"'},{l:'Height',v:'Up to 96"'},{l:'Material',v:'Cultured Marble'},{l:'Style',v:'Mediterranean'}]},
  {id:'du', name:'Dune (DU)', desc:'Organic sand dune texture.', tags:['Semi-Gloss'],
   img: 'images/Dune_Closed-Up_1.jpg',
   gallery:['images/Dune_SW_3.jpg','images/Dune_SW_4.jpg','images/Dune_SW_5.jpg'],
   specs:[{l:'Finish',v:'Semi-Gloss'},{l:'Pieces',v:'4'},{l:'Thickness',v:'5/16"'},{l:'Height',v:'Up to 96"'},{l:'Material',v:'Cultured Marble'},{l:'Pattern',v:'Organic Dune'}]},
  {id:'ventana', name:'Ventana (VN)', desc:'Clean geometric tile pattern.', tags:['Matte','Semi-Gloss'],
   img: 'images/Ventana_Closed-Up_1-1.jpg',
   gallery:['images/Ventana_SW_1-1.jpg'],
   specs:[{l:'Finish',v:'Matte / Semi-Gloss'},{l:'Pieces',v:'4'},{l:'Thickness',v:'1/4"'},{l:'Height',v:'Up to 96"'},{l:'Material',v:'Cultured Marble'},{l:'Pattern',v:'Geometric Tile'}]},
  {id:'sv', name:'6x4x24 Vision (SV)', desc:'Mixed-dimension vision pattern.', tags:['Semi-Gloss'],
   img: 'images/6x4x24-Vision_Closed-Up_1.jpg',
   gallery:['images/6x4x24-Vision_SW_1.jpg'],
   specs:[{l:'Finish',v:'Semi-Gloss'},{l:'Tile Size',v:'6×4×24"'},{l:'Thickness',v:'5/16"'},{l:'Height',v:'Up to 96"'},{l:'Material',v:'Cultured Marble'},{l:'Pattern',v:'Vision Mix'}]},
  {id:'athens', name:'Athens (AT)', desc:'Handcrafted subway look with soft wave texture.', tags:['Gloss','Matte'],
   img: 'images/Athens_Closed-Up_1.jpg',
   gallery:['images/Athens_SW_1.jpg','images/Athens_SW_2.jpg','images/Athens_SW_3.jpg'],
   specs:[{l:'Finish',v:'Gloss / Matte'},{l:'Tile Size',v:'4"×8" Subway'},{l:'Edge',v:'Flat Edge'},{l:'Thickness',v:'1/4"'},{l:'Height',v:'Up to 96"'},{l:'Material',v:'Engineered Stone'}]},
  {id:'v36', name:'3x6 Vision (V3)', desc:'Compact vision texture, subway proportions.', tags:['Gloss'],
   img: 'images/3x6-Vision_Closed-Up_1.jpg',
   specs:[{l:'Finish',v:'Gloss'},{l:'Tile Size',v:'3"×6"'},{l:'Thickness',v:'1/4"'},{l:'Height',v:'Up to 96"'},{l:'Material',v:'Cultured Marble'},{l:'Pattern',v:'Vision'}]},
  {id:'stacked', name:'6x24 Stacked (ST)', desc:'Staggered stacked-plank look.', tags:['Gloss','Matte'],
   img: 'images/6x24-Stacked_Closed-Up_1.jpg',
   specs:[{l:'Finish',v:'Gloss / Matte'},{l:'Edge',v:'Flat Edge'},{l:'Material',v:'Engineered Stone'},{l:'Thickness',v:'1/4"'},{l:'Height',v:'Up to 96"'},{l:'Pattern',v:'Stacked'}]},
  {id:'smooth', name:'Smooth (SM)', desc:'Clean unembossed surface, minimal seams.', tags:['Gloss'],
   img: 'images/Smooth_Closed-Up_1.jpg',
   specs:[{l:'Finish',v:'Gloss'},{l:'Surface',v:'Smooth / Flat'},{l:'Material',v:'Cultured Marble'},{l:'Thickness',v:'1/4"'},{l:'Height',v:'Up to 96"'},{l:'Best For',v:'Minimalist Design'}]},
];

const pans = [
  {id:'cd', name:'Center Standard Drain', desc:'Most common layout.', tags:['Custom Sizes'],
   img:BASE+'Center-Standard-Drain_SW_1.png',
   gallery:[BASE+'Center-Standard-Drain_SW_2.png'],
   specs:[{l:'Drain',v:'Center'},{l:'Sizes',v:'Standard + Custom'},{l:'Material',v:'Cultured Marble'},{l:'ADA',v:'No'},{l:'Threshold',v:'4" Standard'},{l:'Best For',v:'Residential / Hotel'}]},
  {id:'tr', name:'Trench Drain', desc:'Linear drainage, sleek modern look.', tags:['Hotel Spec'],
   img:BASE+'Trench-Drain_Rejilla_SW_1.png',
   specs:[{l:'Drain',v:'Linear / Trench'},{l:'Position',v:'Wall Edge'},{l:'Material',v:'Cultured Marble'},{l:'ADA',v:'Optional'},{l:'Threshold',v:'Low Profile'},{l:'Best For',v:'Contemporary / Upscale'}]},
  {id:'rollin', name:'Roll-In Trench Drain', desc:'Barrier-free, assisted living.', tags:['ADA'],
   img:BASE+'Roll-In-Trench-Drain_Rejilla_SW_1.png',
   gallery:[BASE+'Roll-In-Trench-Drain_Rejilla_SW_2.png'],
   specs:[{l:'Drain',v:'Linear'},{l:'Threshold',v:'Zero / Barrier-Free'},{l:'Material',v:'Cultured Marble'},{l:'ADA',v:'Yes — Title III'},{l:'Best For',v:'Healthcare / Senior Living'},{l:'Cert',v:'ADA Compliant'}]},
  {id:'ada', name:'ADA Shower Pan', desc:'Meets ADA accessibility standards.', tags:['ADA Compliant'],
   img:BASE+'ADA_SW_2.png',
   gallery:[BASE+'ADA_SW_1.png'],
   specs:[{l:'Drain',v:'Center or Linear'},{l:'Threshold',v:'Zero Entry'},{l:'Material',v:'Cultured Marble'},{l:'ADA',v:'Yes — Title III'},{l:'Sizes',v:'36"×36" to 60"×36"'},{l:'Best For',v:'Commercial / Healthcare'}]},
  {id:'cr', name:'Corner Drain', desc:'Angled drain for corner showers.', tags:['Standard'],
   img:BASE+'Corner-Drain_SW_1.png',
   gallery:[BASE+'Corner-Drain_SW_2.png'],
   specs:[{l:'Drain',v:'Corner'},{l:'Shape',v:'Corner / Neo-Angle'},{l:'Material',v:'Cultured Marble'},{l:'ADA',v:'No'},{l:'Best For',v:'Corner Showers'},{l:'Finish',v:'Matching'}]},
  {id:'rv', name:'Reversible Drain', desc:'Flexible drain position options.', tags:['Standard'],
   img:BASE+'Reversible-Drain_SW_1.png',
   specs:[{l:'Drain',v:'Reversible L/R'},{l:'Flexibility',v:'Left or Right'},{l:'Material',v:'Cultured Marble'},{l:'ADA',v:'No'},{l:'Best For',v:'Tight Layouts'},{l:'Finish',v:'Matching'}]},
  {id:'ne', name:'Corner Neo Drain', desc:'Compact neo-angle with corner drain.', tags:['Standard'],
   img:BASE+'Corner-Neo-Drain_SW_1.png',
   specs:[{l:'Drain',v:'Corner'},{l:'Shape',v:'Neo-Angle'},{l:'Material',v:'Cultured Marble'},{l:'ADA',v:'No'},{l:'Best For',v:'Neo-Angle Showers'},{l:'Finish',v:'Matching'}]},
  {id:'cu', name:'Curve Drain Pan', desc:'Smooth curved design, elegant entry.', tags:['Standard'],
   img:BASE+'Curve-Drain_SW_1.png',
   gallery:[BASE+'Curve-Drain_SW_2.png'],
   specs:[{l:'Drain',v:'Center'},{l:'Entry',v:'Curved / Rounded'},{l:'Material',v:'Cultured Marble'},{l:'ADA',v:'No'},{l:'Best For',v:'Curved Showers'},{l:'Finish',v:'Matching'}]},
  {id:'custom', name:'Custom Pan', desc:'Tailored to your exact specs.', tags:['Made to Order'],
   img:BASE+'Custom_SW_1-2.png',
   gallery:[BASE+'Custom_SW_2.png'],
   specs:[{l:'Size',v:'Any Specification'},{l:'Lead Time',v:'2–3 Weeks'},{l:'Material',v:'Cultured Marble'},{l:'Drain',v:'Any Position'},{l:'ADA',v:'Available'},{l:'Best For',v:'Renovation / Custom Build'}]},
];

const accessories = [
  {id:'niche', name:'Recessed Niche (NF)', desc:'Built-in shelf, seamless look.', tags:['Multiple Sizes'],
   img:BASE+'Niche_SW_1.png',gallery:[BASE+'Niche_SW_2.png'],
   specs:[{l:'Sizes',v:'S / M / L'},{l:'Depth',v:'3½"'},{l:'Material',v:'Cultured Marble'},{l:'Mount',v:'Recessed In-Wall'},{l:'Finish',v:'Matches Surround'},{l:'Best For',v:'All Installations'}]},
  {id:'cornerniche', name:'Corner Niche (NI)', desc:'Space-saving corner storage.', tags:['Multiple Sizes'],
   img:BASE+'Corner-Niche_SW_1.png',gallery:[BASE+'Corner-Niche_SW_2.png'],
   specs:[{l:'Shape',v:'Corner'},{l:'Material',v:'Cultured Marble'},{l:'Mount',v:'Corner Recessed'},{l:'Finish',v:'Matches Surround'},{l:'Sizes',v:'Standard'},{l:'Best For',v:'All Installations'}]},
  {id:'cm', name:'Corner Mount Soap Dish (CM)', desc:'Durable soap holder.', tags:['Standard'],
   img:BASE+'Corner-Mount-Soap-Dish_SW_1.png',gallery:[BASE+'Corner-Mount-Soap-Dish_SW_2.png'],
   specs:[{l:'Mount',v:'Corner'},{l:'Material',v:'Cultured Marble'},{l:'Drain',v:'Slotted'},{l:'Finish',v:'Matches Surround'},{l:'Adhesive',v:'Included'},{l:'Best For',v:'All Showers'}]},
  {id:'hd', name:'Shampoo Holder (HD)', desc:'Wall-mounted product organizer.', tags:['Standard'],
   img:BASE+'Shampoo-Holder_SW_1.png',gallery:[BASE+'Shampoo-Holder_SW_2.png'],
   specs:[{l:'Mount',v:'Wall'},{l:'Material',v:'Cultured Marble'},{l:'Drain',v:'Slotted'},{l:'Finish',v:'Matches Surround'},{l:'Capacity',v:'Large'},{l:'Best For',v:'All Showers'}]},
  {id:'trim', name:'Trim Strip', desc:'Polished edge finish.', tags:['Standard'],
   img:BASE+'Trim-Strip_SW_3-1.png',gallery:[BASE+'Trim-Strip_SW_2-1.png'],
   specs:[{l:'Profiles',v:'L / J / T / Cove'},{l:'Material',v:'PVC / Aluminum'},{l:'Length',v:"8' Standard"},{l:'Colors',v:'Matches All Series'},{l:'Finish',v:'Matte / Gloss'},{l:'Best For',v:'All Installations'}]},
  {id:'rl', name:'Right / Left Footrest', desc:'Fold-down or fixed, ADA option.', tags:['ADA Option'],
   img:BASE+'R-and-L-Footrest_SW_1.png',gallery:[BASE+'RL_Footrest.png'],
   specs:[{l:'Types',v:'Fixed / Fold-Down'},{l:'Material',v:'Stone + Steel'},{l:'Capacity',v:'250 lbs'},{l:'ADA',v:'Available'},{l:'Mount',v:'Wall'},{l:'Best For',v:'ADA / Healthcare'}]},
  {id:'footrest66', name:'6"×6" Footrest', desc:'Slip-resistant built-in footrest.', tags:['ADA Option'],
   img:BASE+'6x6-Footrest_SW_2.png',gallery:[BASE+'6x6-Footrest_SW_4.png'],
   specs:[{l:'Size',v:'6"×6"'},{l:'Material',v:'Cultured Marble'},{l:'Surface',v:'Slip-Resistant'},{l:'ADA',v:'Available'},{l:'Mount',v:'Wall'},{l:'Best For',v:'All Showers'}]},
  {id:'ledge', name:'Accessory Ledge', desc:'Wide ledge for multiple products.', tags:['Standard'],
   img:BASE+'Accessory-Ledge_SW_1.png',gallery:[BASE+'accessorie-ledge.png'],
   specs:[{l:'Size',v:'Wide Format'},{l:'Material',v:'Cultured Marble'},{l:'Mount',v:'Wall Recessed'},{l:'Finish',v:'Matches Surround'},{l:'Drain',v:'Slotted'},{l:'Best For',v:'All Showers'}]},
  {id:'wm', name:'Wall-Mounted Soap Dish (WM)', desc:'Clean wall-mount option.', tags:['Standard'],
   img:BASE+'Wall-Mounted-Soap-Dish_SW_1.png',gallery:[BASE+'well-mounted.png'],
   specs:[{l:'Mount',v:'Wall'},{l:'Material',v:'Cultured Marble'},{l:'Drain',v:'Slotted'},{l:'Finish',v:'Matches Surround'},{l:'Adhesive',v:'Included'},{l:'Best For',v:'All Showers'}]},
  {id:'rs', name:'Recessed Soap Dish (RS)', desc:'Integrated flush design.', tags:['Standard'],
   img:BASE+'Recessed-Soap-dish_SW_1.png',gallery:[BASE+'Recessed-Soap-dish_SW_2.png'],
   specs:[{l:'Mount',v:'Recessed'},{l:'Material',v:'Cultured Marble'},{l:'Drain',v:'Slotted'},{l:'Finish',v:'Matches Surround'},{l:'Depth',v:'Flush'},{l:'Best For',v:'All Showers'}]},
  {id:'lc', name:'Large Corner Holder (LC)', desc:'Extra capacity corner storage.', tags:['Standard'],
   img:BASE+'Large-Corner-Holder_SW_1.png',gallery:[BASE+'Large-Corner-Holder_SW_2.png'],
   specs:[{l:'Mount',v:'Corner'},{l:'Material',v:'Cultured Marble'},{l:'Capacity',v:'Large'},{l:'Drain',v:'Slotted'},{l:'Finish',v:'Matches Surround'},{l:'Best For',v:'All Showers'}]},
  {id:'as', name:'Angled Soap Dish (AS)', desc:'Angled surface prevents pooling.', tags:['Standard'],
   img:BASE+'Angled-soap-dish-15-x-3_SW_1.png',gallery:[BASE+'angled_soap_dish.png'],
   specs:[{l:'Angle',v:'Slanted Drain'},{l:'Material',v:'Cultured Marble'},{l:'Size',v:'15"×3"'},{l:'Finish',v:'Matches Surround'},{l:'Drain',v:'Self-Draining'},{l:'Best For',v:'All Showers'}]},
  {id:'shelf66', name:'6"×6" Soap Shelf', desc:'Compact shelf for essentials.', tags:['Standard'],
   img:BASE+'6x6-Soap-Shelf_SW_1.png',gallery:[BASE+'6x6SoapShelf.png'],
   specs:[{l:'Size',v:'6"×6"'},{l:'Material',v:'Cultured Marble'},{l:'Mount',v:'Wall'},{l:'Finish',v:'Matches Surround'},{l:'Drain',v:'Slotted'},{l:'Best For',v:'All Showers'}]},
  {id:'shelf77', name:'7"×7" Soap Shelf', desc:'Slightly larger, more capacity.', tags:['Standard'],
   img:BASE+'7x7-Soap-Shelf_SW_1.png',gallery:[BASE+'7x7-Soap-Shelf_SW_2.png'],
   specs:[{l:'Size',v:'7"×7"'},{l:'Material',v:'Cultured Marble'},{l:'Mount',v:'Wall'},{l:'Finish',v:'Matches Surround'},{l:'Drain',v:'Slotted'},{l:'Best For',v:'All Showers'}]},
  {id:'ce', name:'Center Mount Soap Dish (CE)', desc:'Centered wall mount design.', tags:['Standard'],
   img:BASE+'Center-Mount-Soap-Dish_SW_2.png',gallery:[BASE+'Center-Mount-Soap-Dish_SW_3.png'],
   specs:[{l:'Mount',v:'Wall Center'},{l:'Material',v:'Cultured Marble'},{l:'Drain',v:'Slotted'},{l:'Finish',v:'Matches Surround'},{l:'Adhesive',v:'Included'},{l:'Best For',v:'All Showers'}]},
  {id:'cornertrim', name:'Corner Trim (CT)', desc:'Clean corner edge finish.', tags:['Standard'],
   img:'images/Corner-Trim-Strip_SW_3.png',
   gallery:['images/Corner-Trim-Strip_SW_1.png'],
   specs:[{l:'Profile',v:'Corner'},{l:'Material',v:'PVC / Marble'},{l:'Length',v:"8' Standard"},{l:'Colors',v:'Matches All'},{l:'Finish',v:'Matte / Gloss'},{l:'Best For',v:'All Installations'}]},
  {id:'footrest77', name:'7"×7" Footrest', desc:'Larger footrest, extra comfort.', tags:['ADA Option'],
   img:BASE+'7x7-Footrest_SW_2.png',gallery:[BASE+'7x7footrest.png'],
   specs:[{l:'Size',v:'7"×7"'},{l:'Material',v:'Cultured Marble'},{l:'Surface',v:'Slip-Resistant'},{l:'ADA',v:'Available'},{l:'Mount',v:'Wall'},{l:'Best For',v:'All Showers'}]},
];

const tubs = [
  {id:'bt', name:'Free Standing Tub (BT)', desc:'Freestanding tub for premium suites.', tags:['Custom'],
   img:BASE+'Tina_SW_1.png',gallery:[BASE+'Tina_SW_3.png',BASE+'Tina_SW_2.png'],
   specs:[{l:'Type',v:'Free Standing'},{l:'Material',v:'Cultured Marble'},{l:'Finish',v:'Gloss'},{l:'Installation',v:'Floor Mount'},{l:'Custom',v:'Available'},{l:'Best For',v:'Premium Suites'}]},
];

// All products for modal lookup
const allProducts = {};
[...surrounds,...pans,...accessories,...tubs].forEach(p=>allProducts[p.id]=p);

function tagClass(t){
  if(t==='ADA'||t==='ADA Compliant'||t==='ADA Option') return 'ada';
  if(t==='Made to Order'||t==='Custom') return 'custom';
  return '';
}

function buildCard(p){
  const tagsHtml = p.tags.map(t=>`<span class="prod-tag ${tagClass(t)}">${t}</span>`).join('');
  return `<div class="prod-card" onclick="openModal('${p.id}')">
    <div class="prod-card-img"><img src="${p.img}" alt="${p.name}" loading="lazy"/></div>
    <div class="prod-card-body">
      <div class="prod-card-name">${p.name}</div>
      <div class="prod-card-desc">${p.desc}</div>
      <div class="prod-card-tags">${tagsHtml}</div>
    </div>
  </div>`;
}

// ── CATEGORY PAGE RENDERING ──
const CATS = {
  surrounds:{label:'Tub & Shower Surrounds', list:surrounds, gridClass:''},
  pans:{label:'Shower Pans', list:pans, gridClass:'pans-grid'},
  accessories:{label:'Accessories', list:accessories, gridClass:'acc-grid'},
  tub:{label:'Free Standing Tub', list:tubs, gridClass:'', cols:3},
};
function renderCategoryGrid(cat){
  const c = CATS[cat]; if(!c) return;
  const grid = document.getElementById('grid');
  grid.className = 'products-grid' + (c.gridClass ? ' '+c.gridClass : '');
  if(c.cols) grid.style.gridTemplateColumns = `repeat(${c.cols},1fr)`;
  grid.innerHTML = c.list.map(buildCard).join('');
  const titleEl = document.getElementById('cat-title');
  if(titleEl) titleEl.textContent = c.label;
  const countEl = document.getElementById('cat-count');
  if(countEl) countEl.textContent = c.list.length + (c.list.length===1?' Product':' Products');
}

// ── VIEWER STATE ──
const DEFAULT_SCALE=1;
let viewerScale=DEFAULT_SCALE, viewerX=0, viewerY=0;
let isDragging=false, dragSX=0, dragSY=0, dragOX=0, dragOY=0;

function applyTransform(){
  document.getElementById('modal-img').style.transform=`translate(${viewerX}px,${viewerY}px) scale(${viewerScale})`;
}
function zoomIn(){viewerScale=Math.min(5,viewerScale+0.3);applyTransform();}
function zoomOut(){viewerScale=Math.max(0.7,viewerScale-0.3);if(viewerScale<=1){viewerX=0;viewerY=0;}applyTransform();}
function resetZoom(){viewerScale=DEFAULT_SCALE;viewerX=0;viewerY=0;applyTransform();}

// Wheel zoom + drag-to-pan + click-to-lightbox
let significantDrag=false;
(function(){
  const v=document.getElementById('modal-viewer');
  v.addEventListener('wheel',e=>{
    e.preventDefault();
    const d=e.deltaY<0?0.2:-0.2;
    viewerScale=Math.min(5,Math.max(0.7,viewerScale+d));
    if(viewerScale<=1){viewerX=0;viewerY=0;}
    applyTransform();
  },{passive:false});
  v.addEventListener('mousedown',e=>{
    if(e.button!==0)return;
    significantDrag=false;
    isDragging=true; dragSX=e.clientX; dragSY=e.clientY; dragOX=viewerX; dragOY=viewerY;
    if(viewerScale>1) v.classList.add('dragging');
  });
  window.addEventListener('mousemove',e=>{
    if(!isDragging)return;
    const dx=e.clientX-dragSX, dy=e.clientY-dragSY;
    if(Math.abs(dx)>5||Math.abs(dy)>5) significantDrag=true;
    if(viewerScale>1){viewerX=dragOX+dx; viewerY=dragOY+dy; applyTransform();}
  });
  window.addEventListener('mouseup',e=>{
    if(!isDragging)return;
    isDragging=false;
    document.getElementById('modal-viewer').classList.remove('dragging');
    if(!significantDrag && !e.target.closest('.viewer-btn,.modal-close')){
      const r=v.getBoundingClientRect();
      if(e.clientX>=r.left&&e.clientX<=r.right&&e.clientY>=r.top&&e.clientY<=r.bottom){
        openLightbox(document.getElementById('modal-img').src);
      }
    }
    significantDrag=false;
  });
})();

function openLightbox(src){
  const lb=document.getElementById('lightbox');
  const img=document.getElementById('lightbox-img');
  img.src=src;
  lbScale=1; lbX=0; lbY=0; applyLbTransform();
  lb.style.display='flex';
}
function closeLightbox(){document.getElementById('lightbox').style.display='none';}

// ── LIGHTBOX ZOOM + DRAG-TO-PAN ──
let lbScale=1, lbX=0, lbY=0, lbDragging=false, lbSX=0, lbSY=0, lbOX=0, lbOY=0, lbMoved=false;
function applyLbTransform(){
  const img=document.getElementById('lightbox-img');
  img.style.transform=`translate(${lbX}px,${lbY}px) scale(${lbScale})`;
  img.style.cursor=lbScale>1?'grab':'zoom-in';
}
(function(){
  const img=document.getElementById('lightbox-img');
  img.addEventListener('wheel',e=>{
    e.preventDefault(); e.stopPropagation();
    const d=e.deltaY<0?0.25:-0.25;
    lbScale=Math.min(5,Math.max(1,lbScale+d));
    if(lbScale<=1){lbX=0;lbY=0;}
    applyLbTransform();
  },{passive:false});
  img.addEventListener('mousedown',e=>{
    e.preventDefault(); e.stopPropagation();
    lbMoved=false;
    lbDragging=true; lbSX=e.clientX; lbSY=e.clientY; lbOX=lbX; lbOY=lbY;
    img.style.cursor='grabbing';
  });
  window.addEventListener('mousemove',e=>{
    if(!lbDragging)return;
    const dx=e.clientX-lbSX, dy=e.clientY-lbSY;
    if(Math.abs(dx)>4||Math.abs(dy)>4) lbMoved=true;
    if(lbScale>1){lbX=lbOX+dx; lbY=lbOY+dy; applyLbTransform();}
  });
  window.addEventListener('mouseup',()=>{
    if(!lbDragging)return;
    lbDragging=false;
    applyLbTransform();
  });
  img.addEventListener('click',e=>{
    e.stopPropagation();
    if(lbMoved){lbMoved=false; return;}
    if(lbScale===1){lbScale=2.5; applyLbTransform();}
    else{lbScale=1; lbX=0; lbY=0; applyLbTransform();}
  });
  img.addEventListener('dblclick',e=>{e.stopPropagation();});
})();

function setThumbActive(el){
  document.querySelectorAll('.modal-thumb').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.combo-item').forEach(c=>c.classList.remove('active'));
  if(el) el.classList.add('active');
}

const COMBO_PANS=[
  {name:'Center Drain', img:BASE+'Center-Standard-Drain_SW_1.png'},
  {name:'Trench Drain',  img:BASE+'Trench-Drain_Rejilla_SW_1.png'},
  {name:'ADA Pan',       img:BASE+'ADA_SW_2.png'},
  {name:'Custom Pan',    img:BASE+'Custom_SW_1-2.png'},
];

function openModal(id){
  const p=allProducts[id]; if(!p) return;
  resetZoom();

  document.getElementById('modal-img').src=p.img;
  document.getElementById('modal-cat').textContent='Shower Walls';
  document.getElementById('modal-title').textContent=p.name;
  document.getElementById('modal-desc').textContent=p.desc+' — Engineered from high-quality cultured marble, built for durability and easy installation in commercial and residential projects.';
  document.getElementById('modal-specs').innerHTML=p.specs.map(s=>`<div class="modal-spec"><div class="modal-spec-label">${s.l}</div><div class="modal-spec-value">${s.v}</div></div>`).join('');

  // Thumbnail strip — deduplicated
  const allImgs=[p.img,...(p.gallery||[])].filter((v,i,a)=>a.indexOf(v)===i);
  const strip=document.getElementById('modal-thumbstrip');
  strip.innerHTML=allImgs.map((src,i)=>`<div class="modal-thumb${i===0?' active':''}" data-src="${src}"><img src="${src}" alt="" loading="lazy"/></div>`).join('');
  strip.querySelectorAll('.modal-thumb').forEach(thumb=>{
    thumb.addEventListener('click',function(){
      document.getElementById('modal-img').src=this.dataset.src;
      resetZoom(); setThumbActive(this);
    });
  });

  // Combo section — shown only for surrounds
  const isSurround=surrounds.some(s=>s.id===id);
  const comboEl=document.getElementById('modal-combo');
  if(isSurround){
    comboEl.style.display='';
    document.getElementById('modal-combo-grid').innerHTML=COMBO_PANS.map(pan=>
      `<div class="combo-item" data-src="${pan.img}"><img src="${pan.img}" alt="${pan.name}" loading="lazy"/><span>${pan.name}</span></div>`
    ).join('');
    document.querySelectorAll('.combo-item').forEach(item=>{
      item.addEventListener('click',function(){
        document.getElementById('modal-img').src=this.dataset.src;
        resetZoom(); setThumbActive(null); this.classList.add('active');
      });
    });
  } else {
    comboEl.style.display='none';
  }

  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow='hidden';
}

function closeModal(){
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow='';
  resetZoom();
}
function closeModalOutside(e){if(e.target===document.getElementById('modal-overlay'))closeModal();}
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){
    if(document.getElementById('lightbox').style.display!=='none') closeLightbox();
    else closeModal();
  }
});
document.querySelectorAll('#nav-links a').forEach(a=>a.addEventListener('click',()=>document.getElementById('nav-links').classList.remove('open')));
