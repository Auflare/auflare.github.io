function setting(type) {
    document.getElementById('vis_seg').checked = false;
    document.getElementById('vis_image').checked = false;
    document.getElementById('enable_text').checked = false;
    document.getElementById('vis_edge').checked = false;
    document.getElementById('enable_seg').checked = false;
    document.getElementById('enable_edge').checked = false;
    if (type == 'text') {
        document.getElementById('vis_seg').checked = true;
        document.getElementById('vis_image').checked = true;
        document.getElementById('enable_text').checked = true;
        document.getElementById('sketch-container').style.display = "none"
        document.getElementById('text_input').style.display = "block"
    }
    if (type == 'sketch') {
        document.getElementById('text_input').style.display = "none"
        document.getElementById('sketch-container').style.display = "block"
        document.getElementById('vis_edge').checked = true;
        document.getElementById('enable_seg').checked = true;
        document.getElementById('enable_edge').checked = true;        
    }
}
function reset() {
    Menu.open({title: 'Discarding Canvas', content: `Creating a new sketch will discard the current one.
        <div style="margin: 1rem 0 -1rem 0">
            <button style="margin-right: 0.5rem; color: var(--subtext); font-weight: 500; background: var(--theme-red)" onclick="document.getElementById('new').click(); Menu.close() ">Discard</button>  
            <button style="color: var(--subtext); font-weight: 500; background: var(--shade-3)" onclick="Menu.close()">Cancel</button>  
        </div>`
    }, false)
}

document.body.innerHTML += `
<div class="hidden">
    <button style="display: none" title="eyedropper" id="eyedropper" class="btn eyedropper">Eyedropper</button>
    <button style="display: none" title="real image eraser" id="image_eraser" class="btn image_eraser"></button>
    <button style="display: none" title="real image magic wand eraser" id="inpaint" class="btn magic_wand"></button>
    <button style="display: none" title="compute segmentation from real image" id="get_segment" class="btn get_segment">Real Image</button>
    <button style="display: none" title="compute sketch from real image" id="get_sketch" class="btn get_sketch">Thing?</button>
    <canvas style="display: none" id="custom"></canvas>
    <button style="display: none" id="customBtn" class="btn"></button>

    <h4>Fill/brush color: </h4>
    <canvas id="brush_color"></canvas>
    <h4>Brush shape: </h4>
    <button id="brush_circle" class="btn brush_circle"></button>
    <button id="brush_square" class="btn brush_square"></button>
    <button id="brush_diamond" class="btn brush_diamond"></button>
    <canvas style="display: none" id="viewport_seg"></canvas>
    <canvas style="display: none" id="viewport_edge"></canvas>
    <canvas style="display: none" id="viewport_real"></canvas>
    <input checked style="display: none" type="checkbox" id="myCheck" onclick="toggleCheckbox()"> 
</div>`

var _0xd94624 = _0x771d;
(function(_0x25dc29, _0x3a0e43) {
    var _0x42302c = _0x771d,
        _0x23b087 = _0x25dc29();
    while (!![]) {
        try {
            var _0x29ce2a = parseInt(_0x42302c(0x262)) / 0x1 * (parseInt(_0x42302c(0x124)) / 0x2) + -parseInt(_0x42302c(0x2b4)) / 0x3 * (parseInt(_0x42302c(0x1fd)) / 0x4) + -parseInt(_0x42302c(0x18d)) / 0x5 + -parseInt(_0x42302c(0x2c0)) / 0x6 + -parseInt(_0x42302c(0x2b9)) / 0x7 + -parseInt(_0x42302c(0x24e)) / 0x8 + parseInt(_0x42302c(0x2db)) / 0x9 * (parseInt(_0x42302c(0x226)) / 0xa);
            if (_0x29ce2a === _0x3a0e43) break;
            else _0x23b087['push'](_0x23b087['shift']());
        } catch (_0x1c1fb6) {
            _0x23b087['push'](_0x23b087['shift']());
        }
    }
}(_0x3fe6, 0x5bd77));
var isFirefox = typeof InstallTrigger !== _0xd94624(0x2e9),
    isChrome = !![],
    colors = [_0xd94624(0x317), _0xd94624(0x221), '#0275b8', _0xd94624(0x1ea), _0xd94624(0x280), _0xd94624(0x301), _0xd94624(0x166), _0xd94624(0x30d), '#0809b6', '#09d3cf', _0xd94624(0x225), _0xd94624(0x164), '#0c246f', _0xd94624(0x1b8), _0xd94624(0x143), _0xd94624(0x133), _0xd94624(0x20d), '#118c76', _0xd94624(0x288), '#13c1d8', _0xd94624(0x2fe), _0xd94624(0x240), '#165743', _0xd94624(0x2df), _0xd94624(0x248), _0xd94624(0x2a3), _0xd94624(0x2ce), _0xd94624(0x202), '#1c4de6', '#1d4823', _0xd94624(0x18f), _0xd94624(0x22f), '#2073bd', _0xd94624(0x12c), _0xd94624(0x300), _0xd94624(0x189), _0xd94624(0x277), _0xd94624(0x1d8), _0xd94624(0x1bc), _0xd94624(0x265), _0xd94624(0x21d), _0xd94624(0x163), '#2ad8eb', _0xd94624(0x24f), _0xd94624(0x270), _0xd94624(0x224), '#2e936f', _0xd94624(0x242), '#308e02', _0xd94624(0x16b), _0xd94624(0x1d9), _0xd94624(0x251), _0xd94624(0x1fe), '#35b935', '#367f33', _0xd94624(0x186), _0xd94624(0x158), '#39cab5', _0xd94624(0x28b), _0xd94624(0x2cb), '#3ca323', '#3dfe27', _0xd94624(0x27b), _0xd94624(0x15f), _0xd94624(0x30b), _0xd94624(0x1b3), _0xd94624(0x27f), _0xd94624(0x2c5), _0xd94624(0x271), _0xd94624(0x2f0), _0xd94624(0x291), _0xd94624(0x215), _0xd94624(0x25e), _0xd94624(0x19a), _0xd94624(0x17b), '#4b111b', _0xd94624(0x2c8), _0xd94624(0x211), '#4e69a7', _0xd94624(0x239), _0xd94624(0x31e), _0xd94624(0x157), _0xd94624(0x303), _0xd94624(0x16a), _0xd94624(0x28c), _0xd94624(0x21a), _0xd94624(0x137), '#573985', _0xd94624(0x1f0), _0xd94624(0x2ba), '#5a7724', '#5b0b00', _0xd94624(0x210), '#5d5222', _0xd94624(0x154), _0xd94624(0x31b), _0xd94624(0x24a), '#6163fe', _0xd94624(0x29f), '#638cbe', _0xd94624(0x13c), _0xd94624(0x181), '#665481', '#67cbd1', '#684470', '#696969', _0xd94624(0x14e), _0xd94624(0x1a1), '#6c7fa8', _0xd94624(0x282), _0xd94624(0x170), _0xd94624(0x20b), _0xd94624(0x218), _0xd94624(0x122), _0xd94624(0x304), _0xd94624(0x25f), _0xd94624(0x289), _0xd94624(0x1e4), _0xd94624(0x2c1), '#77ba1d', _0xd94624(0x173), '#79cf21', _0xd94624(0x178), _0xd94624(0x165), '#7c32c8', _0xd94624(0x1c7), _0xd94624(0x1a9), _0xd94624(0x299), _0xd94624(0x1e7), _0xd94624(0x261), _0xd94624(0x1cc), _0xd94624(0x203), _0xd94624(0x168), _0xd94624(0x12a), _0xd94624(0x1f3), _0xd94624(0x2ed), _0xd94624(0x1b6), _0xd94624(0x184), _0xd94624(0x2a8), _0xd94624(0x313), _0xd94624(0x292), _0xd94624(0x123), _0xd94624(0x2a7), _0xd94624(0x171), '#90cdc6', _0xd94624(0x14c), '#92e712', _0xd94624(0x27c), _0xd94624(0x187), '#956432', _0xd94624(0x26b), _0xd94624(0x2b7), '#98725d', _0xd94624(0x1c3), _0xd94624(0x25b), _0xd94624(0x237), '#9ceedd', _0xd94624(0x20e), _0xd94624(0x191), _0xd94624(0x1a3), _0xd94624(0x2dd), _0xd94624(0x149), _0xd94624(0x2c6), '#a3ded1', _0xd94624(0x167), _0xd94624(0x2b1), _0xd94624(0x22d), _0xd94624(0x217), _0xd94624(0x2d2), _0xd94624(0x161), _0xd94624(0x231), _0xd94624(0x17c), _0xd94624(0x247), '#ad0e18', _0xd94624(0x297), '#af3abf', '#b0c1c3', '#b1c8ff', _0xd94624(0x267), _0xd94624(0x1a7), _0xd94624(0x13f), _0xd94624(0x130)],
    labels = [_0xd94624(0x1ee), _0xd94624(0x315), _0xd94624(0x2ae), _0xd94624(0x2d6), 'lbl-airplane', _0xd94624(0x134), _0xd94624(0x229), _0xd94624(0x2b2), _0xd94624(0x162), _0xd94624(0x252), 'lbl-fire-hydrant', _0xd94624(0x26e), _0xd94624(0x2a4), 'lbl-parking-meter', _0xd94624(0x1d1), _0xd94624(0x13a), _0xd94624(0x1f5), _0xd94624(0x2a6), _0xd94624(0x21f), _0xd94624(0x1bf), _0xd94624(0x236), _0xd94624(0x1c0), _0xd94624(0x193), 'lbl-zebra', 'lbl-giraffe', 'lbl-hat', 'lbl-backpack', _0xd94624(0x259), _0xd94624(0x135), _0xd94624(0x23b), _0xd94624(0x19c), _0xd94624(0x174), _0xd94624(0x26f), _0xd94624(0x2b0), _0xd94624(0x16f), _0xd94624(0x136), _0xd94624(0x153), _0xd94624(0x307), 'lbl-baseball-bat', 'lbl-baseball-glove', _0xd94624(0x264), _0xd94624(0x2aa), 'lbl-tennis-racket', _0xd94624(0x278), _0xd94624(0x14f), _0xd94624(0x250), _0xd94624(0x1d3), _0xd94624(0x257), 'lbl-knife', _0xd94624(0x141), _0xd94624(0x177), 'lbl-banana', 'lbl-apple', _0xd94624(0x2be), _0xd94624(0x23d), _0xd94624(0x31d), _0xd94624(0x29a), _0xd94624(0x12d), 'lbl-pizza', _0xd94624(0x222), 'lbl-cake', _0xd94624(0x17a), _0xd94624(0x1ec), _0xd94624(0x197), 'lbl-bed', _0xd94624(0x2c9), _0xd94624(0x22a), 'lbl-window', _0xd94624(0x305), _0xd94624(0x1f8), 'lbl-door', _0xd94624(0x2eb), _0xd94624(0x14a), 'lbl-mouse', _0xd94624(0x214), 'lbl-keyboard', _0xd94624(0x306), _0xd94624(0x285), _0xd94624(0x1c6), _0xd94624(0x2d7), _0xd94624(0x1d5), _0xd94624(0x241), _0xd94624(0x208), _0xd94624(0x1ff), _0xd94624(0x2ab), _0xd94624(0x169), _0xd94624(0x129), _0xd94624(0x19b), _0xd94624(0x28f), 'lbl-toothbrush', _0xd94624(0x2ef), _0xd94624(0x146), _0xd94624(0x2d8), _0xd94624(0x2bd), _0xd94624(0x21e), _0xd94624(0x1df), _0xd94624(0x15c), _0xd94624(0x31a), 'lbl-cage', _0xd94624(0x2e7), _0xd94624(0x19d), _0xd94624(0x22c), _0xd94624(0x2ec), 'lbl-cloth', 'lbl-clothes', 'lbl-clouds', _0xd94624(0x2a1), _0xd94624(0x1e1), _0xd94624(0x2bf), 'lbl-desk-stuff', _0xd94624(0x120), _0xd94624(0x1a4), _0xd94624(0x15b), _0xd94624(0x1ac), _0xd94624(0x180), _0xd94624(0x22b), _0xd94624(0x2da), _0xd94624(0x2c3), _0xd94624(0x150), _0xd94624(0x233), _0xd94624(0x30f), _0xd94624(0x195), _0xd94624(0x216), _0xd94624(0x25a), _0xd94624(0x286), _0xd94624(0x1af), _0xd94624(0x1b1), _0xd94624(0x28d), _0xd94624(0x1cb), 'lbl-light', _0xd94624(0x213), _0xd94624(0x1ef), _0xd94624(0x311), _0xd94624(0x1ca), _0xd94624(0x30a), _0xd94624(0x308), 'lbl-napkin', _0xd94624(0x2d0), _0xd94624(0x314), 'lbl-pavement', _0xd94624(0x18b), _0xd94624(0x17e), _0xd94624(0x2e4), _0xd94624(0x26d), _0xd94624(0x260), _0xd94624(0x274), _0xd94624(0x2cc), _0xd94624(0x207), _0xd94624(0x13b), _0xd94624(0x2cf), _0xd94624(0x1e0), 'lbl-rug', 'lbl-salad', _0xd94624(0x1c5), _0xd94624(0x246), 'lbl-shelf', _0xd94624(0x2b5), _0xd94624(0x1fb), _0xd94624(0x1bd), 'lbl-solid-other', _0xd94624(0x2fd), _0xd94624(0x279), _0xd94624(0x127), _0xd94624(0x2d1), _0xd94624(0x1a5), _0xd94624(0x2ac), _0xd94624(0x160), 'lbl-towel', 'lbl-tree', 'lbl-vegetable', _0xd94624(0x29b), _0xd94624(0x2f2), _0xd94624(0x1ab), _0xd94624(0x1b9), _0xd94624(0x182), 'lbl-wall-tile', 'lbl-wall-wood', _0xd94624(0x18c), _0xd94624(0x220), _0xd94624(0x188), _0xd94624(0x298), _0xd94624(0x1b2)],
    cat_labels = [_0xd94624(0x275), _0xd94624(0x2b3), 'cat-landscape', _0xd94624(0x138)],
    cat_sublabels = [
        [0x5f, 0x71, 0x80, 0x90, 0x97, 0xab, 0xaf, 0xb1],
        [0x6f, 0x7d, 0x7e, 0x88, 0x8c, 0x95, 0x9a],
        [0x6a, 0x78, 0x7f, 0x87, 0x94, 0x96, 0x9b, 0x9d, 0x9f, 0xa2, 0xb2],
        [0x61, 0x77, 0x7c, 0xa3, 0xa9, 0xb6]
    ],
    table_str = ['<table>\x20\x20\x20\x20\x20<tr><th><button\x20class=\x22btnclr\x20lbl-bridge\x22>Bridge</button></th></tr>\x20\x20\x20\x20<tr><th><button\x20class=\x22btnclr\x20lbl-fence\x22>Fence</button></th></tr>\x20\x20\x20\x20<tr><th><button\x20class=\x22btnclr\x20lbl-house\x22>House</button></th></tr>\x20\x20\x20\x20<tr><th><button\x20class=\x22btnclr\x20lbl-platform\x22>Platform</button></th></tr>\x20\x20\x20\x20<tr><th><button\x20class=\x22btnclr\x20lbl-roof\x22>Roof</button></th></tr>\x20\x20\x20\x20<tr><th><button\x20class=\x22btnclr\x20lbl-wall-brick\x22>Wall&#8209brick</button></th></tr>\x20\x20\x20\x20<tr><th><button\x20class=\x22btnclr\x20lbl-wall-stone\x22>Wall&#8209stone</button></th></tr>\x20\x20\x20\x20<tr><th><button\x20class=\x22btnclr\x20lbl-wall-wood\x22>Wall&#8209wood</button></th></tr>\x20\x20\x20\x20</tr>\x20\x20\x20\x20</table>', '<table>\x20\x20\x20\x20\x20<tr><th><button\x20class=\x22btnclr\x20lbl-dirt\x22>Dirt</button></th></tr>\x20\x20\x20\x20<tr><th><button\x20class=\x22btnclr\x20lbl-gravel\x22>Gravel</button></th></tr>\x20\x20\x20\x20<tr><th><button\x20class=\x22btnclr\x20lbl-ground-other\x22>Ground&#8209other</button></th></tr>\x20\x20\x20\x20<tr><th><button\x20class=\x22btnclr\x20lbl-mud\x22>Mud</button></th></tr>\x20\x20\x20\x20<tr><th><button\x20class=\x22btnclr\x20lbl-pavement\x22>Pavement</button></th></tr>\x20\x20\x20\x20<tr><th><button\x20class=\x22btnclr\x20lbl-road\x22>Road</button></th></tr>\x20\x20\x20\x20<tr><th><button\x20class=\x22btnclr\x20lbl-sand\x22>Sand</button></th></tr>\x20\x20\x20\x20</tr>\x20\x20\x20\x20</table>', '<table>\x20\x20\x20\x20\x20<tr><th><button\x20class=\x22btnclr\x20lbl-clouds\x22>Clouds</button></th></tr>\x20\x20\x20\x20<tr><th><button\x20class=\x22btnclr\x20lbl-fog\x22>Fog</button></th></tr>\x20\x20\x20\x20<tr><th><button\x20class=\x22btnclr\x20lbl-hill\x22>Hill</button></th></tr>\x20\x20\x20\x20<tr><th><button\x20class=\x22btnclr\x20lbl-mountain\x22>Mountain</button></th></tr>\x20\x20\x20\x20<tr><th><button\x20class=\x22btnclr\x20lbl-river\x22>River</button></th></tr>\x20\x20\x20\x20<tr><th><button\x20class=\x22btnclr\x20lbl-rock\x22>Rock</button></th></tr>\x20\x20\x20\x20<tr><th><button\x20class=\x22btnclr\x20lbl-sea\x22>Sea</button></th></tr>\x20\x20\x20\x20<tr><th><button\x20class=\x22btnclr\x20lbl-sky\x20active\x22>Sky</button></th></tr>\x20\x20\x20\x20<tr><th><button\x20class=\x22btnclr\x20lbl-snow\x22>Snow</button></th></tr>\x20\x20\x20\x20<tr><th><button\x20class=\x22btnclr\x20lbl-stone\x22>Stone</button></th></tr>\x20\x20\x20\x20<tr><th><button\x20class=\x22btnclr\x20lbl-water\x22>Water</button></th></tr>\x20\x20\x20\x20</tr>\x20\x20\x20\x20</table>', _0xd94624(0x28e)],
    current_cat_active = _0xd94624(0x1b5),
    current_cat_active_id = 0x2,
    current_active = _0xd94624(0x2b5),
    current_subcat_active_id = 0x7,
    current_active_id = cat_sublabels[current_cat_active_id][current_subcat_active_id] - 0x1,
    sky_label_id = 0x9d - 0x1,
    sea_label_id = 0x9b - 0x1,
    current_color = colors[current_active_id];

