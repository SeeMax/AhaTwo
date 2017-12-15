<section class="mission-section" id="mission">
	<div class="content">
	
		<div class="mission-icons c-20-wide">
			<?php if( have_rows('mission_icons') ):?>
				<?php while ( have_rows('mission_icons') ) : the_row();?>
					<div class="single-mission-icon">
						<div class="mission-icon-image c-flex-center">
							<?php $image = get_sub_field('mission_icon_image'); if( !empty($image) ): ?>
								<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
							<?php endif; ?>
							<hr>
						</div>
						<div class="mission-icon-label">
							<?php the_sub_field('mission_icon_label');?>
						</div>
					</div>
			  <?php endwhile;?>
			<?php endif;?>
		</div>

		<div class="mission-intro c-75-wide">
			<h2><?php the_field('mission_headline');?></h2>
			<div class="mission-intro-copy">
				<hr>
				<?php the_field('mission_body_copy');?>
				<span class="mission-cta">
					<?php $email = get_field('contact_email', 'options'); ?>
					<?php $subject = get_field('contact_email_subject', 'options'); ?>
  				<br><br>
    			<a href="mailto:<?php echo $email; ?>?subject=<?php echo $subject; ?>">
						<?php the_field('mission_cta');?> >
					</a>
				</span>
			</div>
		</div>

	</div>
</section>