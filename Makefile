.PHONY: run
run:
	jpm run -b $$(which firefox)

.PHONY: runosx
runosx:
	jpm run