function label_selection() {
    var _0x26df6b = _0xd94624,
        _0x21a0df = document[_0x26df6b(0x24b)](_0x26df6b(0x128)),
        _0x3c9d74 = _0x21a0df['getElementsByClassName']('btnclr');
    for (var _0x46f321 = 0x0; _0x46f321 < _0x3c9d74[_0x26df6b(0x12f)]; _0x46f321++) {
        console[_0x26df6b(0x2f4)](_0x3c9d74['length']), _0x3c9d74[_0x46f321][_0x26df6b(0x209)]('click', function() {
            var _0x119793 = _0x26df6b;
            console[_0x119793(0x2f4)](this[_0x119793(0x1f6)]);
            var _0x5ab561 = document[_0x119793(0x24b)]('palette');
            console['log'](cat_sublabels[current_cat_active_id]['length']);
            var _0x17940d = 0x0;
            for (_0x46f321 = 0x0; _0x46f321 < cat_sublabels[current_cat_active_id][_0x119793(0x12f)]; _0x46f321++) {
                tmp_id = cat_sublabels[current_cat_active_id][_0x46f321] - 0x1, str = labels[tmp_id], console[_0x119793(0x2f4)](str), console[_0x119793(0x2f4)](current_active), str == current_active && (_0x17940d = 0x1);
            }
            console[_0x119793(0x2f4)](_0x17940d);
            if (_0x17940d) {
                var _0x4c53f4 = _0x5ab561[_0x119793(0x219)](current_active);
                _0x4c53f4[0x0][_0x119793(0x1f6)] = _0x4c53f4[0x0]['className']['replace'](_0x119793(0x28a), ''), _0x4c53f4[0x0][_0x119793(0x1d2)][_0x119793(0x2fb)] = _0x119793(0x24c), _0x4c53f4[0x0][_0x119793(0x1d2)][_0x119793(0x273)] = _0x119793(0x2ad);
            }
            this[_0x119793(0x1f6)] += _0x119793(0x28a);
            for (var _0x43fdea = 0x0; _0x43fdea < labels[_0x119793(0x12f)]; _0x43fdea++) {
                this[_0x119793(0x1f6)][_0x119793(0x2ea)](labels[_0x43fdea]) && (this[_0x119793(0x1d2)][_0x119793(0x2fb)] = colors[_0x43fdea], this[_0x119793(0x1d2)]['color'] = _0x119793(0x2c2), current_active = labels[_0x43fdea], current_active_id = _0x43fdea, current_color = colors[current_active_id], brush_color_context[_0x119793(0x256)] = current_color, brush_color_context[_0x119793(0x2f6)](0x0, 0x0, BRUSH_COLOR_SIZE, BRUSH_COLOR_SIZE));
            };
        });
    }
}
label_selection();
var header = document[_0xd94624(0x24b)](_0xd94624(0x1dd)),
    btncat = header['getElementsByClassName'](_0xd94624(0x263));
for (var i = 0x0; i < btncat[_0xd94624(0x12f)]; i++) {
    btncat[i][_0xd94624(0x209)]('click', function() {
        var _0x5f50ac = _0xd94624,
            _0x2bb823 = document[_0x5f50ac(0x24b)](_0x5f50ac(0x1dd)),
            _0x247b6a = _0x2bb823['getElementsByClassName'](current_cat_active);
        _0x247b6a[0x0]['className'] = _0x247b6a[0x0]['className'][_0x5f50ac(0x199)](_0x5f50ac(0x258), ''), _0x247b6a[0x0][_0x5f50ac(0x1d2)][_0x5f50ac(0x2fb)] = _0x5f50ac(0x24c), _0x247b6a[0x0][_0x5f50ac(0x1d2)][_0x5f50ac(0x273)] = _0x5f50ac(0x2ad), this[_0x5f50ac(0x1f6)] += '\x20catactive';
        for (var _0x40aad5 = 0x0; _0x40aad5 < cat_labels[_0x5f50ac(0x12f)]; _0x40aad5++) {
            if (this['className'][_0x5f50ac(0x2ea)](cat_labels[_0x40aad5])) {
                this['style']['background'] = '#606060', this[_0x5f50ac(0x1d2)][_0x5f50ac(0x273)] = 'white', current_cat_active = cat_labels[_0x40aad5], current_cat_active_id = _0x40aad5; {
                    $(_0x5f50ac(0x1aa))[_0x5f50ac(0x1f7)](''), $(_0x5f50ac(0x1aa))['append'](table_str[_0x40aad5]), label_selection();
                }
            }
        };
    });
}
BRUSH_COLOR_SIZE = 0x19;
var brush_color_canvas = document[_0xd94624(0x24b)](_0xd94624(0x290)),
    brush_color_context = brush_color_canvas['getContext']('2d'),
    rect = {},
    drag = ![];
brush_color_context['canvas'][_0xd94624(0x272)] = BRUSH_COLOR_SIZE, brush_color_context[_0xd94624(0x21b)][_0xd94624(0x1c1)] = BRUSH_COLOR_SIZE, brush_color_context[_0xd94624(0x256)] = colors[sky_label_id], brush_color_context['fillRect'](0x0, 0x0, BRUSH_COLOR_SIZE, BRUSH_COLOR_SIZE);

function getRandomInt(_0x119d41) {
    var _0x3ea277 = _0xd94624;
    return Math['floor'](Math['random']() * Math[_0x3ea277(0x145)](_0x119d41));
}
var urls = [_0xd94624(0x11f), _0xd94624(0x1c4), 'http://ec2-54-214-184-243.us-west-2.compute.amazonaws.com:443/', _0xd94624(0x23e), _0xd94624(0x2f1)],
    nurl = 0x5,
    Url, this_moment = new Date()[_0xd94624(0x235)](),
    this_moment2 = new Date()[_0xd94624(0x2cd)](),
    random_number = getRandomInt(0x3b9aca00);
Url = urls[random_number % nurl];
var global_fn = this_moment + ',' + this_moment2 + '-' + random_number,
    style_name = 'random';
onchange = _0xd94624(0x139);

function toggleCheckbox() {
    var _0x4d384f = _0xd94624,
        _0x8d3ee3 = document[_0x4d384f(0x24b)]('myCheck')['checked'];
    _0x8d3ee3 & !isChrome && (document['getElementById'](_0x4d384f(0x2a5))['click'](), alert(_0x4d384f(0x192))), console[_0x4d384f(0x2f4)](document[_0x4d384f(0x24b)]('myCheck')['checked']);
}
var brush_size_slider = document['getElementById'](_0xd94624(0x310)),
    brush_rangevalue = document[_0xd94624(0x24b)](_0xd94624(0x16d));
brush_rangevalue[_0xd94624(0x1a8)] = brush_size_slider[_0xd94624(0x25c)], brush_size_slider[_0xd94624(0x23c)] = function() {
    var _0x1382e8 = _0xd94624;
    brush_rangevalue[_0x1382e8(0x1a8)] = this[_0x1382e8(0x25c)];
};
var magicwand_tol_slider = document[_0xd94624(0x24b)](_0xd94624(0x1e3)),
    magicwand_rangevalue = document['getElementById']('magicwand_rangevalue');
magicwand_rangevalue[_0xd94624(0x1a8)] = magicwand_tol_slider[_0xd94624(0x25c)], magicwand_tol_slider[_0xd94624(0x23c)] = function() {
    var _0x4e242f = _0xd94624;
    magicwand_rangevalue[_0x4e242f(0x1a8)] = this[_0x4e242f(0x25c)];
};
var hdDown = ![],
    fourkDown = ![],
    lastEvent, mouseDown = ![],
    mouseFirstMove = ![],
    brushDown = !![],
    fillDown = ![],
    eyedropperhDown = ![],
    penDown = ![],
    eraserDown = ![],
    imageEraserDown = ![],
    inpaintDown = ![];
set_btn_active(_0xd94624(0x17d)), set_btn_disabled(_0xd94624(0x29e)), set_btn_disabled(_0xd94624(0x190)), set_btn_disabled(_0xd94624(0x1f1)), set_btn_disabled(_0xd94624(0x2a2));
var brush_circle = !![],
    brush_square = ![],
    brush_diamond = ![];
set_btn_active(_0xd94624(0x11c)), $(_0xd94624(0x31f))[_0xd94624(0x296)](function() {
    var _0x3a52e9 = _0xd94624;
    brush_circle == ![] && (brush_square && (reset_btn_active(_0x3a52e9(0x2e2)), brush_square = ![]), brush_diamond && (reset_btn_active(_0x3a52e9(0x1b0)), brush_diamond = ![]), brush_circle = !![], set_btn_active(_0x3a52e9(0x11c)));
}), $(_0xd94624(0x17f))[_0xd94624(0x296)](function() {
    var _0xb1b842 = _0xd94624;
    brush_square == ![] && (brush_circle && (reset_btn_active(_0xb1b842(0x11c)), brush_circle = ![]), brush_diamond && (reset_btn_active(_0xb1b842(0x1b0)), brush_diamond = ![]), brush_square = !![], set_btn_active('brush_square'));
}), $(_0xd94624(0x2a9))[_0xd94624(0x296)](function() {
    var _0x4d0c67 = _0xd94624;
    brush_diamond == ![] && (brush_circle && (reset_btn_active(_0x4d0c67(0x11c)), brush_circle = ![]), brush_square && (reset_btn_active(_0x4d0c67(0x2e2)), brush_square = ![]), brush_diamond = !![], set_btn_active('brush_diamond'));
});
var CANVAS_WIDTH = 0x400,
    CANVAS_HEIGHT = 0x400,
    INIT_GAP = 0x0,
    canvas = document[_0xd94624(0x24b)](_0xd94624(0x249)),
    context = canvas[_0xd94624(0x232)]('2d'),
    rect = {},
    drag = ![];
