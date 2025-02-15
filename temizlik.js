// Creators: Sophie "Shinko to Kuma" - Mitchell "Superdog"
/*Update list:
V1.0 - Updated 2/03 - Added automatic grabbing of iables!
V1.1 - Updated 7/03 - Functionality on all servers!
V1.2 - Updated 8/03 - rewrote script to fix some big bugs, condensed code, retiring old version
V1.3 - Updated 9/03 - Adjusted script to work on mobile APP!
V1.4 - Updated 17/05/2024 - Fixed rounding errors and added hour/minute input
*/

var count = 0;

function scavenge() {
    // ... (önceki kodun aynı kısmı)

    // Saat ve dakika girdisi için yeni bölüm
    if ($(".scavengeTable")[0]) { // Tablo zaten oluşturulmuşsa, input alanlarını eklemeye gerek yok
        $("#runtime").empty(); // Önceki içeriği temizle
    } else {
        $("#runtime").append('<input type="number" id="hours" name="hours" size="2" maxlength="2" min="0" value="0"> saat <input type="number" id="minutes" name="minutes" size="2" maxlength="2" min="0" max="59" value="0"> dakika');
    }

    // Süre değişikliğini dinle
    $("#hours, #minutes").on("change", function () {
        let hours = parseInt($("#hours").val()) || 0;
        let minutes = parseInt($("#minutes").val()) || 0;
        let totalMinutes = hours * 60 + minutes;
        localStorage.setItem("ScavengeTimeMinutes", totalMinutes); // Dakika cinsinden sakla
        calculateHauls();
        clear();
        scavenge();
    });

    // Başlangıçta localStorage'dan süreyi yükle
    let storedMinutes = localStorage.getItem("ScavengeTimeMinutes");
    if (storedMinutes) {
        let hours = Math.floor(storedMinutes / 60);
        let minutes = storedMinutes % 60;
        $("#hours").val(hours);
        $("#minutes").val(minutes);
    }

    // ... (sonraki kodun aynı kısmı)

    function calculateHauls() {
        // ... (önceki kodun aynı kısmı)

        // Süreyi saniye cinsinden hesapla (saat ve dakika cinsinden)
        let hours = parseInt($("#hours").val()) || 0;
        let minutes = parseInt($("#minutes").val()) || 0;
        time = (hours * 60 + minutes) * 60;

        // ... (sonraki kodun aynı kısmı)
    }

    function fillInTroops(option, availableUnits, button) {
        scavengeOptions[option].forEach(units => {
            const type = units.type;
            let count = Math.round(units.count); // Yuvarlama hatasını düzelt
            let requiredCapacity = availableUnits[type] < count ? availableUnits[type] : count;
            $(`input.unitsInput[name='${type}']`).val(requiredCapacity).trigger("change");
            $(button).focus();
        });
    }

    // ... (sonraki kodun aynı kısmı)
}

scavenge();