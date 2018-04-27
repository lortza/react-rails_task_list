module TasksHelper

  def check_mark(attribute)
    if attribute
      raw('<i class="mr-2 fas fa-check-square"></i>')
    else
      raw('<i class="mr-2 far fa-square"></i>')
    end
  end

  def priority_mark(attribute)
    if attribute
      raw('<i class="mr-2 fas fa-exclamation-circle"></i>')
    else
      raw('<i class="mr-2 far fa-exclamation-circle"></i>')
      # raw('<i class="mr-2 fas fa-exclamation-circle"></i>')
    end

  end
end