context[_0xd94624(0x21b)][_0xd94624(0x272)] = CANVAS_WIDTH, context[_0xd94624(0x21b)][_0xd94624(0x1c1)] = CANVAS_HEIGHT;
var previous_canvas_image = '',
    canvas_output = document[_0xd94624(0x24b)]('output'),
    context_output = canvas_output[_0xd94624(0x232)]('2d'),
    rect = {},
    drag = ![];
context_output[_0xd94624(0x21b)][_0xd94624(0x272)] = CANVAS_WIDTH, context_output['canvas'][_0xd94624(0x1c1)] = CANVAS_HEIGHT;
var custom_image_upload = ![],
    custom_canvas = document['getElementById']('custom'),
    custom_context = custom_canvas[_0xd94624(0x232)]('2d'),
    rect = {},
    drag = ![],
    canvas_seg = document[_0xd94624(0x24b)](_0xd94624(0x29c)),
    context_seg = canvas_seg[_0xd94624(0x232)]('2d'),
    rect = {},
    drag = ![];
context_seg['canvas'][_0xd94624(0x272)] = CANVAS_WIDTH, context_seg['canvas'][_0xd94624(0x1c1)] = CANVAS_HEIGHT, context_seg[_0xd94624(0x256)] = colors[sky_label_id], context_seg[_0xd94624(0x2f6)](0x0, 0x0, CANVAS_WIDTH, CANVAS_HEIGHT - INIT_GAP), context_seg[_0xd94624(0x256)] = colors[sea_label_id], context_seg[_0xd94624(0x2f6)](0x0, CANVAS_HEIGHT - INIT_GAP, CANVAS_WIDTH, CANVAS_HEIGHT);
var previous_canvas_seg_image = '';
document[_0xd94624(0x24b)](_0xd94624(0x29c))[_0xd94624(0x1d2)]['visibility'] = 'hidden';
var canvas_edge = document[_0xd94624(0x24b)]('viewport_edge'),
    context_edge = canvas_edge['getContext']('2d'),
    rect = {},
    drag = ![];
context_edge[_0xd94624(0x21b)]['width'] = CANVAS_WIDTH, context_edge[_0xd94624(0x21b)]['height'] = CANVAS_HEIGHT;
var previous_canvas_edge_image = '';
document['getElementById'](_0xd94624(0x1b7))['style'][_0xd94624(0x2ca)] = _0xd94624(0x201);
var canvas_real = document['getElementById'](_0xd94624(0x1cd)),
    context_real = canvas_real[_0xd94624(0x232)]('2d'),
    rect = {},
    drag = ![];
context_real[_0xd94624(0x21b)][_0xd94624(0x272)] = CANVAS_WIDTH, context_real[_0xd94624(0x21b)][_0xd94624(0x1c1)] = CANVAS_HEIGHT;
var previous_canvas_real_image = '',
    has_real_loaded = ![],
    has_output = ![];
document[_0xd94624(0x24b)](_0xd94624(0x1cd))[_0xd94624(0x1d2)]['visibility'] = _0xd94624(0x201);
var vis_seg = document[_0xd94624(0x24b)]('vis_seg')[_0xd94624(0x2af)],
    vis_edge = document['getElementById']('vis_edge')[_0xd94624(0x2af)],
    vis_image = document[_0xd94624(0x24b)](_0xd94624(0x295))['checked'];

function visSegOnClickHandler() {
    var _0xd4c51c = _0xd94624;
    vis_seg = document['getElementById']('vis_seg')[_0xd4c51c(0x2af)], !vis_seg & (brushDown | fillDown | eyedropperhDown) ? (alert(_0xd4c51c(0x1fa)), document[_0xd4c51c(0x24b)](_0xd4c51c(0x318))[_0xd4c51c(0x296)]()) : (!vis_seg ? (set_btn_disabled('brush'), set_btn_disabled(_0xd4c51c(0x2fc)), set_btn_disabled(_0xd4c51c(0x21c))) : (reset_btn_disabled('brush'), reset_btn_disabled(_0xd4c51c(0x2fc)), reset_btn_disabled(_0xd4c51c(0x21c))), draw_context());
}

function visEdgeOnClickHandler() {
    var _0x4853c3 = _0xd94624;
    vis_edge = document['getElementById'](_0x4853c3(0x16e))[_0x4853c3(0x2af)], !vis_edge & (penDown | eraserDown) ? (alert('Need\x20to\x20select\x20another\x20tool\x20before\x20disabling\x20visualization!'), document[_0x4853c3(0x24b)]('vis_edge')[_0x4853c3(0x296)]()) : (!vis_edge ? (set_btn_disabled(_0x4853c3(0x2e3)), set_btn_disabled(_0x4853c3(0x1be))) : (reset_btn_disabled('pencil'), reset_btn_disabled(_0x4853c3(0x1be))), draw_context());
}

function visImageOnClickHandler() {
    var _0x4555ca = _0xd94624;
    vis_image = document[_0x4555ca(0x24b)](_0x4555ca(0x295))['checked'], !vis_image & (imageEraserDown | inpaintDown) ? (alert(_0x4555ca(0x1fa)), document['getElementById'](_0x4555ca(0x295))[_0x4555ca(0x296)]()) : (!vis_image | !has_real_loaded ? (set_btn_disabled(_0x4555ca(0x29e)), set_btn_disabled(_0x4555ca(0x190))) : (reset_btn_disabled(_0x4555ca(0x29e)), reset_btn_disabled(_0x4555ca(0x190))), draw_context());
}

function draw_context(_0x58ac36 = 0x0, _0x520de2 = 0x0, _0xc698df = 0x0, _0x4f3f7e = 0x0) {
    var _0x37ea2b = _0xd94624;
    _0x58ac36 == 0x0 && (_0x58ac36 = canvas[_0x37ea2b(0x272)], _0x520de2 = canvas[_0x37ea2b(0x1c1)], context['clearRect'](0x0, 0x0, _0x58ac36, _0x520de2));
    if (vis_seg) {
        var _0xc56121 = context_seg['getImageData'](_0xc698df, _0x4f3f7e, _0x58ac36, _0x520de2);
        context['putImageData'](_0xc56121, _0xc698df, _0x4f3f7e);
    }
    vis_edge && context[_0x37ea2b(0x183)](canvas_edge, 0x0, 0x0);
    if (vis_image & has_real_loaded) {
        if (vis_seg) {
            var _0x1ba3b1 = 0x4 * _0x58ac36 * _0x520de2,
                _0xc56121 = context[_0x37ea2b(0x176)](_0xc698df, _0x4f3f7e, _0x58ac36, _0x520de2),
                _0x46f801 = _0xc56121['data'],
                _0x431e71 = context_real[_0x37ea2b(0x176)](_0xc698df, _0x4f3f7e, _0x58ac36, _0x520de2),
                _0x3229c1 = _0x431e71[_0x37ea2b(0x11e)];
            while (_0x1ba3b1--) {
                _0x3229c1[_0x1ba3b1] = _0x46f801[_0x1ba3b1] * 0.5 + _0x3229c1[_0x1ba3b1] * 0.5;
            }
            _0x431e71[_0x37ea2b(0x11e)] = _0x3229c1, context[_0x37ea2b(0x2fa)](_0x431e71, _0xc698df, _0x4f3f7e);
        } else {
            var _0xc56121 = context_real[_0x37ea2b(0x176)](_0xc698df, _0x4f3f7e, _0x58ac36, _0x520de2);
            context['putImageData'](_0xc56121, _0xc698df, _0x4f3f7e), vis_edge && context[_0x37ea2b(0x183)](canvas_edge, 0x0, 0x0);
        }
    }
}
draw_context();

function render() {
    var _0x26b9c7 = _0xd94624,
        _0xef1c04 = document[_0x26b9c7(0x24b)](_0x26b9c7(0x1dc))[_0x26b9c7(0x25c)],
        _0x11ce65 = document[_0x26b9c7(0x24b)]('enable_seg')['checked'],
        _0x1eb2b4 = document[_0x26b9c7(0x24b)]('enable_edge')[_0x26b9c7(0x2af)],
        _0x485477 = document['getElementById'](_0x26b9c7(0x244))['checked'],
        _0x535380 = document['getElementById'](_0x26b9c7(0x1e6))[_0x26b9c7(0x2af)],
        _0x2ccc03 = document[_0x26b9c7(0x24b)]('myCheck')[_0x26b9c7(0x2af)];
    _0x2ccc03 != !![] ? alert(_0x26b9c7(0x26a)) : $['ajax']({
        'type': _0x26b9c7(0x266),
        'url': Url + _0x26b9c7(0x147),
        'data': {
            'name': global_fn,
            'masked_segmap': canvas_seg['toDataURL'](),
            'masked_edgemap': canvas_edge['toDataURL'](),
            'masked_image': canvas_real[_0x26b9c7(0x144)](),
            'style_name': style_name,
            'caption': _0xef1c04,
            'enable_seg': _0x11ce65,
            'enable_edge': _0x1eb2b4,
            'enable_caption': _0x535380,
            'enable_image': _0x485477,
            'use_model2': ![]
        },
        'success': function(_0x1c1f2c) {
            var _0x12e727 = _0x26b9c7;
            console[_0x12e727(0x2f4)](_0x12e727(0x206));
            var _0x592cdd = new FormData();
            _0x592cdd['append']('name', global_fn);
            var _0x59dc8c = new XMLHttpRequest();
            _0x59dc8c[_0x12e727(0x11d)] = !![], _0x59dc8c[_0x12e727(0x148)] = 'arraybuffer', _0x59dc8c['open'](_0x12e727(0x266), Url + _0x12e727(0x26c), !![]), _0x59dc8c[_0x12e727(0x2d4)](_0x592cdd);
            var _0x193486 = new Image(),
                _0x54bbcd = CANVAS_WIDTH,
                _0x23d0fb = CANVAS_HEIGHT;
            _0x59dc8c[_0x12e727(0x294)] = function(_0x39c55b) {
                var _0x28bfb2 = _0x12e727,
                    _0x3ac4fc = new Uint8Array(this[_0x28bfb2(0x172)]),
                    _0x141b1e = new Blob([_0x3ac4fc], {
                        'type': _0x28bfb2(0x230)
                    }),
                    _0x2abfbc = window[_0x28bfb2(0x228)] || window[_0x28bfb2(0x30e)],
                    _0x6297fb = _0x2abfbc[_0x28bfb2(0x1d7)](_0x141b1e);
                _0x193486[_0x28bfb2(0x284)] = _0x6297fb, console[_0x28bfb2(0x2f4)](_0x193486[_0x28bfb2(0x284)]);
            console.log(_0x193486.src)
            
            var saveImg = document.getElementById('download');
            saveImg.href = _0x193486.src
            saveImg.download = Date.now()+".png";

            }, _0x193486[_0x12e727(0x294)] = function() {
                var _0x5230ae = _0x12e727;
                context_output[_0x5230ae(0x183)](_0x193486, 0x0, 0x0, _0x23d0fb, _0x54bbcd), context_output[_0x5230ae(0x183)](canvas_output, 0x0, 0x0, _0x23d0fb, _0x54bbcd, 0x0, 0x0, CANVAS_WIDTH, CANVAS_HEIGHT), has_output = !![], reset_btn_disabled(_0x5230ae(0x2a0));
            };
        },
        'error': function(_0x14d6df) {
            var _0x3c3884 = _0x26b9c7;
            console[_0x3c3884(0x2f4)](_0x3c3884(0x1bb));
        }
    })[_0x26b9c7(0x156)](function(_0x558b59) {
        var _0x585bf6 = _0x26b9c7;
        console['log'](_0x585bf6(0x15a));
    });
}

