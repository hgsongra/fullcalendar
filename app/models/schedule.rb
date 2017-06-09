class Schedule < ApplicationRecord

	def all_day_schedule?
    self.start == self.start.midnight && self.end == self.end.midnight ? true : false
  end

end
