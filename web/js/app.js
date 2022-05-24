$(document).on('change', '#appbundle_medecin_region, #appbundle_medecin_departement', function () {
  let $field = $(this)
  let $regionField = $('#appbundle_medecin_region')
  let $form = $field.closest('form')
  let target = '#' + $field.attr('id').replace('departement', 'ville').replace('region', 'departement')
  let data = {}
  data[$regionField.attr('name')] = $regionField.val()
  data[$field.attr('name')] = $field.val()
  $.post($form.attr('action'), data).then(function (data) {
    let $input = $(data).find(target)
    $(target).replaceWith($input)
  })
})