function draw_fill(_0x3d70b5, _0x16fd91, _0x6f8420, _0x249984, _0x1d6320, _0xefce5, _0x49f5da, _0xdd2df4) {
    var _0x5fa6ba = _0xd94624,
        _0x470af3 = [
            [_0x16fd91, _0x6f8420]
        ],
        _0x302e1e = canvas_seg[_0x5fa6ba(0x272)],
        _0x502922 = canvas_seg['height'],
        _0x45e584 = _0x3d70b5[_0x5fa6ba(0x176)](0x0, 0x0, _0x302e1e, _0x502922);
    _0x26c358 = (_0x6f8420 * _0x302e1e + _0x16fd91) * 0x4;
    var _0x5351dc = _0x45e584[_0x5fa6ba(0x11e)][_0x26c358 + 0x0],
        _0x1bcf7d = _0x45e584[_0x5fa6ba(0x11e)][_0x26c358 + 0x1],
        _0x5cb609 = _0x45e584[_0x5fa6ba(0x11e)][_0x26c358 + 0x2],
        _0x52f930 = _0x45e584[_0x5fa6ba(0x11e)][_0x26c358 + 0x3];
    if (_0x249984 === _0x5351dc && _0x1d6320 === _0x1bcf7d && _0xefce5 === _0x5cb609 && _0x49f5da === _0x52f930) return;
    while (_0x470af3[_0x5fa6ba(0x12f)]) {
        var _0x6b67d3, _0x16fd91, _0x6f8420, _0x26c358, _0x14ff31, _0x4e26c7;
        _0x6b67d3 = _0x470af3['pop'](), _0x16fd91 = _0x6b67d3[0x0], _0x6f8420 = _0x6b67d3[0x1], _0x26c358 = (_0x6f8420 * _0x302e1e + _0x16fd91) * 0x4;
        while (_0x59833e(_0x26c358, _0xdd2df4)) {
            _0x6f8420--, _0x26c358 = (_0x6f8420 * _0x302e1e + _0x16fd91) * 0x4;
        }
        _0x14ff31 = ![], _0x4e26c7 = ![];
        while (!![]) {
            _0x6f8420++, _0x26c358 = (_0x6f8420 * _0x302e1e + _0x16fd91) * 0x4;
            if (!(_0x6f8420 < _0x502922 && _0x59833e(_0x26c358, _0xdd2df4))) break;
            _0x2760f8(_0x26c358);
            if (_0x16fd91 > 0x0) {
                if (_0x59833e(_0x26c358 - 0x4, _0xdd2df4)) !_0x14ff31 && (_0x470af3[_0x5fa6ba(0x142)]([_0x16fd91 - 0x1, _0x6f8420]), _0x14ff31 = !![]);
                else _0x14ff31 && (_0x14ff31 = ![]);
            }
            if (_0x16fd91 < _0x302e1e - 0x1) {
                if (_0x59833e(_0x26c358 + 0x4, _0xdd2df4)) !_0x4e26c7 && (_0x470af3['push']([_0x16fd91 + 0x1, _0x6f8420]), _0x4e26c7 = !![]);
                else _0x4e26c7 && (_0x4e26c7 = ![]);
            }
            _0x26c358 += _0x302e1e * 0x4;
        }
    }
    _0x3d70b5[_0x5fa6ba(0x2fa)](_0x45e584, 0x0, 0x0);

    function _0x59833e(_0x128675, _0x2c99d1) {
        var _0xe568e0 = _0x5fa6ba;
        return Math['floor'](_0x45e584[_0xe568e0(0x11e)][_0x128675 + 0x0] / _0x2c99d1) === Math[_0xe568e0(0x145)](_0x5351dc / _0x2c99d1) && Math[_0xe568e0(0x145)](_0x45e584[_0xe568e0(0x11e)][_0x128675 + 0x1] / _0x2c99d1) === Math[_0xe568e0(0x145)](_0x1bcf7d / _0x2c99d1) && Math[_0xe568e0(0x145)](_0x45e584[_0xe568e0(0x11e)][_0x128675 + 0x2] / _0x2c99d1) === Math['floor'](_0x5cb609 / _0x2c99d1) && Math[_0xe568e0(0x145)](_0x45e584[_0xe568e0(0x11e)][_0x128675 + 0x3] / _0x2c99d1) === Math['floor'](_0x52f930 / _0x2c99d1);
    }

    function _0x2760f8(_0x24eac6) {
        var _0x59aedc = _0x5fa6ba;
        _0x45e584[_0x59aedc(0x11e)][_0x24eac6 + 0x0] = _0x249984, _0x45e584[_0x59aedc(0x11e)][_0x24eac6 + 0x1] = _0x1d6320, _0x45e584[_0x59aedc(0x11e)][_0x24eac6 + 0x2] = _0xefce5, _0x45e584[_0x59aedc(0x11e)][_0x24eac6 + 0x3] = _0x49f5da;
    }
}

function aliasedCircle(_0x564c8d, _0x2782ef, _0x1ba656, _0x56de1f) {
    var _0x9ef779 = _0xd94624,
        _0x28c9ac = _0x56de1f,
        _0x5eba19 = 0x0,
        _0x20eae7 = 0x0;
    _0x564c8d[_0x9ef779(0x2f6)](_0x2782ef - _0x28c9ac, _0x1ba656, _0x56de1f << 0x1, 0x1);
    while (_0x28c9ac > _0x5eba19) {
        _0x20eae7 -= --_0x28c9ac - ++_0x5eba19;
        if (_0x20eae7 < 0x0) _0x20eae7 += _0x28c9ac++;
        _0x564c8d[_0x9ef779(0x2f6)](_0x2782ef - _0x5eba19, _0x1ba656 - _0x28c9ac, _0x5eba19 << 0x1, 0x1), _0x564c8d[_0x9ef779(0x2f6)](_0x2782ef - _0x28c9ac, _0x1ba656 - _0x5eba19, _0x28c9ac << 0x1, 0x1), _0x564c8d[_0x9ef779(0x2f6)](_0x2782ef - _0x28c9ac, _0x1ba656 + _0x5eba19, _0x28c9ac << 0x1, 0x1), _0x564c8d['fillRect'](_0x2782ef - _0x5eba19, _0x1ba656 + _0x28c9ac, _0x5eba19 << 0x1, 0x1);
    }
}

function aliasedSquare(_0x26156d, _0x188077, _0x5da582, _0x3534ec) {
    var _0x59eb34 = _0xd94624;
    _0x26156d[_0x59eb34(0x2f6)](_0x188077 - _0x3534ec, _0x5da582 - _0x3534ec, 0x2 * _0x3534ec, 0x2 * _0x3534ec);
}

function aliasedDiamond(_0x201873, _0x3b28af, _0x57965f, _0x2652e4) {
    var _0x2dbcc5 = _0xd94624,
        _0x16c48e = 0x0;
    while (_0x16c48e < _0x2652e4) {
        _0x201873['fillRect'](_0x3b28af - _0x16c48e, _0x57965f - (_0x2652e4 - _0x16c48e), 0x1, 0x2 * (_0x2652e4 - _0x16c48e) + 0x1), _0x201873[_0x2dbcc5(0x2f6)](_0x3b28af + _0x16c48e, _0x57965f - (_0x2652e4 - _0x16c48e), 0x1, 0x2 * (_0x2652e4 - _0x16c48e) + 0x1), _0x16c48e += 0x1;
    }
}

function eraserCircle(_0x5329aa, _0x4ea5cf, _0x14555e, _0x5b952a) {
    var _0x5b32a9 = _0xd94624,
        _0x3fcf35 = _0x5329aa[_0x5b32a9(0x176)](_0x4ea5cf - _0x5b952a, _0x14555e - _0x5b952a, _0x5b952a * 0x2, _0x5b952a * 0x2),
        _0xeae2b2 = _0x5b952a,
        _0x4ae8b9 = 0x0,
        _0x5cfc57 = 0x0;
    _0x1df12d(_0x5b952a - _0xeae2b2, _0x5b952a, _0x5b952a << 0x1, 0x1);
    while (_0xeae2b2 > _0x4ae8b9) {
        _0x5cfc57 -= --_0xeae2b2 - ++_0x4ae8b9;
        if (_0x5cfc57 < 0x0) _0x5cfc57 += _0xeae2b2++;
        _0x1df12d(_0x5b952a - _0x4ae8b9, _0x5b952a - _0xeae2b2, _0x4ae8b9 << 0x1, 0x1), _0x1df12d(_0x5b952a - _0xeae2b2, _0x5b952a - _0x4ae8b9, _0xeae2b2 << 0x1, 0x1), _0x1df12d(_0x5b952a - _0xeae2b2, _0x5b952a + _0x4ae8b9, _0xeae2b2 << 0x1, 0x1), _0x1df12d(_0x5b952a - _0x4ae8b9, _0x5b952a + _0xeae2b2, _0x4ae8b9 << 0x1, 0x1);
    }
    _0x5329aa[_0x5b32a9(0x2fa)](_0x3fcf35, _0x4ea5cf - _0x5b952a, _0x14555e - _0x5b952a);

    function _0x1df12d(_0x16d6b6, _0x3ff71f, _0x1501e7, _0x348a49) {
        var _0x59c132 = _0x5b32a9;
        for (var _0x3626dd = _0x3ff71f; _0x3626dd <= _0x3ff71f + _0x348a49; _0x3626dd++) {
            for (var _0x1facc7 = _0x16d6b6; _0x1facc7 <= _0x16d6b6 + _0x1501e7; _0x1facc7++) {
                pixel_pos = (_0x3626dd * _0x5b952a * 0x2 + _0x1facc7) * 0x4, _0x3fcf35['data'][pixel_pos + 0x0] = 0xff, _0x3fcf35['data'][pixel_pos + 0x1] = 0xff, _0x3fcf35[_0x59c132(0x11e)][pixel_pos + 0x2] = 0xff, _0x3fcf35['data'][pixel_pos + 0x3] = 0x0;
            }
        }
    }
}
$(_0xd94624(0x152))['click'](function() {
    var _0x1fb499 = _0xd94624;
    alert(_0x1fb499(0x2c4));
}), $(_0xd94624(0x1d6))[_0xd94624(0x296)](function() {
    alert('You\x20can\x20upload\x20your\x20previously\x20saved\x20sketch\x20using\x20this\x20upload\x20button.\x20Image\x20format\x20PNG.');
}), $(_0xd94624(0x175))[_0xd94624(0x296)](function() {
    var _0x3bad5c = _0xd94624;
    alert(_0x3bad5c(0x269));
}), $('#info_style')[_0xd94624(0x296)](function() {
    var _0x34f166 = _0xd94624;
    alert(_0x34f166(0x1e8));
}), $(_0xd94624(0x1d4))[_0xd94624(0x296)](function() {
    render();
}), $(_0xd94624(0x198))['click'](function() {
    get_segment();
}), $('#get_sketch')['click'](function() {
    get_sketch();
}), $(_0xd94624(0x14b))[_0xd94624(0x296)](function() {
    var _0x28ca31 = _0xd94624;
    console[_0x28ca31(0x2f4)]('brush'), vis_seg ? (set_btn_active(_0x28ca31(0x17d)), reset_btn_active(_0x28ca31(0x2fc)), reset_btn_active(_0x28ca31(0x21c)), eyedropperhDown = ![], penDown = ![], brushDown = !![], fillDown = ![], eraserDown = ![], imageEraserDown = ![], inpaintDown = ![], canvas[_0x28ca31(0x1d2)]['cursor'] = _0x28ca31(0x2e6), vis_edge && (reset_btn_active(_0x28ca31(0x2e3)), reset_btn_active(_0x28ca31(0x1be))), vis_image & has_real_loaded && (reset_btn_active('image_eraser'), reset_btn_active(_0x28ca31(0x190)))) : alert(_0x28ca31(0x2d9));
}), $(_0xd94624(0x1f4))[_0xd94624(0x296)](function() {
    var _0x5b2913 = _0xd94624;
    console['log'](_0x5b2913(0x2fc)), vis_seg ? (set_btn_active('fill'), reset_btn_active('brush'), reset_btn_active(_0x5b2913(0x21c)), eyedropperhDown = ![], penDown = ![], brushDown = ![], fillDown = !![], eraserDown = ![], imageEraserDown = ![], inpaintDown = ![], canvas['style'][_0x5b2913(0x255)] = _0x5b2913(0x15e), vis_edge && (reset_btn_active(_0x5b2913(0x2e3)), reset_btn_active('eraser')), vis_image & has_real_loaded && (reset_btn_active(_0x5b2913(0x29e)), reset_btn_active(_0x5b2913(0x190)))) : alert(_0x5b2913(0x13d));
}), $(_0xd94624(0x254))[_0xd94624(0x296)](function() {
    var _0x1f7fd4 = _0xd94624;
    console['log'](_0x1f7fd4(0x21c)), vis_seg ? (set_btn_active(_0x1f7fd4(0x21c)), reset_btn_active(_0x1f7fd4(0x17d)), reset_btn_active(_0x1f7fd4(0x2fc)), eyedropperhDown = !![], penDown = ![], brushDown = ![], fillDown = ![], eraserDown = ![], imageEraserDown = ![], inpaintDown = ![], canvas[_0x1f7fd4(0x1d2)][_0x1f7fd4(0x255)] = _0x1f7fd4(0x2e8), vis_edge && (reset_btn_active(_0x1f7fd4(0x2e3)), reset_btn_active(_0x1f7fd4(0x1be))), vis_image & has_real_loaded && (reset_btn_active(_0x1f7fd4(0x29e)), reset_btn_active(_0x1f7fd4(0x190)))) : alert(_0x1f7fd4(0x20a));
}), $('#pencil')['click'](function() {
    var _0xe3e67d = _0xd94624;
    console[_0xe3e67d(0x2f4)]('pencil'), vis_edge ? (set_btn_active('pencil'), reset_btn_active(_0xe3e67d(0x1be)), eyedropperhDown = ![], penDown = !![], brushDown = ![], fillDown = ![], eraserDown = ![], imageEraserDown = ![], inpaintDown = ![], canvas['style'][_0xe3e67d(0x255)] = _0xe3e67d(0x2e6), vis_seg && (reset_btn_active('brush'), reset_btn_active(_0xe3e67d(0x2fc)), reset_btn_active(_0xe3e67d(0x21c))), vis_image & has_real_loaded && (reset_btn_active('image_eraser'), reset_btn_active(_0xe3e67d(0x190)))) : alert(_0xe3e67d(0x2ff));
}), $(_0xd94624(0x245))['click'](function() {
    var _0x24097e = _0xd94624;
    console[_0x24097e(0x2f4)](_0x24097e(0x1be)), vis_edge ? (set_btn_active('eraser'), reset_btn_active(_0x24097e(0x2e3)), eraserDown = !![], eyedropperhDown = ![], penDown = ![], brushDown = ![], fillDown = ![], imageEraserDown = ![], inpaintDown = ![], canvas['style'][_0x24097e(0x255)] = _0x24097e(0x2e6), vis_seg && (reset_btn_active(_0x24097e(0x17d)), reset_btn_active(_0x24097e(0x2fc)), reset_btn_active('eyedropper')), vis_image & has_real_loaded && (reset_btn_active(_0x24097e(0x29e)), reset_btn_active(_0x24097e(0x190)))) : alert(_0x24097e(0x243));
}), $(_0xd94624(0x312))[_0xd94624(0x296)](function() {
    var _0x42ebc0 = _0xd94624;
    console[_0x42ebc0(0x2f4)](_0x42ebc0(0x29e));
    if (!has_real_loaded) alert(_0x42ebc0(0x1db));
    else vis_image ? (set_btn_active(_0x42ebc0(0x29e)), reset_btn_active(_0x42ebc0(0x190)), imageEraserDown = !![], eraserDown = ![], eyedropperhDown = ![], penDown = ![], brushDown = ![], fillDown = ![], inpaintDown = ![], canvas[_0x42ebc0(0x1d2)][_0x42ebc0(0x255)] = _0x42ebc0(0x2e6), vis_seg && (reset_btn_active('brush'), reset_btn_active(_0x42ebc0(0x2fc)), reset_btn_active('eyedropper')), vis_edge && (reset_btn_active(_0x42ebc0(0x2e3)), reset_btn_active(_0x42ebc0(0x1be)))) : alert(_0x42ebc0(0x132));
}), $(_0xd94624(0x2f3))['click'](function() {
    var _0x58cd97 = _0xd94624;
    console['log']('inpaint');
    if (!has_real_loaded) alert(_0x58cd97(0x287));
    else vis_image ? (set_btn_active('inpaint'), reset_btn_active('image_eraser'), inpaintDown = !![], penDown = ![], brushDown = ![], fillDown = ![], eraserDown = ![], imageEraserDown = ![], eyedropperhDown = ![], canvas[_0x58cd97(0x1d2)]['cursor'] = _0x58cd97(0x15e), vis_seg && (reset_btn_active(_0x58cd97(0x17d)), reset_btn_active(_0x58cd97(0x2fc)), reset_btn_active(_0x58cd97(0x21c))), vis_edge && (reset_btn_active(_0x58cd97(0x2e3)), reset_btn_active(_0x58cd97(0x1be)))) : alert(_0x58cd97(0x281));
}), $('#new')[_0xd94624(0x296)](function() {
    var _0x56083b = _0xd94624;
    console['log'](_0x56083b(0x155)), context_seg['fillStyle'] = colors[sky_label_id], context_seg['fillRect'](0x0, 0x0, CANVAS_WIDTH, CANVAS_HEIGHT - INIT_GAP), context_seg[_0x56083b(0x256)] = colors[sea_label_id], context_seg[_0x56083b(0x2f6)](0x0, CANVAS_HEIGHT - INIT_GAP, CANVAS_WIDTH, CANVAS_HEIGHT), context_seg[_0x56083b(0x183)](canvas_seg, 0x0, 0x0), context_edge['clearRect'](0x0, 0x0, CANVAS_WIDTH, CANVAS_HEIGHT), context_real[_0x56083b(0x25d)](0x0, 0x0, CANVAS_WIDTH, CANVAS_HEIGHT), context[_0x56083b(0x183)](canvas_seg, 0x0, 0x0), context_output['clearRect'](0x0, 0x0, CANVAS_WIDTH, CANVAS_HEIGHT), has_real_loaded = ![], has_output = ![];
    var _0x5bf146 = document[_0x56083b(0x24b)](_0x56083b(0x244))['checked'];
    _0x5bf146 && document[_0x56083b(0x24b)]('enable_image')[_0x56083b(0x296)](), !vis_seg && document[_0x56083b(0x24b)](_0x56083b(0x318))[_0x56083b(0x296)](), !vis_edge && document[_0x56083b(0x24b)](_0x56083b(0x16e))[_0x56083b(0x296)](), !vis_image && document[_0x56083b(0x24b)](_0x56083b(0x295))[_0x56083b(0x296)](), set_btn_disabled('image_eraser'), set_btn_disabled('inpaint'), set_btn_disabled(_0x56083b(0x1f1)), set_btn_disabled(_0x56083b(0x2a2));
}), $('#copy')['click'](function() {
    var _0x2d8ef6 = _0xd94624;
    console[_0x2d8ef6(0x2f4)]('copy');
    if (has_output) {
        context_real[_0x2d8ef6(0x25d)](0x0, 0x0, canvas['width'], canvas[_0x2d8ef6(0x1c1)]), context_real[_0x2d8ef6(0x183)](canvas_output, 0x0, 0x0), has_real_loaded = !![];
        var _0x3cfb22 = document[_0x2d8ef6(0x24b)]('enable_image')['checked'];
        !_0x3cfb22 && document[_0x2d8ef6(0x24b)](_0x2d8ef6(0x244))['click'](), !vis_image && document[_0x2d8ef6(0x24b)](_0x2d8ef6(0x295))[_0x2d8ef6(0x296)](), reset_btn_disabled(_0x2d8ef6(0x29e)), reset_btn_disabled(_0x2d8ef6(0x190)), reset_btn_disabled(_0x2d8ef6(0x1f1)), reset_btn_disabled(_0x2d8ef6(0x2a2)), draw_context();
    }
}), set_btn_disabled('copy'), $(_0xd94624(0x1b4))[_0xd94624(0x296)](function() {
    var _0x40f8af = _0xd94624;
    console[_0x40f8af(0x2f4)](_0x40f8af(0x1e9)), previous_canvas_image != '' && (context[_0x40f8af(0x2fa)](previous_canvas_image, 0x0, 0x0), previous_canvas_image = '', context_seg[_0x40f8af(0x2fa)](previous_canvas_seg_image, 0x0, 0x0), previous_canvas_seg_image = '', context_edge[_0x40f8af(0x2fa)](previous_canvas_edge_image, 0x0, 0x0), previous_canvas_edge_image = '', context_real['putImageData'](previous_canvas_real_image, 0x0, 0x0), previous_canvas_real_image = '', set_btn_disabled('undo'));
}), set_btn_disabled(_0xd94624(0x1e9));

function set_btn_active(_0x1b942b) {
    var _0x39b698 = _0xd94624,
        _0x39dcb9 = document[_0x39b698(0x24b)](_0x1b942b);
    !_0x39dcb9['className'][_0x39b698(0x1f9)](_0x39b698(0x140)) && (_0x39dcb9[_0x39b698(0x1f6)] = _0x39dcb9[_0x39b698(0x1f6)] + _0x39b698(0x140), console['log']('set\x20active'), console[_0x39b698(0x2f4)](_0x39dcb9[_0x39b698(0x1f6)]));
}

function reset_btn_active(_0x17db0b) {
    var _0x2e33c1 = _0xd94624,
        _0x402b90 = document[_0x2e33c1(0x24b)](_0x17db0b);
    console[_0x2e33c1(0x2f4)](_0x2e33c1(0x302)), console[_0x2e33c1(0x2f4)](_0x402b90[_0x2e33c1(0x1f6)]), _0x402b90['className'] = _0x402b90[_0x2e33c1(0x1f6)][_0x2e33c1(0x199)](_0x2e33c1(0x140), ''), console[_0x2e33c1(0x2f4)](_0x2e33c1(0x1ba)), console[_0x2e33c1(0x2f4)](_0x402b90['className']);
}

function set_btn_disabled(_0x5f1ba8) {
    var _0x3001e5 = _0xd94624,
        _0x5c79a8 = document[_0x3001e5(0x24b)](_0x5f1ba8);
    !_0x5c79a8[_0x3001e5(0x1f6)][_0x3001e5(0x1f9)](_0x3001e5(0x196)) && (_0x5c79a8['className']['endsWith'](_0x3001e5(0x140)) && (_0x5c79a8[_0x3001e5(0x1f6)] = _0x5c79a8['className']['replace'](_0x3001e5(0x140), '')), _0x5c79a8[_0x3001e5(0x1f6)] = _0x5c79a8['className'] + _0x3001e5(0x196));
}

function reset_btn_disabled(_0x5b038a) {
    var _0x7cbccf = _0xd94624,
        _0x47d4c8 = document['getElementById'](_0x5b038a);
    _0x47d4c8[_0x7cbccf(0x1f6)] = _0x47d4c8['className'][_0x7cbccf(0x199)](_0x7cbccf(0x196), '');
}

function backup_canvas() {
    var _0x43f557 = _0xd94624;
    console[_0x43f557(0x2f4)](_0x43f557(0x2c7)), previous_canvas_image = context[_0x43f557(0x27d)](CANVAS_WIDTH, CANVAS_HEIGHT);
    var _0x23276f = context[_0x43f557(0x176)](0x0, 0x0, CANVAS_WIDTH, CANVAS_HEIGHT);
    previous_canvas_image[_0x43f557(0x11e)][_0x43f557(0x316)](_0x23276f['data']), previous_canvas_seg_image = context_seg['createImageData'](CANVAS_WIDTH, CANVAS_HEIGHT), _0x23276f = context_seg[_0x43f557(0x176)](0x0, 0x0, CANVAS_WIDTH, CANVAS_HEIGHT), previous_canvas_seg_image['data'][_0x43f557(0x316)](_0x23276f[_0x43f557(0x11e)]), previous_canvas_edge_image = context_edge[_0x43f557(0x27d)](CANVAS_WIDTH, CANVAS_HEIGHT), _0x23276f = context_edge[_0x43f557(0x176)](0x0, 0x0, CANVAS_WIDTH, CANVAS_HEIGHT), previous_canvas_edge_image[_0x43f557(0x11e)][_0x43f557(0x316)](_0x23276f['data']), previous_canvas_real_image = context_real[_0x43f557(0x27d)](CANVAS_WIDTH, CANVAS_HEIGHT), _0x23276f = context_real[_0x43f557(0x176)](0x0, 0x0, CANVAS_WIDTH, CANVAS_HEIGHT), previous_canvas_real_image[_0x43f557(0x11e)][_0x43f557(0x316)](_0x23276f[_0x43f557(0x11e)]), reset_btn_disabled(_0x43f557(0x1e9));
}
$(canvas)['on'](_0xd94624(0x268), function(_0x1adf60) {
    var _0x292dc3 = _0xd94624;
    mouseDown = ![], mouseFirstMove = ![], console[_0x292dc3(0x2f4)](_0x292dc3(0x19f)), draw_context();
}), $(canvas)['on'](_0xd94624(0x2dc), function(_0x3d912f) {
    var _0x226af2 = _0xd94624;
    lastEvent = _0x3d912f, mouseDown = !![];
    if (fillDown) {
        backup_canvas();
        var _0x988133 = hexToRgb(current_color)['r'],
            _0x198642 = hexToRgb(current_color)['g'],
            _0x5e7878 = hexToRgb(current_color)['b'];
        draw_fill(context_seg, _0x3d912f['offsetX'], _0x3d912f[_0x226af2(0x30c)], _0x988133, _0x198642, _0x5e7878, 0xff, 0x1);
    } else {
        if (inpaintDown) {
            backup_canvas();
            var _0x988133 = hexToRgb(current_color)['r'],
                _0x198642 = hexToRgb(current_color)['g'],
                _0x5e7878 = hexToRgb(current_color)['b'];
            draw_fill(context_real, _0x3d912f[_0x226af2(0x23f)], _0x3d912f['offsetY'], 0xff, 0xff, 0xff, 0x0, magicwand_tol_slider[_0x226af2(0x25c)]);
        } else {
            if (eyedropperhDown) pick_color(_0x3d912f);
            else {
                if (brushDown) backup_canvas(), single_point_drawing(_0x3d912f, context_seg, current_color);
                else {
                    if (imageEraserDown) backup_canvas(), single_point_drawing(_0x3d912f, context_real, '#ffffff');
                    else penDown | eraserDown && (backup_canvas(), context_edge['beginPath'](), context_edge['moveTo'](_0x3d912f['offsetX'], _0x3d912f[_0x226af2(0x30c)]));
                }
            }
        }
    }
}), $(canvas)['on'](_0xd94624(0x2f8), function(_0x26aa3f) {
    var _0x290078 = _0xd94624;
    if (_0x26aa3f[_0x290078(0x1fc)] == 0x1 & mouseDown & (brushDown | penDown | eraserDown | imageEraserDown)) {
        if (penDown | eraserDown) penDown ? (context_edge[_0x290078(0x22e)] = 'source-over', context_edge[_0x290078(0x205)] = _0x290078(0x2d3), context_edge['lineWidth'] = 0x3) : (context_edge[_0x290078(0x22e)] = _0x290078(0x20c), context_edge[_0x290078(0x2e0)] = brush_size_slider[_0x290078(0x25c)]), context_edge[_0x290078(0x19e)](_0x26aa3f[_0x290078(0x23f)], _0x26aa3f[_0x290078(0x30c)]), context_edge[_0x290078(0x1cf)] = context_edge[_0x290078(0x223)] = 'round', context_edge[_0x290078(0x1e2)]();
        else {
            if (brushDown) isFirefox ? single_point_drawing(_0x26aa3f, context_seg, current_color) : two_point_drawing(_0x26aa3f, lastEvent, context_seg, current_color);
            else imageEraserDown && (isFirefox ? single_point_drawing(_0x26aa3f, context_real, '#ffffff') : two_point_drawing(_0x26aa3f, lastEvent, context_real, _0x290078(0x16c)));
        }
        lastEvent = _0x26aa3f;
        var _0xdf4059 = Math[_0x290078(0x309)](brush_size_slider[_0x290078(0x25c)] / 0x2);
        draw_context(_0xdf4059 * 0x2, _0xdf4059 * 0x2, _0x26aa3f['offsetX'] - _0xdf4059, _0x26aa3f[_0x290078(0x30c)] - _0xdf4059);
    }
});

function hexToRgb(_0x51edcc) {
    var _0x53cf45 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i ['exec'](_0x51edcc);
    return _0x53cf45 ? {
        'r': parseInt(_0x53cf45[0x1], 0x10),
        'g': parseInt(_0x53cf45[0x2], 0x10),
        'b': parseInt(_0x53cf45[0x3], 0x10)
    } : null;
}

function _0x3fe6() {
    var _0x38d9a3 = ['#81a365', '19nlfIqL', 'btncat', 'lbl-skateboard', '#27c0d4', 'POST', '#b20a88', 'mouseup', 'You\x20can\x20upload\x20a\x20landscape\x20image\x20and\x20use\x20its\x20segmentation\x20mask\x20as\x20the\x20starting\x20point\x20of\x20your\x20painting.\x20Accepting\x20format\x20JPG/JPEG/PNG', 'Please\x20check\x20the\x20button\x20in\x20terms\x20and\x20conditions\x20section\x20before\x20starting\x20using\x20the\x20app.', '#9600b1', 'gaugan2_receive_output', 'lbl-platform', 'lbl-street-sign', 'lbl-suitcase', '#2cf37d', '#4480da', 'width', 'color', 'lbl-railing', 'cat-bldg', 'getBoundingClientRect', '#24fe20', 'lbl-bottle', 'lbl-stone', 'which', '#3ecb89', '#9364c8', 'createImageData', 'blob', '#422283', '#04434f', 'Please\x20visualize\x20image\x20when\x20using\x20magic\x20wand.', '#6df474', 'real_image.png', 'src', 'lbl-microwave', 'lbl-gravel', 'Please\x20upload\x20a\x20landscape\x20image\x20before\x20using\x20the\x20magic\x20wand.', '#123a2c', '#748f23', '\x20lbl-active', '#3af41d', '#5441a2', 'lbl-house', '<table>\x20\x20\x20\x20\x20<tr><th><button\x20class=\x22btnclr\x20lbl-bush\x22>Bush</button></th></tr>\x20\x20\x20\x20<tr><th><button\x20class=\x22btnclr\x20lbl-flower\x22>Flower</button></th></tr>\x20\x20\x20\x20<tr><th><button\x20class=\x22btnclr\x20lbl-grass\x22>Grass</button></th></tr>\x20\x20\x20\x20<tr><th><button\x20class=\x22btnclr\x20lbl-straw\x22>Straw</button></th></tr>\x20\x20\x20\x20<tr><th><button\x20class=\x22btnclr\x20lbl-tree\x22>Tree</button></th></tr>\x20\x20\x20\x20<tr><th><button\x20class=\x22btnclr\x20lbl-wood\x22>Wood</button></th></tr>\x20\x20\x20\x20</tr>\x20\x20\x20\x20</table>', 'lbl-hair-drier', 'brush_color', '#46356c', '#8c5dcb', 'segmentation.png', 'onload', 'vis_image', 'click', '#ae2974', 'lbl-window-other', '#7f4502', 'lbl-carrot', 'lbl-wall-brick', 'viewport_seg', 'ajax', 'image_eraser', '#623550', 'copy', 'lbl-counter', 'get_sketch', '#195103', 'lbl-stop-sign', 'myCheck', 'lbl-dog', '#8e629e', '#8aa2a7', '#brush_diamond', 'lbl-surfboard', 'lbl-clock', 'lbl-tent', '#202020', 'lbl-car', 'checked', 'lbl-frisbee', '#a5c3ba', 'lbl-truck', 'cat-ground', '1761tiRxNt', 'lbl-sky', 'split', '#978a29', 'toString', '390229TdVhpC', '#5966ff', 'touchend', '000000', 'lbl-branch', 'lbl-sandwich', 'lbl-curtain', '4476702CRhipe', '#760000', 'white', 'lbl-floor-wood', 'You\x20can\x20upload\x20your\x20previously\x20saved\x20segmentation\x20map\x20using\x20this\x20upload\x20button.\x20Image\x20format\x20PNG.', '#43802e', '#a2a3eb', 'Backup', '#4c4fad', 'lbl-mirror', 'visibility', '#3b9743', 'lbl-railroad', 'getTime', '#1aa5ea', 'lbl-rock', 'lbl-net', 'lbl-structural', '#a8c832', 'black', 'send', 'update_random', 'lbl-motorcycle', 'lbl-toaster', 'lbl-blanket', 'Please\x20visualize\x20segmentation\x20when\x20using\x20brush.', 'lbl-floor-tile', '9WDaoiB', 'mousedown', '#a06249', 'appendChild', '#17aed2', 'lineWidth', 'then', 'brush_square', 'pencil', 'lbl-plastic', 'shiftKey', 'pointer', 'lbl-cardboard', 's-resize', 'undefined', 'includes', 'lbl-tv', 'lbl-ceiling-tile', '#87716f', '#example4', 'lbl-hair-brush', '#45a4b2', 'http://ec2-52-10-232-124.us-west-2.compute.amazonaws.com:443/', 'lbl-wall-concrete', '#inpaint', 'log', 'arraybuffer', 'fillRect', 'gaugan2_receive_style_image', 'mousemove', 'Please\x20select\x20a\x20file\x20before\x20clicking\x20\x27Load\x27', 'putImageData', 'background', 'fill', 'lbl-stairs', '#14e67d', 'Please\x20visualize\x20sketch\x20when\x20using\x20pencil.', '#22f3d7', '#05fb29', 'current', '#52782c', '#72e867', 'lbl-desk', 'lbl-cell-phone', 'lbl-kite', 'lbl-mud', 'round', 'lbl-mountain', '#40b729', 'offsetY', '#076728', 'webkitURL', 'lbl-food-other', 'brush_size', 'lbl-mirror-stuff', '#image_eraser', '#8b3027', 'lbl-paper', 'lbl-bicycle', 'set', '#00ac0d', 'vis_seg', 'gaugan2_return_edgemap', 'lbl-cabinet', '#5f807e', '#example3', 'lbl-broccoli', '#50ba55', '#brush_circle', 'gaugan2_receive_real_image', 'brush_circle', 'withCredentials', 'data', 'http://ec2-54-184-13-84.us-west-2.compute.amazonaws.com:443/', 'lbl-dirt', 'custom', '#71b443', '#8de61e', '28360EvCnPg', 'sketch.png', 'files', 'lbl-straw', 'palette', 'lbl-scissors', '#855efd', 'name', '#21d0c5', 'lbl-hot-dog', '#example8', 'length', '#b57b00', 'Um,\x20couldn\x27t\x20find\x20the\x20imgfile\x20element.', 'Please\x20visualize\x20image\x20when\x20using\x20image\x20eraser.', '#0fd881', 'lbl-bus', 'lbl-shoe', 'lbl-snowboard', '#56a921', 'cat-plant', 'toggleCheckbox(this)', 'lbl-bird', 'lbl-road', '#647988', 'Please\x20visualize\x20segmentation\x20when\x20using\x20fill.', '#example7', '#b42b5b', '_active', 'lbl-spoon', 'push', '#0e46f9', 'toDataURL', 'floor', 'lbl-banner', 'gaugan2_infer', 'responseType', '#a1a164', 'lbl-laptop', '#brush', '#9170c7', 'body', '#6ac478', 'lbl-plate', 'lbl-flower', 'FileReader', '#info_segmap', 'lbl-sports-ball', '#5e5bc5', 'new', 'done', '#511f61', '#381f94', 'readAsDataURL', 'sent', 'lbl-fence', 'lbl-bush', 'This\x20browser\x20doesn\x27t\x20seem\x20to\x20support\x20the\x20`files`\x20property\x20of\x20file\x20inputs.', 'sw-resize', '#3f7249', 'lbl-textile-other', '#a99410', 'lbl-boat', '#2963b6', '#0bf2a6', '#7bc800', '#06c312', '#a47b69', '#84c575', 'lbl-vase', '#530122', '#31a71b', '#ffffff', 'brush_rangevalue', 'vis_edge', 'lbl-skis', '#6e6e28', '#8f2a91', 'response', '#7817f1', 'lbl-tie', '#info_real', 'getImageData', 'lbl-bowl', '#7a8d92', 'Please\x20upload\x20a\x20landscape\x20image\x20before\x20computing\x20the\x20sketch.', 'lbl-chair', '#4af48a', '#ab32a4', 'brush', 'lbl-plant', '#brush_square', 'lbl-floor-other', '#65aabd', 'lbl-wall-stone', 'drawImage', '#892455', 'segmapfile', '#3720ae', '#946e28', 'lbl-window-blind', '#23c52b', 'ctrlKey', 'lbl-pillow', 'lbl-water', '2667845GiuHMb', 'Invalid\x20color\x20component', '#1e09d6', 'inpaint', '#9e9eaa', 'Only\x20Chrome\x20and\x20Edge\x20are\x20supported\x20now.', 'lbl-bear', '#example1', 'lbl-fruit', '_disable', 'lbl-potted-plant', '#get_segment', 'replace', '#49e809', 'lbl-teddy-bear', 'lbl-handbag', 'lbl-carpet', 'lineTo', 'mouseup\x20inside', 'Please\x20upload\x20a\x20landscape\x20image\x20before\x20computing\x20the\x20segmentation\x20map.', '#6b2f5b', 'file', '#9f79db', 'lbl-door-stuff', 'lbl-table', 'result', '#b356b8', 'innerHTML', '#7ec864', '#palette', 'lbl-wall-other', 'lbl-floor-marble', 'load\x20image', 'touches', 'lbl-ground-other', 'brush_diamond', 'lbl-hill', 'lbl-wood', '#411c97', '#undo', 'cat-landscape', '#88b25b', 'viewport_edge', '#0d575d', 'lbl-wall-panel', 'reset', 'error', '#26af68', 'lbl-snow', 'eraser', 'lbl-sheep', 'lbl-elephant', 'height', 'abs', '#999900', 'http://ec2-52-12-124-254.us-west-2.compute.amazonaws.com:443/', 'lbl-sand', 'lbl-oven', '#7d3054', 'onkeyup', 'open', 'lbl-moss', 'lbl-leaves', '#82c08c', 'viewport_real', 'append', 'lineJoin', 'The\x20file\x20API\x20isn\x27t\x20supported\x20on\x20this\x20browser\x20yet.', 'lbl-bench', 'style', 'lbl-cup', '#render', 'lbl-sink', '#info_sketch', 'createObjectURL', '#254f0b', '#3220d3', 'generateAsync', 'Please\x20upload\x20a\x20landscape\x20image\x20before\x20using\x20the\x20image\x20eraser.', 'text_input', 'category', 'imgfile', 'lbl-building-other', 'lbl-roof', 'lbl-cupboard', 'stroke', 'magicwand_tol', '#759472', '#example0', 'enable_text', '#80a945', 'You\x20can\x20upload\x20a\x20landscape\x20image\x20and\x20use\x20its\x20style\x20as\x20the\x20style\x20of\x20your\x20output\x20image.\x20Image\x20format\x20JPG/JPEG/PNG', 'undo', '#03c098', 'clientY', 'lbl-couch', '#example2', 'lbl-person', 'lbl-metal', '#5823e8', 'get_segment', 'ready', '#869664', '#fill', 'lbl-cat', 'className', 'html', 'lbl-toilet', 'endsWith', 'Need\x20to\x20select\x20another\x20tool\x20before\x20disabling\x20visualization!', 'lbl-skyscraper', 'buttons', '1928OAlDhe', '#340997', 'lbl-book', 'beginPath', 'hidden', '#1b19cc', '#835f2c', 'image/png', 'strokeStyle', 'success', 'lbl-river', 'lbl-blender', 'addEventListener', 'Please\x20visualize\x20segmentation\x20when\x20using\x20eyedropper.', '#6fccb0', 'destination-out', '#1058df', '#9dbbf2', '#random', '#5caecb', '#4d84c7', 'left', 'lbl-mat', 'lbl-remote', '#478503', 'lbl-furniture-other', '#a7aed6', '#706419', 'getElementsByClassName', '#55e758', 'canvas', 'eyedropper', '#28528a', 'lbl-bridge', 'lbl-horse', 'lbl-waterdrops', '#012f47', 'lbl-donut', 'lineCap', '#2d1d9c', '#0a150b', '22495970iPuPZM', '#example9', 'URL', 'lbl-train', 'lbl-dining-table', 'lbl-floor-stone', 'lbl-ceiling-other', '#a65280', 'globalCompositeOperation', '#1f94fe', 'image/jpeg', '#aad16a', 'getContext', 'lbl-fog', 'base64,', 'toLocaleDateString', 'lbl-cow', '#9b7fc9', 'moveTo', '#4f2a3d', 'touchstart', 'lbl-eye-glasses', 'oninput', 'lbl-orange', 'http://ec2-34-219-219-11.us-west-2.compute.amazonaws.com:443/', 'offsetX', '#152718', 'lbl-refrigerator', '#2f93e8', 'Please\x20visualize\x20sketch\x20when\x20using\x20eraser.', 'enable_image', '#eraser', 'lbl-sea', '#ac9b5e', '#1858ef', 'viewport', '#606e32', 'getElementById', 'inherit', 'href', '4195736hjLuHc', '#2bb1a5', 'lbl-wine-glass', '#33c1d9', 'lbl-traffic-light', 'function', '#eyedropper', 'cursor', 'fillStyle', 'lbl-fork', '\x20cat-active', 'lbl-umbrella', 'lbl-grass', '#9ac6da', 'value', 'clearRect', '#48261f', '#734efc', 'lbl-playingfield'];
    _0x3fe6 = function() {
        return _0x38d9a3;
    };
    return _0x3fe6();
}

function rgbToHex(_0x3fa38f, _0x249270, _0x4f3dca) {
    var _0x351e42 = _0xd94624;
    if (_0x3fa38f > 0xff || _0x249270 > 0xff || _0x4f3dca > 0xff) throw _0x351e42(0x18e);
    return (_0x3fa38f << 0x10 | _0x249270 << 0x8 | _0x4f3dca)[_0x351e42(0x2b8)](0x10);
}

function pick_color(_0x26907d) {
    var _0x372de1 = _0xd94624,
        _0x422238 = context_seg[_0x372de1(0x176)](_0x26907d[_0x372de1(0x23f)], _0x26907d['offsetY'], 0x1, 0x1),
        _0x348cc9 = '#' + (_0x372de1(0x2bc) + rgbToHex(_0x422238[_0x372de1(0x11e)][0x0], _0x422238[_0x372de1(0x11e)][0x1], _0x422238['data'][0x2]))['slice'](-0x6);
    current_color = _0x348cc9, brush_color_context['fillStyle'] = current_color, brush_color_context[_0x372de1(0x2f6)](0x0, 0x0, BRUSH_COLOR_SIZE, BRUSH_COLOR_SIZE);
}

function single_point_drawing(_0x52d4b2, _0x3dc9d5, _0x1330c1) {
    var _0x5dff46 = _0xd94624,
        _0x344b7e = Math[_0x5dff46(0x309)](brush_size_slider[_0x5dff46(0x25c)] / 0x2);
    _0x3dc9d5[_0x5dff46(0x256)] = _0x1330c1;
    if (imageEraserDown) eraserCircle(_0x3dc9d5, _0x52d4b2['offsetX'], _0x52d4b2[_0x5dff46(0x30c)], _0x344b7e);
    else {
        if (brush_circle) aliasedCircle(_0x3dc9d5, _0x52d4b2['offsetX'], _0x52d4b2[_0x5dff46(0x30c)], _0x344b7e);
        else {
            if (brush_square) aliasedSquare(_0x3dc9d5, _0x52d4b2[_0x5dff46(0x23f)], _0x52d4b2[_0x5dff46(0x30c)], _0x344b7e);
            else brush_diamond && aliasedDiamond(_0x3dc9d5, _0x52d4b2[_0x5dff46(0x23f)], _0x52d4b2['offsetY'], _0x344b7e);
        }
    }
    _0x3dc9d5[_0x5dff46(0x2fc)]();
}

function return_offset(_0x55aceb, _0xedbdfb) {
    var _0x2d9ba8 = _0xd94624;
    return {
        'offsetX': Math[_0x2d9ba8(0x309)](_0x55aceb),
        'offsetY': Math[_0x2d9ba8(0x309)](_0xedbdfb)
    };
}

function two_point_drawing(_0x1caa1a, _0x5a364a, _0x58a368, _0x458b86) {
    var _0x1c7196 = _0xd94624;
    dx = _0x1caa1a['offsetX'] - _0x5a364a[_0x1c7196(0x23f)], dy = _0x1caa1a['offsetY'] - _0x5a364a['offsetY'];
    if (Math[_0x1c7196(0x1c2)](dx) > Math[_0x1c7196(0x1c2)](dy)) {
        if (dx > 0x0) {
            sh = dy / dx;
            for (var _0xa892dd = Math[_0x1c7196(0x309)](_0x5a364a[_0x1c7196(0x23f)]); _0xa892dd <= Math['round'](_0x1caa1a[_0x1c7196(0x23f)]); _0xa892dd++) {
                nx = _0xa892dd, ny = Math[_0x1c7196(0x145)](sh * (_0xa892dd - Math['round'](_0x5a364a[_0x1c7196(0x23f)])) + Math[_0x1c7196(0x309)](_0x5a364a['offsetY'])), single_point_drawing(return_offset(nx, ny), _0x58a368, _0x458b86);
            }
        } else {
            sh = dy / dx, x_start = Math['round'](_0x1caa1a[_0x1c7196(0x23f)]), x_end = Math[_0x1c7196(0x309)](_0x5a364a['offsetX']), y_start = Math['round'](_0x1caa1a[_0x1c7196(0x30c)]);
            for (var _0xa892dd = x_start; _0xa892dd <= x_end; _0xa892dd++) {
                nx = _0xa892dd, ny = Math[_0x1c7196(0x145)](sh * (_0xa892dd - x_start) + y_start), single_point_drawing(return_offset(nx, ny), _0x58a368, _0x458b86);
            }
        }
    } else {
        if (dy > 0x0) {
            sh = dx / dy;
            for (var _0xa892dd = Math[_0x1c7196(0x309)](_0x5a364a[_0x1c7196(0x30c)]); _0xa892dd <= Math[_0x1c7196(0x309)](_0x1caa1a[_0x1c7196(0x30c)]); _0xa892dd++) {
                ny = _0xa892dd, nx = Math[_0x1c7196(0x145)](sh * (_0xa892dd - Math[_0x1c7196(0x309)](_0x5a364a[_0x1c7196(0x30c)])) + Math['round'](_0x5a364a[_0x1c7196(0x23f)])), single_point_drawing(return_offset(nx, ny), _0x58a368, _0x458b86);
            }
        } else {
            if (dy != 0x0) {
                sh = dx / dy;
                for (var _0xa892dd = Math[_0x1c7196(0x309)](_0x1caa1a[_0x1c7196(0x30c)]); _0xa892dd <= Math[_0x1c7196(0x309)](_0x5a364a[_0x1c7196(0x30c)]); _0xa892dd++) {
                    ny = _0xa892dd, nx = Math[_0x1c7196(0x145)](sh * (_0xa892dd - Math[_0x1c7196(0x309)](_0x1caa1a[_0x1c7196(0x30c)])) + Math[_0x1c7196(0x309)](_0x1caa1a[_0x1c7196(0x23f)])), single_point_drawing(return_offset(nx, ny), _0x58a368, _0x458b86);
                }
            }
        }
    }
}
canvas[_0xd94624(0x209)](_0xd94624(0x2bb), function(_0x489322) {
    mouseDown = ![], mouseFirstMove = ![], mouseDown = ![], mouseFirstMove = ![], draw_context();
}, ![]), canvas[_0xd94624(0x209)](_0xd94624(0x23a), function(_0x4b8d64) {
    var _0x27a2b9 = _0xd94624;
    mousePos = getTouchPos(canvas, _0x4b8d64), lastEvent = mousePos, mouseDown = !![], console[_0x27a2b9(0x2f4)](lastEvent);
    if (fillDown) {
        backup_canvas();
        var _0x5b4c65 = hexToRgb(current_color)['r'],
            _0x394294 = hexToRgb(current_color)['g'],
            _0x1a4e59 = hexToRgb(current_color)['b'];
        draw_fill(context_seg, mousePos['offsetX'], mousePos[_0x27a2b9(0x30c)], _0x5b4c65, _0x394294, _0x1a4e59, 0xff, 0x1);
    } else {
        if (inpaintDown) {
            backup_canvas();
            var _0x5b4c65 = hexToRgb(current_color)['r'],
                _0x394294 = hexToRgb(current_color)['g'],
                _0x1a4e59 = hexToRgb(current_color)['b'];
            draw_fill(context_real, mousePos[_0x27a2b9(0x23f)], mousePos[_0x27a2b9(0x30c)], 0xff, 0xff, 0xff, 0x0, magicwand_tol_slider[_0x27a2b9(0x25c)]);
        } else {
            if (eyedropperhDown) pick_color(mousePos);
            else {
                if (brushDown) backup_canvas(), single_point_drawing(mousePos, context_seg, current_color);
                else {
                    if (imageEraserDown) backup_canvas(), single_point_drawing(mousePos, context_real, _0x27a2b9(0x16c));
                    else penDown | eraserDown && (backup_canvas(), context_edge[_0x27a2b9(0x200)](), context_edge[_0x27a2b9(0x238)](mousePos[_0x27a2b9(0x23f)], mousePos['offsetY']));
                }
            }
        }
    }
}, ![]), canvas[_0xd94624(0x209)]('touchmove', function(_0x316de3) {
    var _0x17c39d = _0xd94624;
    mousePos = getTouchPos(canvas, _0x316de3);
    if (mouseDown & (brushDown | penDown | eraserDown | imageEraserDown)) {
        if (penDown | eraserDown) penDown ? (context_edge[_0x17c39d(0x22e)] = 'source-over', context_edge[_0x17c39d(0x205)] = _0x17c39d(0x2d3), context_edge[_0x17c39d(0x2e0)] = 0x3) : (context_edge[_0x17c39d(0x22e)] = 'destination-out', context_edge[_0x17c39d(0x2e0)] = brush_size_slider['value']), context_edge[_0x17c39d(0x19e)](mousePos[_0x17c39d(0x23f)], mousePos['offsetY']), context_edge[_0x17c39d(0x1cf)] = context_edge[_0x17c39d(0x223)] = _0x17c39d(0x309), context_edge[_0x17c39d(0x1e2)]();
        else {
            if (brushDown) isFirefox ? single_point_drawing(mousePos, context_seg, current_color) : two_point_drawing(mousePos, lastEvent, context_seg, current_color);
            else imageEraserDown && (isFirefox ? single_point_drawing(mousePos, context_real, '#ffffff') : two_point_drawing(mousePos, lastEvent, context_real, _0x17c39d(0x16c)));
        }
        lastEvent = mousePos;
        var _0x25b72d = Math[_0x17c39d(0x309)](brush_size_slider[_0x17c39d(0x25c)] / 0x2);
        draw_context(_0x25b72d * 0x2, _0x25b72d * 0x2, mousePos['offsetX'] - _0x25b72d, mousePos[_0x17c39d(0x30c)] - _0x25b72d);
    }
}, ![]), document[_0xd94624(0x14d)]['addEventListener'](_0xd94624(0x23a), function(_0x19a16) {}, ![]), document[_0xd94624(0x14d)][_0xd94624(0x209)](_0xd94624(0x2bb), function(_0x267850) {}, ![]), document[_0xd94624(0x14d)][_0xd94624(0x209)]('touchmove', function(_0x2ea2df) {}, ![]);

function getTouchPos(_0x44e042, _0x2f0e90) {
    var _0x3b48ef = _0xd94624,
        _0x3b48a6 = _0x44e042[_0x3b48ef(0x276)]();
    return {
        'offsetX': Math[_0x3b48ef(0x309)](_0x2f0e90[_0x3b48ef(0x1ae)][0x0]['clientX'] - _0x3b48a6[_0x3b48ef(0x212)]),
        'offsetY': Math[_0x3b48ef(0x309)](_0x2f0e90[_0x3b48ef(0x1ae)][0x0][_0x3b48ef(0x1eb)] - _0x3b48a6['top'])
    };
}
download_input = function() {
    var _0x356282 = _0xd94624,
        _0x40b43b = new JSZip();
    _0x40b43b[_0x356282(0x1a2)](_0x356282(0x293), canvas_seg[_0x356282(0x144)](_0x356282(0x204))[_0x356282(0x2b6)](_0x356282(0x234))[0x1], {
        'base64': !![]
    }), _0x40b43b[_0x356282(0x1a2)](_0x356282(0x125), canvas_edge[_0x356282(0x144)](_0x356282(0x204))[_0x356282(0x2b6)](_0x356282(0x234))[0x1], {
        'base64': !![]
    }), _0x40b43b[_0x356282(0x1a2)](_0x356282(0x283), canvas_real[_0x356282(0x144)]('image/png')['split'](_0x356282(0x234))[0x1], {
        'base64': !![]
    }), _0x40b43b[_0x356282(0x1da)]({
        'type': _0x356282(0x27e)
    })[_0x356282(0x2e1)](function(_0x13ca27) {
        saveAs(_0x13ca27, 'gaugan2_input.zip');
    });
}, download_rendered = function(_0x2367a4) {
    var _0x86bde3 = _0xd94624,
        _0x469614 = canvas_output[_0x86bde3(0x144)](_0x86bde3(0x204));
    _0x2367a4[_0x86bde3(0x24d)] = _0x469614;
};

function write(_0x2c50e0) {
    var _0x3a6e9c = _0xd94624,
        _0x2f38aa = document['createElement']('p');
    _0x2f38aa['innerHTML'] = _0x2c50e0, document[_0x3a6e9c(0x14d)][_0x3a6e9c(0x2de)](_0x2f38aa);
}

function _0x771d(_0x114d5d, _0x81fa25) {
    var _0x3fe652 = _0x3fe6();
    return _0x771d = function(_0x771da0, _0x3e5f4a) {
        _0x771da0 = _0x771da0 - 0x11b;
        var _0x2b0cda = _0x3fe652[_0x771da0];
        return _0x2b0cda;
    }, _0x771d(_0x114d5d, _0x81fa25);
};

function loadSegmap() {
    var _0x5a2f72 = _0xd94624,
        _0x58804c, _0x309247, _0x47f7d6;
    if (typeof window[_0x5a2f72(0x151)] !== 'function') {
        write(_0x5a2f72(0x1d0));
        return;
    }
    _0x58804c = document[_0x5a2f72(0x24b)](_0x5a2f72(0x185));
    if (!_0x58804c) write(_0x5a2f72(0x131));
    else {
        if (!_0x58804c[_0x5a2f72(0x126)]) write('This\x20browser\x20doesn\x27t\x20seem\x20to\x20support\x20the\x20`files`\x20property\x20of\x20file\x20inputs.');
        else !_0x58804c['files'][0x0] ? write(_0x5a2f72(0x2f9)) : (_0x309247 = _0x58804c[_0x5a2f72(0x126)][0x0], fr = new FileReader(), fr['onload'] = _0xb6bb85, fr[_0x5a2f72(0x159)](_0x309247));
    }
    console['log']('load\x20image');

    function _0xb6bb85() {
        var _0x57a100 = _0x5a2f72;
        _0x47f7d6 = new Image(), _0x47f7d6['onload'] = _0x2f2723, _0x47f7d6[_0x57a100(0x284)] = fr[_0x57a100(0x1a6)];
    }

    function _0x2f2723() {
        var _0x38e45b = _0x5a2f72;
        context_seg['clearRect'](0x0, 0x0, canvas[_0x38e45b(0x272)], canvas[_0x38e45b(0x1c1)]), context_seg[_0x38e45b(0x183)](_0x47f7d6, 0x0, 0x0, canvas['width'], canvas[_0x38e45b(0x1c1)]), draw_context();
    }
}

function loadSketch() {
    var _0x3063cf = _0xd94624,
        _0x2bfe70, _0x7c9cd1, _0xd6246b;
    if (typeof window[_0x3063cf(0x151)] !== _0x3063cf(0x253)) {
        write(_0x3063cf(0x1d0));
        return;
    }
    _0x2bfe70 = document['getElementById']('sketchfile');
    if (!_0x2bfe70) write(_0x3063cf(0x131));
    else {
        if (!_0x2bfe70[_0x3063cf(0x126)]) write(_0x3063cf(0x15d));
        else !_0x2bfe70[_0x3063cf(0x126)][0x0] ? write(_0x3063cf(0x2f9)) : (_0x7c9cd1 = _0x2bfe70[_0x3063cf(0x126)][0x0], fr = new FileReader(), fr[_0x3063cf(0x294)] = _0x13db01, fr[_0x3063cf(0x159)](_0x7c9cd1));
    }
    console[_0x3063cf(0x2f4)]('load\x20image');

    function _0x13db01() {
        var _0x1f17aa = _0x3063cf;
        _0xd6246b = new Image(), _0xd6246b[_0x1f17aa(0x294)] = _0x4df107, _0xd6246b[_0x1f17aa(0x284)] = fr[_0x1f17aa(0x1a6)];
    }

    function _0x4df107() {
        var _0x2dc13f = _0x3063cf;
        context_edge[_0x2dc13f(0x25d)](0x0, 0x0, canvas['width'], canvas[_0x2dc13f(0x1c1)]), context_edge['drawImage'](_0xd6246b, 0x0, 0x0, canvas['width'], canvas[_0x2dc13f(0x1c1)]), draw_context();
    }
}

function loadReal() {
    var _0xc66688 = _0xd94624,
        _0x189a8c, _0x303e86, _0x1006ce;
    if (typeof window['FileReader'] !== 'function') {
        write(_0xc66688(0x1d0));
        return;
    }
    _0x189a8c = document['getElementById']('realfile');
    if (!_0x189a8c) write(_0xc66688(0x131));
    else {
        if (!_0x189a8c[_0xc66688(0x126)]) write(_0xc66688(0x15d));
        else !_0x189a8c['files'][0x0] ? write(_0xc66688(0x2f9)) : (_0x303e86 = _0x189a8c[_0xc66688(0x126)][0x0], fr = new FileReader(), fr[_0xc66688(0x294)] = _0x16bc69, fr[_0xc66688(0x159)](_0x303e86));
    }
    console['log'](_0xc66688(0x1ad));

    function _0x16bc69() {
        var _0x1cb4c8 = _0xc66688;
        _0x1006ce = new Image(), _0x1006ce[_0x1cb4c8(0x294)] = _0x1ff351, _0x1006ce[_0x1cb4c8(0x284)] = fr[_0x1cb4c8(0x1a6)];
    }

    function _0x1ff351() {
        var _0x171d07 = _0xc66688;
        context_real['clearRect'](0x0, 0x0, canvas[_0x171d07(0x272)], canvas[_0x171d07(0x1c1)]), context_real[_0x171d07(0x183)](_0x1006ce, 0x0, 0x0, canvas[_0x171d07(0x272)], canvas[_0x171d07(0x1c1)]), has_real_loaded = !![];
        var _0x41d460 = document[_0x171d07(0x24b)](_0x171d07(0x244))['checked'];
        !_0x41d460 && document['getElementById'](_0x171d07(0x244))[_0x171d07(0x296)](), !vis_image && document[_0x171d07(0x24b)]('vis_image')[_0x171d07(0x296)](), reset_btn_disabled(_0x171d07(0x29e)), reset_btn_disabled(_0x171d07(0x190)), reset_btn_disabled(_0x171d07(0x1f1)), reset_btn_disabled('get_sketch'), draw_context();
    }
}

function get_segment() {
    var _0x119966 = _0xd94624,
        _0x195b0e = document['getElementById']('myCheck')[_0x119966(0x2af)];
    if (_0x195b0e != !![]) alert(_0x119966(0x26a));
    else !has_real_loaded ? alert(_0x119966(0x1a0)) : $[_0x119966(0x29d)]({
        'type': _0x119966(0x266),
        'url': Url + _0x119966(0x11b),
        'data': {
            'real_image': canvas_real[_0x119966(0x144)](),
            'name': global_fn
        },
        'success': function(_0x14c664) {
            var _0x3a61c2 = _0x119966,
                _0x5bc2de = new FormData();
            _0x5bc2de[_0x3a61c2(0x1ce)](_0x3a61c2(0x12b), global_fn);
            var _0x4905a4 = new XMLHttpRequest();
            _0x4905a4[_0x3a61c2(0x11d)] = !![], _0x4905a4[_0x3a61c2(0x148)] = _0x3a61c2(0x2f5), _0x4905a4[_0x3a61c2(0x1c9)](_0x3a61c2(0x266), Url + 'gaugan2_return_segmap', !![]), _0x4905a4[_0x3a61c2(0x2d4)](_0x5bc2de);
            var _0x23ccf5 = new Image(),
                _0x2d3b4a = CANVAS_WIDTH,
                _0x5dffdd = CANVAS_HEIGHT;
            _0x4905a4[_0x3a61c2(0x294)] = function(_0x59dc4d) {
                var _0x28c600 = _0x3a61c2,
                    _0x90a060 = new Uint8Array(this['response']),
                    _0x5df41f = new Blob([_0x90a060], {
                        'type': _0x28c600(0x204)
                    }),
                    _0x4c2baf = window[_0x28c600(0x228)] || window['webkitURL'],
                    _0x3ae0bf = _0x4c2baf[_0x28c600(0x1d7)](_0x5df41f);
                _0x23ccf5[_0x28c600(0x284)] = _0x3ae0bf, console[_0x28c600(0x2f4)](_0x23ccf5[_0x28c600(0x284)]);
            }, _0x23ccf5[_0x3a61c2(0x294)] = function() {
                context_seg['drawImage'](_0x23ccf5, 0x0, 0x0, _0x5dffdd, _0x2d3b4a), draw_context();
            };
        },
        'error': function(_0x25187b) {
            var _0x282fd7 = _0x119966;
            console[_0x282fd7(0x2f4)](_0x282fd7(0x1bb));
        }
    })[_0x119966(0x156)](function(_0x529cbd) {});
}

function get_sketch() {
    var _0x856637 = _0xd94624,
        _0x3c4fec = document[_0x856637(0x24b)]('myCheck')['checked'];
    if (_0x3c4fec != !![]) alert('Please\x20check\x20the\x20button\x20in\x20terms\x20and\x20conditions\x20section\x20before\x20starting\x20using\x20the\x20app.');
    else !has_real_loaded ? alert(_0x856637(0x179)) : $[_0x856637(0x29d)]({
        'type': _0x856637(0x266),
        'url': Url + _0x856637(0x11b),
        'data': {
            'real_image': canvas_real['toDataURL'](),
            'name': global_fn
        },
        'success': function(_0x1b781e) {
            var _0x450cba = _0x856637,
                _0x59199a = new FormData();
            _0x59199a[_0x450cba(0x1ce)]('name', global_fn);
            var _0x28cdf9 = new XMLHttpRequest();
            _0x28cdf9[_0x450cba(0x11d)] = !![], _0x28cdf9[_0x450cba(0x148)] = _0x450cba(0x2f5), _0x28cdf9['open'](_0x450cba(0x266), Url + _0x450cba(0x319), !![]), _0x28cdf9[_0x450cba(0x2d4)](_0x59199a);
            var _0x58300a = new Image(),
                _0x253305 = CANVAS_WIDTH,
                _0x2fe329 = CANVAS_HEIGHT;
            _0x28cdf9[_0x450cba(0x294)] = function(_0x131284) {
                var _0x31321b = _0x450cba,
                    _0x4a1c41 = new Uint8Array(this[_0x31321b(0x172)]),
                    _0x3e0f4d = new Blob([_0x4a1c41], {
                        'type': _0x31321b(0x204)
                    }),
                    _0x4109eb = window[_0x31321b(0x228)] || window[_0x31321b(0x30e)],
                    _0x1e9c68 = _0x4109eb[_0x31321b(0x1d7)](_0x3e0f4d);
                _0x58300a['src'] = _0x1e9c68, console['log'](_0x58300a[_0x31321b(0x284)]);
            }, _0x58300a[_0x450cba(0x294)] = function() {
                var _0x260ad9 = _0x450cba;
                context_edge[_0x260ad9(0x183)](_0x58300a, 0x0, 0x0, _0x2fe329, _0x253305), draw_context();
            };
        },
        'error': function(_0xbe0a34) {
            var _0x2890bc = _0x856637;
            console[_0x2890bc(0x2f4)](_0x2890bc(0x1bb));
        }
    })[_0x856637(0x156)](function(_0x25cf21) {});
}

function loadImage() {
    var _0x47e5da = _0xd94624,
        _0x1c0bc4, _0x62f77f, _0x2bd58e;
    if (typeof window[_0x47e5da(0x151)] !== _0x47e5da(0x253)) {
        write(_0x47e5da(0x1d0));
        return;
    }
    _0x1c0bc4 = document[_0x47e5da(0x24b)](_0x47e5da(0x1de));
    if (!_0x1c0bc4) write(_0x47e5da(0x131));
    else {
        if (!_0x1c0bc4[_0x47e5da(0x126)]) write(_0x47e5da(0x15d));
        else !_0x1c0bc4[_0x47e5da(0x126)][0x0] ? write('Please\x20select\x20a\x20file\x20before\x20clicking\x20\x27Load\x27') : (_0x62f77f = _0x1c0bc4['files'][0x0], fr = new FileReader(), fr[_0x47e5da(0x294)] = _0x101b5, fr['readAsDataURL'](_0x62f77f));
    }
    console[_0x47e5da(0x2f4)](_0x47e5da(0x1ad));

    function _0x101b5() {
        var _0xce52da = _0x47e5da;
        _0x2bd58e = new Image(), _0x2bd58e[_0xce52da(0x294)] = _0x393b29, _0x2bd58e[_0xce52da(0x284)] = fr['result'];
    }

    function _0x393b29() {
        var _0x16f97e = _0x47e5da;
        custom_context['clearRect'](0x0, 0x0, custom_canvas[_0x16f97e(0x272)], custom_canvas[_0x16f97e(0x1c1)]), custom_context[_0x16f97e(0x183)](_0x2bd58e, 0x0, 0x0, custom_canvas['width'], custom_canvas['height']);
        var _0xcf7414 = new FormData();
        _0xcf7414['append']('file', custom_canvas[_0x16f97e(0x144)](_0x16f97e(0x204))), _0xcf7414['append'](_0x16f97e(0x12b), global_fn);
        var _0x54995a = new XMLHttpRequest();
        _0x54995a[_0x16f97e(0x11d)] = !![], _0x54995a[_0x16f97e(0x1c9)](_0x16f97e(0x266), Url + _0x16f97e(0x2f7), !![]), _0x54995a[_0x16f97e(0x2d4)](_0xcf7414), console[_0x16f97e(0x2f4)](global_fn), custom_image_upload = !![];
    }
}
$('#customBtn')['click'](function() {
    var _0x58914e = _0xd94624;
    custom_image_upload && (style_name = _0x58914e(0x121), console[_0x58914e(0x2f4)](style_name)), render();
}), $(_0xd94624(0x20f))[_0xd94624(0x296)](function() {
    var _0x1db64c = _0xd94624;
    style_name = 'random';
    var _0x369b29 = new FormData();
    _0x369b29[_0x1db64c(0x1ce)](_0x1db64c(0x12b), global_fn);
    var _0x2fb56e = new XMLHttpRequest();
    _0x2fb56e[_0x1db64c(0x11d)] = !![], _0x2fb56e[_0x1db64c(0x1c9)]('POST', Url + _0x1db64c(0x2d5), !![]), _0x2fb56e['send'](_0x369b29), render();
}), $(_0xd94624(0x1e5))[_0xd94624(0x296)](function() {
    style_name = '0', console['log'](style_name), render();
}), $(_0xd94624(0x194))[_0xd94624(0x296)](function() {
    style_name = '1', console['log'](style_name), render();
}), $(_0xd94624(0x1ed))['click'](function() {
    var _0x151f90 = _0xd94624;
    style_name = '2', console[_0x151f90(0x2f4)](style_name), render();
}), $(_0xd94624(0x31c))[_0xd94624(0x296)](function() {
    style_name = '3', console['log'](style_name), render();
}), $(_0xd94624(0x2ee))[_0xd94624(0x296)](function() {
    var _0x4f17a0 = _0xd94624;
    style_name = '4', console[_0x4f17a0(0x2f4)](style_name), render();
}), $('#example5')['click'](function() {
    style_name = '5', console['log'](style_name), render();
}), $('#example6')[_0xd94624(0x296)](function() {
    var _0x3e7698 = _0xd94624;
    style_name = '6', console[_0x3e7698(0x2f4)](style_name), render();
}), $(_0xd94624(0x13e))[_0xd94624(0x296)](function() {
    var _0x1bd0a4 = _0xd94624;
    style_name = '7', console[_0x1bd0a4(0x2f4)](style_name), render();
}), $(_0xd94624(0x12e))['click'](function() {
    var _0x2ce00b = _0xd94624;
    style_name = '8', console[_0x2ce00b(0x2f4)](style_name), render();
}), $(_0xd94624(0x227))[_0xd94624(0x296)](function() {
    var _0x43a0d8 = _0xd94624;
    style_name = '9', console[_0x43a0d8(0x2f4)](style_name), render();
}), $('#example10')[_0xd94624(0x296)](function() {
    var _0xc87831 = _0xd94624;
    style_name = '10', console[_0xc87831(0x2f4)](style_name), render();
}), document[_0xd94624(0x1c8)] = function(_0x15fd4e) {
    var _0x324fa8 = _0xd94624;
    if (_0x15fd4e[_0x324fa8(0x18a)] && _0x15fd4e[_0x324fa8(0x2e5)] && _0x15fd4e[_0x324fa8(0x27a)] == 0x42) $(document)[_0x324fa8(0x1f2)](function() {
        var _0x1127dc = _0x324fa8;
        document[_0x1127dc(0x24b)](_0x1127dc(0x17d))[_0x1127dc(0x296)]();
    });
    else {
        if (_0x15fd4e[_0x324fa8(0x18a)] && _0x15fd4e[_0x324fa8(0x2e5)] && _0x15fd4e['which'] == 0x46) $(document)['ready'](function() {
            var _0x2c3c17 = _0x324fa8;
            document[_0x2c3c17(0x24b)](_0x2c3c17(0x2fc))[_0x2c3c17(0x296)]();
        });
        else _0x15fd4e[_0x324fa8(0x18a)] && _0x15fd4e[_0x324fa8(0x27a)] == 0x5a && $(document)['ready'](function() {
            var _0xf8791e = _0x324fa8;
            document[_0xf8791e(0x24b)](_0xf8791e(0x1e9))[_0xf8791e(0x296)]();
        });
    }
};